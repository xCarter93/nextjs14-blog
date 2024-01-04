import NextAuth from "next-auth";
import Google from "@auth/core/providers/google";
import Github from "@auth/core/providers/github";
import { env } from "../env";
import prisma from "../db/prisma";
import { User } from "@prisma/client";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google,
    Github({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_SECRET_ID,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!profile?.email) {
        return false;
      }
      // console.log("user: ", user);
      // console.log(`account: `, account);
      // console.log("profile: ", profile);
      if (account?.provider === "github") {
        try {
          const user = await prisma.user.findUnique({
            where: { email: profile?.email },
          });

          if (!user) {
            const newUser = await prisma.user.create({
              data: {
                username:
                  typeof profile.login === "string" ? profile.login : "",
                email: typeof profile.email === "string" ? profile.email : "",
                image:
                  typeof profile.avatar_url === "string"
                    ? profile.avatar_url
                    : "",
              },
            });
          }
        } catch (error) {
          console.error(error);
          return false;
        }
      }
      return true;
    },
  },
});
