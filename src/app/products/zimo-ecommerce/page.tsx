import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: "Zimo Ecommerce - Quản Lý Bán Hàng & Zalo Mini App Đồng Bộ",
    description: "Giải pháp quản lý bán hàng tập trung và Zalo Mini App đồng bộ sản phẩm, đơn hàng, tồn kho. Tăng trưởng doanh thu bán lẻ với chi phí tối ưu.",
    keywords: ["quản lý bán hàng", "zalo mini app bán hàng", "phần mềm quản lý bán hàng", "bán hàng đa kênh", "tạo mini app zalo"],
    openGraph: {
        title: "Zimo Ecommerce - Quản Lý Bán Hàng & Zalo Mini App",
        description: "Sở hữu ngay hệ thống quản lý và Mini App bán hàng chuyên nghiệp chỉ trong 5 phút.",
        url: "https://zimo.vn/products/zimo-ecommerce",
        type: "website",
        images: [{
            url: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/DashboardLightmode.png",
            width: 1200, height: 630, alt: "Zimo Ecommerce Dashboard",
        }],
    },
};

export default function ZimoEcommercePage() {
    return <ClientPage />;
}
