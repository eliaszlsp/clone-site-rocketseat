import "./globals.css";
import { Roboto } from "next/font/google";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const roboto = Roboto({
  weight: ["700", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Rocketseat · Evolua rápido como a tecnologia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className}  max-w-screen bg-[#121214] `}>
        {children}
      </body>
    </html>
  );
}
