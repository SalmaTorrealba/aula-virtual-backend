import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Extender tipos de NextAuth para incluir "role"
declare module "next-auth" {
  interface User {
    role?: string;
  }

  interface Session {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string | null;
  }
}


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const users = [
          { id: "1", email: "admin@aula.com", password: "1234", role: "admin" },
          { id: "2", email: "profesor@aula.com", password: "1234", role: "profesor" },
          { id: "3", email: "estudiante@aula.com", password: "1234", role: "estudiante" },
        ];

        const user = users.find(
          (u) =>
            u.email === credentials?.email &&
            u.password === credentials?.password
        );

        if (!user) return null;

        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
