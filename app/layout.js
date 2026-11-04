import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={spaceGrotesk.className}>
      <body>{children}</body>
    </html>
  );
}
