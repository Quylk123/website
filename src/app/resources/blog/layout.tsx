import type { Metadata } from "next";

// Blog layout with metadata
export const metadata: Metadata = {
    title: "Blog & Kiến Thức Kinh Doanh - Zimo",
    description: "Chia sẻ kiến thức kinh doanh, marketing và chuyển đổi số cho doanh nghiệp SME.",
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
