"use client";
import React, { useEffect, useState, Suspense } from "react";
import { AiFillStar } from "react-icons/ai";
import ProductLoader from '@/utils/productloader'

const Table = ({ nama, input }) => (
  <tr>
    <th className="pb-3">{nama}</th>
    <td className="pb-3">{input}</td>
  </tr>
);

const Page = ({ params }) => {
  const [data, setData] = useState([]);
  const [harga, setHarga] = useState(0);
  const [value, setValue] = useState(1);
  const [hasil, setHasil] = useState(0);
  const [isLoading, setIsLoading] = useState(true)

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
      setHarga(result[0].Harga);
      console.log(result[0]);
      setIsLoading(false)
    };
    getItems();
  }, []);

  useEffect(() => {
    setHasil(harga * value);
  }, [harga, value]);

  return isLoading ? (<ProductLoader/>) : (<>
      <div className="flex max-lg:flex-col justify-between my-5">
      <div className="flex max-sm:flex-col justify-between">
        <div className="w-[250px] h-[250px] max-md:w-[200px] max-md:h-[200px] max-sm:w-full max-sm:h-[200px] bg-black shadow"></div>
        <div className="lg:hidden mt-3">
        <h1>{data.Nama}</h1>
          <p className="flex items-center mb-10 max-sm:mb-4">
            <AiFillStar className="text-yellow-500" /> <b>{data.Rating}</b> &nbsp;|&nbsp; <b>Terjual</b> &nbsp;
            {data.Terjual}
          </p>
          <h1>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(data.Harga)}
          </h1>
          </div>
          
        </div>
          <div className="mx-2 max-sm:my-5 lg:hidden sm:flex items-center justify-between">
          <div className="bg-zinc-300 my-5 rounded flex justify-between py-2 px-5 sm:w-3/4">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(hasil)}
            <div>
        <button className="border border-black rounded px-2" onClick={
            () => {
                if (value <= 0) setValue(0);
              else setValue(value - 1); 
              console.log(value)}
            }>-</button>
            <input
              type="number"
              className="w-[40px] mx-2 text-center"
              value={value}
              onChange={(e) => {
                if (e.target.value < 0) e.target.value = null;
                if (e.target.value >= data.Jumlah) e.target.value = data.Jumlah;
                setValue(parseInt(e.target.value));
              }}
            />
          <button className="border border-black rounded px-2" onClick={() => {
              if (value >= data.Jumlah) setValue(data.Jumlah);
              else setValue(value + 1); 
              console.log(value)}
              }>+</button>
              </div>
          </div>
          <div>
          <button className="bg-zinc-600 text-zinc-100 font-semibold max-sm:hidden px-5 py-2 shadow">Buy</button>
          </div>
        </div>
        <div className="min-[1440px]:w-6/12 xl:w-5/12 lg:w-4/12 lg:overflow-y-auto lg:max-h-[80vh] p-1 flex flex-col">
          <div className="max-lg:hidden">
        <h1>{data.Nama}</h1>
          <p className="flex items-center mb-10 max-sm:mb-4">
            <AiFillStar className="text-yellow-500" /> <b>{data.Rating}</b> &nbsp;|&nbsp; <b>Terjual</b> &nbsp;
            {data.Terjual}
          </p>
          <h1>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(data.Harga)}
          </h1>
          </div>
      <h2 className="mt-20 mb-3 max-sm:mt-10">Detail</h2>
      <table className="text-left max-lg:w-1/2 max-sm:w-full">
        <tbody>
          <Table nama="Kondisi" input={data.Kondisi} />
          <Table nama="Jenis" input={data.Jenis} />
          <Table nama="Jumlah" input={data.Jumlah} />
          <Table nama="Rating" input={data.Rating} />
        </tbody>
      </table>
      <p className="max-sm:mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Imperdiet massa tincidunt nunc pulvinar. Condimentum id venenatis a condimentum. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Pretium lectus quam id leo in vitae turpis massa. Pellentesque habitant morbi tristique senectus et netus. Sed faucibus turpis in eu mi bibendum. At varius vel pharetra vel turpis nunc eget. Ut etiam sit amet nisl purus in mollis nunc. Placerat vestibulum lectus mauris ultrices eros. Scelerisque eleifend donec pretium vulputate sapien nec. Ornare arcu dui vivamus arcu felis bibendum ut tristique et.

Sapien et ligula ullamcorper malesuada. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Libero justo laoreet sit amet cursus sit amet dictum sit. Sagittis orci a scelerisque purus semper eget duis. Nam libero justo laoreet sit amet cursus sit. Feugiat vivamus at augue eget arcu dictum. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Urna neque viverra justo nec ultrices dui sapien eget mi. Malesuada nunc vel risus commodo viverra maecenas accumsan. Nibh sit amet commodo nulla facilisi.

Et netus et malesuada fames. Maecenas accumsan lacus vel facilisis volutpat. Egestas quis ipsum suspendisse ultrices. Vitae congue eu consequat ac felis donec et odio pellentesque. Tristique magna sit amet purus gravida quis blandit turpis. Non sodales neque sodales ut etiam sit. Amet nisl purus in mollis nunc sed. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Neque convallis a cras semper auctor neque vitae tempus. Lectus magna fringilla urna porttitor rhoncus. Turpis in eu mi bibendum neque egestas congue. Auctor neque vitae tempus quam pellentesque nec nam. Parturient montes nascetur ridiculus mus mauris.

Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Turpis egestas maecenas pharetra convallis posuere morbi. Eu augue ut lectus arcu bibendum. Blandit cursus risus at ultrices. Sollicitudin nibh sit amet commodo nulla facilisi nullam. In nulla posuere sollicitudin aliquam ultrices. Adipiscing bibendum est ultricies integer quis. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Leo vel fringilla est ullamcorper eget. Nisl nisi scelerisque eu ultrices vitae auctor eu. Nibh cras pulvinar mattis nunc. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Ante in nibh mauris cursus. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Ultricies lacus sed turpis tincidunt id aliquet risus. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pulvinar pellentesque habitant morbi tristique senectus.

Vestibulum sed arcu non odio euismod. Odio aenean sed adipiscing diam donec adipiscing tristique. Pharetra convallis posuere morbi leo urna molestie at elementum. Egestas pretium aenean pharetra magna ac. Fermentum et sollicitudin ac orci phasellus egestas tellus. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Suscipit tellus mauris a diam maecenas sed enim ut. Turpis cursus in hac habitasse. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Neque vitae tempus quam pellentesque nec. Aenean euismod elementum nisi quis. Quisque non tellus orci ac auctor. Molestie at elementum eu facilisis sed odio morbi quis commodo. Nullam non nisi est sit. Nisi quis eleifend quam adipiscing. Maecenas accumsan lacus vel facilisis volutpat est velit. Velit ut tortor pretium viverra suspendisse. Nibh ipsum consequat nisl vel. Magna etiam tempor orci eu lobortis elementum nibh tellus. Dolor sit amet consectetur adipiscing elit pellentesque.</p>
        </div>
        <div className="mx-2 max-sm:my-5 max-lg:hidden">
        <div className="p-5 border border-black rounded">
        <h5>Jumlah</h5>
        <button className="border border-black rounded px-2" onClick={
            () => {
                if (value <= 0) setValue(0);
              else setValue(value - 1); 
              console.log(value)}
            }>-</button>
            <input
              type="number"
              className="w-[40px] mx-2 text-center"
              value={value}
              onChange={(e) => {
                if (e.target.value < 0) e.target.value = null;
                if (e.target.value >= data.Jumlah) e.target.value = data.Jumlah;
                setValue(parseInt(e.target.value));
              }}
            />
          <button className="border border-black rounded px-2" onClick={() => {
              if (value >= data.Jumlah) setValue(data.Jumlah);
              else setValue(value + 1); 
              console.log(value)}
              }>+</button>
          <div className="bg-zinc-300 my-10 rounded flex justify-between py-2 px-5 w-[250px]">
          <b>Total:</b>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(hasil)}
          </div>
          <button className="bg-zinc-600 text-zinc-100 w-full font-semibold max-sm:fixed max-sm:bottom-2 max-sm:left-2 max-sm:right-2 p-2 shadow">Buy</button>
        </div>
        </div>
      </div>
      <button className="bg-zinc-600 text-zinc-100 font-semibold sm:hidden fixed bottom-2 left-5 right-5 p-2 m-0 rounded shadow">Buy</button>
      </>)
};

export default Page;
