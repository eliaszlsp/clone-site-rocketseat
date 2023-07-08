import "./globals.css";
import { Roboto } from "next/font/google";

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
