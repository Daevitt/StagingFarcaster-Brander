import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Farcaster MiniApp",
  description: "Tasklist + NFT Manager in Web3 Matrix style",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-green-300 font-mono flex items-center justify-center min-h-screen">
        {/* Contenedor oficial miniapp 424x695 */}
        <div className="w-[424px] h-[695px] border border-green-500/30 rounded-xl shadow-[0_0_20px_#00ff99] overflow-hidden flex flex-col">
          <Header />
          <main className="flex-1 p-4 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
