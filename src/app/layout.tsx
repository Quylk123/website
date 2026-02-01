import type { Metadata } from "next";
import { Manrope } from "next/font/google"; // Import font
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zimo - Nền tảng Mini App và Quản lý Bán hàng đa kênh",
  description: "Giải pháp trọn gói tích hợp Website bán hàng, Zalo Mini App và quản lý vận hành cho doanh nghiệp bán lẻ & dịch vụ.",
  openGraph: {
    title: "Zimo Platform - Bán hàng & Booking trong tầm tay",
    description: "Tăng doanh thu với giải pháp Mini App và quản lý tập trung.",
    url: "https://zimo.vn",
    siteName: "Zimo Solutions",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={manrope.variable}>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />

        {/* Floating Widget - Global */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
          <div className="bg-[var(--greyscale-0)] text-[var(--greyscale-900)] px-4 py-2 rounded-lg shadow-lg mb-2 mr-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Chat ngay với Thắng Zimo! 👋
          </div>
          <a href="https://zalo.me/0899111195" target="_blank" className="w-16 h-16 bg-[var(--base-primary)] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,99,235,0.5)] hover:bg-[var(--primary-300)] hover:scale-110 transition-all duration-300 relative overflow-hidden">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-30 animate-ping"></span>

            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" className="w-9 h-9 filter brightness-0 invert relative z-10" />
          </a>
        </div>
      </body>
    </html>
  );
}
