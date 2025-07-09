import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    id: string;
  }

  interface JWT {
    id: string;
  }
}

// Usar NextAuth para evitar el warning (uso como tipo ficticio)
type _FixUnusedImport = typeof NextAuth;
