import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'samAsher@gmail.com' },
                password: { label: 'Password', types: 'password', placeholder: '123abc!@#' },
            },
            async authorize(credentials: any) {
                console.log(credentials)
                return {
                    id: "user1",
                    email: credentials.email
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: ({ session, token, user }: any) => {
            console.log(session);
            if (session && session.user) {
                session.user.id = token.sub
            }
            return session
        }
    },
    pages:{
        signIn: "/signin"
    }
}