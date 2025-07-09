// lib/auth.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.id = profile.id;
      }
      return token;
    },
    async session({ session, token }) {
      Object.assign(session, { id: token.id });   
      return session;
    },
  },
});
console.log("GitHub Client ID:", process.env.GITHUB_CLIENT_ID);
