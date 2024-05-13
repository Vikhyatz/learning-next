import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const authOptions = NextAuth({
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_APP_CLIENT_ID,
            clientSecret: process.env.GITHUB_APP_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
})
// this is route js

export { authOptions as GET, authOptions as POST }