import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raptis Packing",
  description: "Raptis Packing",
  icons: {
    icon: "/favicon.ico", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* add this */}
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
