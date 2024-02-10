import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongoDB from "./mongodb";
import Admin from "@/models/admin";
import { compare } from "bcrypt";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        // console.log(username, password, "from auth.ts");

        await connectMongoDB();

        // Find the admin by username
        const admin = await Admin.findOne({ username });

        // console.log(admin, "from auth lib");
        // If admin is not found, return an error
        if (!admin) {
          throw new Error("User not found with the credentails");
        }

        const passwordMatch = await compare(password || "", admin.password);

        if (!passwordMatch) {
          throw new Error("Invalid password");
        }

        const user = { id: admin._id, name: admin.username };
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/", // Specify your signIn page here
    error: "/auth/error",
    // signOut: "/auth/signout"
  },
};

export default authOptions;
