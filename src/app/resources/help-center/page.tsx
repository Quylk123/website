import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tài Liệu Hướng Dẫn Sử Dụng",
    description: "Hướng dẫn sử dụng chi tiết các tính năng của Zimo Platform.",
};

export default function HelpCenterPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-[var(--greyscale-900)] mb-4">Tài Liệu Hướng Dẫn</h1>
            <p className="text-lg text-[var(--greyscale-500)]">Trang đang được xây dựng...</p>
        </div>
    );
}
