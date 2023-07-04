import { prisma } from '../../../server/db/client';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const {nama, email, password, dimaspay} = await req.json();

  if(!nama || !email || !password) {
	return NextResponse.json({message: 'Missing Fields'}, {status: 406})
  }

  const isUserExist = await prisma.user.findFirst({
  	where: {name: nama}
  })

  if(isUserExist) {
  	return NextResponse.json({message: 'User already exists!'}, {status: 400})
  }

  const isEmailExist = await prisma.user.findFirst({
  	where: {email}
  })

  if(isEmailExist) {
  	return NextResponse.json({message: 'Email already exists!'}, {status: 400})
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
  	data: {
		name: nama,
		email,
		password: hashedPassword,
		dimaspay
	}
  })
  return NextResponse.json(user, {status: 200})
}
