import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/blocks/header";
// import Notice from "@/components/blocks/notice";
import { Toaster } from "@/components/ui/toaster";
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
          {/* <Notice /> */}
        </div>
        <main className="min-h-screen lg:pt-[4rem] pt-[3.8rem]">
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
