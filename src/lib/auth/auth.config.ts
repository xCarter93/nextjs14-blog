import { Session, User } from "next-auth";
import { NextRequest } from "next/server";

type ExtendedUser = User & { isAdmin: boolean };

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        (token.id = user.id), (token.isAdmin = user.isAdmin);
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token) {
        (session.user.id = token.id), (session.user.isAdmin = token.isAdmin);
      }

      return session;
    },
    authorized({
      auth,
      request,
    }: {
      auth: Session | null;
      request: NextRequest;
    }) {
      const user = auth?.user as ExtendedUser | undefined;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      //ONLY ADMIN CAN ACCESS ADMIN DASHBOARD
      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      //ONLY AUTHENTICATED USERS CAN ACCESS BLOG PAGE
      if (isOnBlogPage && !user) {
        return false;
      }

      //ONLY UNAUTHENTICATED USERS CAN ACCESS LOGIN PAGE
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
