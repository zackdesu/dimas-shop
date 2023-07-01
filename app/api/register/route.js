import { prisma } from '../../../server/db/client';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const {nama, email, password} = await req.json();

  if(!nama || !email || !password) {
	return NextResponse.json({message: 'Missing Fields'}, {status: 406})
  }

  const exist = await prisma.user.findFirst({
  	where: {email}
  })

  if(exist) {
  	return NextResponse.json({message: 'Email already exists!'}, {status: 400})
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
  	data: {
		name: nama,
		email,
		password: hashedPassword
	}
  })
  return NextResponse.json(user, {status: 200})
}
