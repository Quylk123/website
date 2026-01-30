import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Zimo Ecommerce - Tạo Website & Mini App Bán Hàng",
    description: "Giải pháp tạo website bán hàng và Zalo Mini App đồng bộ, quản lý tập trung.",
};

export default function ZimoEcommercePage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-[var(--greyscale-900)] mb-4">Zimo Ecommerce</h1>
            <p className="text-lg text-[var(--greyscale-500)]">Trang đang được xây dựng...</p>
        </div>
    );
}
