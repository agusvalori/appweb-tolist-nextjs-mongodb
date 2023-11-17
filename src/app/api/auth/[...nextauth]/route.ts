import { User } from "@/models/User";
import { connectDB } from "@/utils/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Nombre de usuario",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials, req) {
        await connectDB();
        const { password, username } = credentials as any;
        const user = await User.findOne({ username: username });
        if (!user || user?.password !== password) {
          throw new Error("Credenciales invalidas");
        }
        user.password = "qwerty";
        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/signin",
  },
});

export { handler as GET, handler as POST };
