import type {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Your Username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Your Password"
                },
            },
            async authorize(credentials){
                const data = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({

                        username: credentials?.username,
                        password: credentials?.password,
                        // expiresInMins: 60, // optional
                    })
                });

                if (data.status === 200) {
                    return await data.json()
                }

                return null;
            }
        })
    ],
}