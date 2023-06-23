import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const barangs = await prisma.barang.findMany();
    return NextResponse.json(barangs, { status:200 });
  } catch (error) {
    NextResponse.json("Database Error", { status:500 });
  }
}

// const handler = async (req, res) => {
//   try {
//     const getItems = await prisma.barang.findMany();
//     res.status(200).json(getItems);
//   } catch (err) {
//     res.status(505).json(err);
//   }
// };
// export default handler;
