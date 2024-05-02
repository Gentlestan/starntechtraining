import Transition from "./template";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
    title: "Stantech - Training and Installation Services",
    description: "Stantech offers comprehensive training and installation services for solar, CCTV, fire alarm systems, html, css, javascript and more. Get in touch with us today!",
  };
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      >
        <Navbar/>
        
          <Transition>
            {children}
          </Transition>
        
        <Footer/>
        </body>
    </html>
  );
}
