import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import AOSInitializer from "@/componentes/AosInitializer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"]
})

export const metadata = {
  title: "Lucaswebsites",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased`}
      >
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}
