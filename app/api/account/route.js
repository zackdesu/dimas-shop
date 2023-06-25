import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const akuns = await prisma.akun.findMany();
    return NextResponse.json(akuns, { status: 200 });
  } catch (error) {
    NextResponse.json("Database Error", { status: 500 });
  }
}
