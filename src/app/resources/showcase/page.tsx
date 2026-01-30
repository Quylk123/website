import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Khách Hàng Tiêu Biểu - Showcase",
    description: "Các dự án tiêu biểu đã triển khai thành công cùng Zimo.",
};

export default function ShowcasePage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-[var(--greyscale-900)] mb-4">Showcase Khách Hàng</h1>
            <p className="text-lg text-[var(--greyscale-500)]">Danh sách khách hàng đang được cập nhật...</p>
        </div>
    );
}
