'use client'
import Navbar from "@/components/navbar";
import "./globals.css";
import Provider from "./context/AuthContext";
import React, { useRef } from 'react'

export const metadata = {
  title: "Dimas Tech Supply",
  description: "Dimas Tech Supply is a shop that sells PC components.",
};

export default function RootLayout({ children }) {
	const menu = useRef()
  return (
    <html lang="id">
      <body className="box-border font-poppins">
	<Provider>
        <Navbar ref={menu}/>
        <div className="mt-[86px] max-sm:mt-[63px]" onClick={() => {
	menu.current.classList.add('hidden')
	}}>{children}</div>
	</Provider>
      </body>
    </html>
  );
}
