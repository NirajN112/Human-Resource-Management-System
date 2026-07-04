// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Send login credentials to your custom Express API

          const res = await fetch("http://localhost:8000/api/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            // credentials: "include", // remove if using localStorage only
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });
          const data = await res.json();

          // If Express API returns a 200 OK and a user object, return it to NextAuth
          if (res.ok && data.user) {
            return {
              id: data.user.employeeId,
              name: data.user.name,
              email: data.user.email,
              role: data.user.role,
              token: data.token, // Store the backend JWT if needed for API requests
            };
          }

          // If authentication fails, return null or throw an error string
          throw new Error(data.message || "Invalid credentials");
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    // 1. Save data from authorize() into the NextAuth encrypted JWT token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.backendToken = user.token;
      }
      return token;
    },
    // 2. Expose those properties to the frontend session object
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.backendToken = token.backendToken;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login", // Redirects to your custom login page if unauthenticated
  },
  secret: process.env.NEXTAUTH_SECRET, // Needed to encrypt the NextAuth cookie
});

export { handler as GET, handler as POST };
