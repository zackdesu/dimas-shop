"use client";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai"

const Table = ({nama, input}) => (
	<tr>
		<th className="pb-3 pr-10">{nama}</th>
		<td className="pb-3">{input}</td>
	</tr>
)

const Page = ({ params }) => {
  const [data, setData] = useState([]);
	const [harga, setHarga] = useState(0)
	const [value, setValue] = useState(1)
	const [hasil, setHasil] = useState(0)
	
  useEffect(() => {
    const getItems = async () => {
      const res = await fetch(`/product/api?id=${params.id}`, {
        revalidate: 60,
      });

      if (!res.ok) {
        console.log(res);
      }

      const result = await res.json();
      setData(result[0]);
	  setHarga(result[0].Harga)
	  console.log(result[0])
    };
    getItems();
  }, []);
  
  useEffect(() => { 
	  setHasil(harga * value)
  }, [harga, value])
  
  return (
  <>
    <div className="flex justify-between my-5">
		<div className="w-[40vw] h-[25vw] bg-black"></div>
		<div>
		<h1>{data.Nama}</h1>
		<p className="flex items-center mb-10">
		<AiFillStar className="text-yellow-500" /> {data.Rating} | Terjual {data.Terjual}
		</p>
		<h1>{new Intl.NumberFormat("id-ID", {
				style:"currency",
				currency: "IDR"
		}).format(data.Harga)}</h1>
		<div className="bg-zinc-300 my-10 rounded flex justify-between py-2 px-5">
			{new Intl.NumberFormat("id-ID", {
				style:"currency",
				currency: "IDR"
		}).format(hasil)}
			<input type="number" className="w-[40px]" onChange={(e) => {
				if(e.target.value <= 1) e.target.value = 1
				if(e.target.value >= data.Jumlah) e.target.value = data.Jumlah
				setValue(e.target.value)
			}}/>
		</div>
		<button className="bg-white w-full font-semibold">Buy</button>
		</div>
    </div>
	<table className="my-20 text-left">
		<tbody>
		<Table nama="Kondisi" input={data.Kondisi}/>
		<Table nama="Jenis" input={data.Jenis}/>
		<Table nama="Jumlah" input={data.Jumlah}/>
		<Table nama="Rating" input={data.Rating}/>
		</tbody>
	</table>
</>
  );
};

export default Page;
