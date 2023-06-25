import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    const barang = await prisma.barang.findMany({
      where: {
        id,
      },
    });
    return NextResponse.json(barang, { status: 200 });
  } catch (error) {
    NextResponse.json("Database Error", { status: 500 });
  }
}
