import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Api = async (req, res) => {
  try {
    const getItems = await prisma.barang.findMany();
    res.status(200).json(getItems);
  } catch (err) {
    res.status(505).json(err);
  }
};
export default Api;
