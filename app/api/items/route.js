import { NextResponse } from "next/server";
import { prisma } from '../../../server/db/client'

export async function GET() {
  try {
    const barangs = await prisma.barang.findMany();
    return NextResponse.json(barangs, { status:200 });
  } catch (error) {
    NextResponse.json("Database Error", { status:500 });
  }
}
