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
		const username = e.target.Username.value
		const nama = username.toLowerCase()
		const data = {
			nama,
			email: e.target.Email.value,
			password: e.target.Password.value,
			dimaspay: 0
			}
		const res = await fetch('/api/register', {
			method: "POST",
			headers: {
			"Content-Type": "application/json"
			},
			body: JSON.stringify(data),
//			credentials: 'include'
			})
			
		const result = await res.json()
		
		if(!res.ok){
			return console.log(result.message)
		}
		console.log(result.message)
		signIn()
	}
        return (
                <form onSubmit={onSubmit} className="flex flex-col items-center mt-5">
                        <h1>Register your account</h1>
                        <InputForm nama="Username" required/>
			<InputForm nama="Email" type="email" className="invalid:ring-pink-500 invalid:text-pink-500" required minLength={6} maxLength={30}/>
                        <InputForm nama="Password" type="password" className="invalid:ring-pink-500 invalid:text-pink-500" required minLength={6} maxLength={20}/>
                        <button type="submit" className="py-2 px-5 bg-neutral-700 text-neutral-100 mt-5 rounded shadow">Register</button>
			<p className="mt-5">Already have an account? Login <span onClick={() => signIn()} className="text-blue-500 cursor-pointer">here</span></p>
                </form>
        )
}
