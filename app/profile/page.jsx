import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route'
import User from '../user'

export default async function Page() {

  const sessions = await getServerSession(authOptions)
  return (
	<>
	<div>Test</div>
	<pre>{JSON.stringify(sessions)}</pre>
	<User/>
	</>
  )
  
}
