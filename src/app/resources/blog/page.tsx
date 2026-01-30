import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog & Kiến Thức Kinh Doanh",
    description: "Chia sẻ kiến thức kinh doanh, marketing và chuyển đổi số.",
};

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-[var(--greyscale-900)] mb-4">Blog & Kiến Thức</h1>
            <p className="text-lg text-[var(--greyscale-500)]">Chuyên mục đang được cập nhật...</p>
        </div>
    );
}
