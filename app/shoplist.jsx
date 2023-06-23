"use client";

import Card from "@/components/card";
import { useEffect, useState } from "react";

async function getItems() {
  const base_url =
    process.env.NODE_ENV === "production"
      ? "https://dimas-shop.vercel.app"
      : "http://localhost:3000";
  const res = await fetch(base_url + "/api/getitems");
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

const ShopList = async () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getItems()
      .then((items) => setData(items))
      .error((err) => console.log(err));
  }, []);

  return (
    <div className="flex">
      <div className="mt-10 mb-5 max-w-full">
        <h2>Rekomendasi Untukmu</h2>
        <p className="text-[#00000090]">Karena kamu baru saja mencari Laptop</p>
        <div className="mt-5 flex flex-row overflow-x-auto wrapper">
          {data.slice(0, 8).map((item) => (
            <Card
              key={item.id}
              Nama={item.Nama}
              Rating={item.Rating}
              Terjual={item.Terjual}
              Harga={new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(item.Harga)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopList;
