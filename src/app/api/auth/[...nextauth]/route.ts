// export { GET, POST } from "@/lib/auth/auth";

import { env } from "@/lib/env";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_SECRET_ID,
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
