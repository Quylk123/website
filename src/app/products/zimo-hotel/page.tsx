import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Zimo Hotel - Hệ thống quản lý khách sạn & lưu trú toàn diện",
    description: "Giải pháp quản lý khách sạn 4.0 toàn diện: Booking, Housekeeping, Minibar & Báo cáo. Tích hợp Zalo Mini App giúp tối ưu trải nghiệm khách hàng và tăng doanh thu.",
    keywords: ["phần mềm quản lý khách sạn", "pms hotel", "quản lý nhà nghỉ", "zalo mini app khách sạn", "booking engine", "hotel management system"],
    openGraph: {
        title: "Zimo Hotel - Nền tảng quản lý khách sạn & lưu trú toàn diện",
        description: "Giải pháp quản lý khách sạn 4.0 toàn diện: Booking, Housekeeping, Minibar & Báo cáo. Tích hợp Zalo Mini App giúp tối ưu trải nghiệm khách hàng và tăng doanh thu.",
        url: "https://zimo.vn/products/zimo-hotel",
        type: "website",
        images: [{
            url: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/DashboardLightmode.png",
            width: 1200, height: 630, alt: "Zimo Hotel Dashboard",
        }],
    },
};

export default function ZimoHotelPage() {
    return <ClientPage />;
}