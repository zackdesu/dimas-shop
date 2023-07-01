import NextAuth from "next-auth/next"
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '../../../../server/db/client'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

export const authOptions = {
	session: {
		strategy: 'jwt'
	},
	adapter: PrismaAdapter(prisma),
	providers: [
	  CredentialsProvider({
	    name: "credentials",
	      credentials: {},
		async authorize(credentials){
		  const user = {id: 1, name:"Alok", email:"alok@email.com"}
		  return user;
		}
})
		],
	secret: process.env.SECRET,
	debug: process.env.NODE_ENV === "development",
	pages: {signIn: "/login"}
	}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
