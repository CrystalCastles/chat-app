import NextAuth, { DefaultSession } from "next-auth/next";

declare module 'next-auth' {
  interface Session {
    firebaseToken?: string;
    user: {
      if: string;
    } & DefaultSession["user"]
  }
}