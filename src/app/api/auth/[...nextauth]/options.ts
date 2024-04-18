import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        CredentialsProvider ({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "youre-cool"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "me-too"
                },
            },
            async authorize(credentials){
                //placeholder
                const user = {id:"33", name: "Dave", password: "letsgo"}

                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                }
                else return null;
            }
        })
    ]
}