import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/blocks/header";
import Notice from "@/components/blocks/notice";
import Footer from "@/components/blocks/footer";

export const metadata: Metadata = {
  title: "Off Road Academy",
  description: "Fast track your off-road driving skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed z-20 w-full">
          <Header />
          <Notice />
        </div>
        <main className="min-h-screen lg:pt-[5.82rem] pt-[6.5rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
