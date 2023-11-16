import { User } from "@/models/User";
import { connectDB } from "@/utils/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
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
        const { password, username } = credentials;
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
    jwt({ account, token, user, profile, session, trigger }) {
      //token.rol = "administrador";

      if (user) {
        token.user = user;
      }
      console.log("jwt: ", { token });
      return token;
    },
    session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
