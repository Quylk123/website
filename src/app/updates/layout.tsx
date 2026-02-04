import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cập Nhật Hoạt Động SEO & Marketing - Zimo",
    description: "Theo dõi các cập nhật và hoạt động mới nhất của team SEO & Marketing Zimo trên nền tảng Zalo Mini App.",
    keywords: "SEO updates, Marketing activities, Zalo Mini App blog, website optimization",
    openGraph: {
        title: "Cập Nhật Hoạt Động SEO & Marketing - Zimo",
        description: "Nhận thông báo mới nhất về SEO, Marketing và nội dung website từ Zimo.",
        type: "website",
        url: "https://zimo.vn/updates",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
