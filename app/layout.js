import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "Dimas Tech Supply",
  description: "Dimas Tech Supply is a shop that sells PC components.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="box-border font-poppins">
        <Navbar />
        <div className="mt-[116px] max-sm:mt-[74px]">{children}</div>
      </body>
    </html>
  );
}
