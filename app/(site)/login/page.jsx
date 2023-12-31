'use client'

import React, {useEffect} from 'react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
const InputForm = ({nama, type="text", className, ...props}) => (
        <div className="flex flex-col mt-10 w-1/2">
                <label htmlFor={nama} className="font-semibold text-zinc-600">{nama}</label>
                <input type={type} id={nama} name={nama} autoComplete="off" className={"px-3 py-2 outline-none focus:ring-2 ring-cyan-500 "+ className} {...props}/>
        </div>
)

export default function Page() {

	const onSubmit = async (e) => {
		e.preventDefault();
		const data = {
			name: e.target.Username.value,
			password: e.target.Password.value,
			}
		const res = await signIn('credentials', data)

		console.log(res)
				
	}
        return (
                <form onSubmit={onSubmit} className="flex flex-col items-center mt-5">
                        <h1>Login Page</h1>
                        <InputForm nama="Username" required/>
                        <InputForm nama="Password" type="password" className="invalid:ring-pink-500 invalid:text-pink-500" required minLength={6} maxLength={20}/>
                        <button type="submit" className="py-2 px-5 bg-neutral-700 text-neutral-100 mt-5 rounded shadow">Login</button>
			<p className="mt-5">Don&apos;t have any? Create <Link href="/register" className="text-blue-500">here</Link></p>
                </form>
        )
}
