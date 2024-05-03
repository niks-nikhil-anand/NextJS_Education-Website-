import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/component/Navbar";
import Footer from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cranax Education and Career Solutions",
  description: "At Cranax Education, we believe in empowering students with the knowledge and skills they need to excel in their academic and professional journeys. As an ISO Certified institution, we are committed to delivering excellence in education and career development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
