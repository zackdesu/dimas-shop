import NextAuth from "next-auth/next"
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '../../../../server/db/client'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import bcrypt from 'bcryptjs'

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
		  if(!credentials.name || !credentials.password){
			throw new Error('Missing Fields')
		  }

		  const user = await prisma.user.findFirst(
		  	{where: {name: credentials.name}}
		  )

		  if(!user){
			throw new Error('No user found')
		  }
		  const passwordMatch = await bcrypt.compare(credentials.password, user.password)
		  if(!passwordMatch) throw new Error('Incorrect Password!')
		  return user
		}
})
		],
	secret: process.env.SECRET,
	debug: process.env.NODE_ENV === "development",
	pages: {signIn: "/login"},
	callbacks: {
  async redirect({url, baseUrl}) {return baseUrl},
  session: async (session) => {
    if (!session) return;
    
    const userData = await prisma.user.findFirst({
      where: {email: session.session.user.email}
    });

    return {
      session: {
        user: {
          id: userData.id,
          username: userData.name,
          email: userData.email,
          dimaspay: userData.dimaspay
        },
        expires: session.session.expires
      }
    };
  },
},
	}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
