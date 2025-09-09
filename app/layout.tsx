import "./globals.css";
import Header from "../components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-green-300 font-mono min-h-screen">
        <Header />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
