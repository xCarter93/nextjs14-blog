import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "../env";
import prisma from "../db/prisma";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (username: string, password: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      throw new Error("Wrong credentials");
    }

    if (!password || !user.password) {
      return null;
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new Error("Wrong credentials");
    }

    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to login");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_SECRET_ID,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        try {
          const user = await login(username, password);

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "github") {
        if (!profile?.email) {
          return false;
        }
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
    ...authConfig.callbacks,
  },
});
