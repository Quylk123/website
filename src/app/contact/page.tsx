import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Liên Hệ & Hỗ Trợ - Zimo.vn",
    description: "Liên hệ với đội ngũ Zimo để được tư vấn và hỗ trợ.",
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-[var(--greyscale-900)] mb-4">Liên Hệ & Hỗ Trợ</h1>
            <p className="text-lg text-[var(--greyscale-500)]">Thông tin liên hệ đang được cập nhật...</p>
        </div>
    );
}
