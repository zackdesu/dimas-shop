import "./globals.css";
import Provider from "./context/AuthContext";
import React from 'react'
import Navbar from '@/components/navbar'
export const metadata = {
  title: "Dimas Tech Supply",
  description: "Dimas Tech Supply is a shop that sells PC components.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="box-border font-poppins">
	<Provider>
        <Navbar />
        <div className="mt-[86px] max-sm:mt-[63px]">{children}</div>
	</Provider>
      </body>
    </html>
  );
}
