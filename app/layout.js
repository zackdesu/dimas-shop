import "./globals.css";
import Provider from "./context/AuthContext";
import React from 'react'

export const metadata = {
  title: "Dimas Tech Supply",
  description: "Dimas Tech Supply is a shop that sells PC components.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="box-border font-poppins">
	<Provider>
        {children}
	</Provider>
      </body>
    </html>
  );
}
