import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Zimo Hotel - Giải pháp Mini App Khách Sạn chuyên nghiệp trên Zalo & Facebook",
    description: "Mini App Khách Sạn toàn diện từ Zimo: Booking tự động, quản lý phòng, tích điểm khách hàng. Tích hợp Zalo OA giúp tăng 200% tỷ lệ đặt phòng.",
    keywords: ["mini app khách sạn", "zalo mini app khách sạn", "phần mềm quản lý khách sạn", "pms hotel", "quản lý nhà nghỉ", "booking engine", "hotel management system"],
    alternates: {
        canonical: "https://zimo.vn/products/zimo-hotel",
    },
    openGraph: {
        title: "Zimo Hotel - Giải pháp Mini App Khách Sạn chuyên nghiệp",
        description: "Mini App Khách Sạn toàn diện: Booking tự động, quản lý phòng, tích điểm. Tích hợp Zalo OA giúp tăng 200% tỷ lệ đặt phòng.",
        url: "https://zimo.vn/products/zimo-hotel",
        type: "website",
        images: [{
            url: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/DashboardLightmode.png",
            width: 1200, height: 630, alt: "Zimo Hotel Dashboard",
        }],
    },
};

export default function ZimoHotelPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Zimo Hotel - Mini App Khách Sạn",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, Zalo, Facebook",
        "description": "Giải pháp Mini App Khách Sạn toàn diện: Booking tự động, quản lý phòng, tích điểm khách hàng. Tích hợp Zalo OA giúp tăng 200% tỷ lệ đặt phòng.",
        "offers": {
            "@type": "Offer",
            "price": "Liên hệ",
            "priceCurrency": "VND"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "50"
        },
        "featureList": [
            "Booking tự động qua Zalo",
            "Sơ đồ phòng trực quan",
            "Hệ thống tích điểm Loyalty",
            "Gửi tin ZNS tự động",
            "Tích hợp PMS/POS",
            "Báo cáo thống kê chi tiết"
        ],
        "author": {
            "@type": "Organization",
            "name": "Zimo",
            "url": "https://zimo.vn"
        },
        "url": "https://zimo.vn/products/zimo-hotel"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ClientPage />
        </>
    );
}