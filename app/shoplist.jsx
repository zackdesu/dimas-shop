"use client";
import React, { useEffect, useState, Suspense } from "react";
const Card = React.lazy(() => import("../components/card"));
import Loader from "@/utils/loader";
import Link from "next/link";

const ShopList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch("/api/items", { revalidate: 60 });

      if (!res.ok) {
        console.log(res);
      }

      const result = await res.json();
      setData(result);
    };

    getItems();
  }, []);
  return (
    <div className="flex flex-col h-[2000px]">
      <div className="mt-10 mb-5 max-w-full">
        <h2>Rekomendasi Untukmu</h2>
        <p className="text-[#00000090]">Karena kamu baru saja mencari Laptop</p>
        <div className="mt-5 flex flex-row overflow-x-auto wrapper">
          {data.slice(0, 8).map((item, i) => (
            <Suspense fallback={<Loader />} key={i}>
              <Link href={"/product/" + item.id}>
                <div>
                  <Card
                    Nama={item.Nama}
                    Rating={item.Rating}
                    Terjual={item.Terjual}
                    Harga={new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.Harga)}
                  />
                </div>
              </Link>
            </Suspense>
          ))}
        </div>
      </div>
	  <div className="my-5">
		<h2>Barang lainnya</h2>
		<div className="flex flex-wrap mt-5 justify-center">
          {data.slice(7).map((item, i) => (
            <Suspense fallback={<Loader />} key={i}>
              <Link href={"/product/" + item.id}>
                <div>
                  <Card
                    Nama={item.Nama}
                    Rating={item.Rating}
                    Terjual={item.Terjual}
                    Harga={new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.Harga)}
					className="mb-5"
                  />
                </div>
              </Link>
            </Suspense>
          ))}
		</div>
	  </div>
    </div>
  );
};

export default ShopList;
