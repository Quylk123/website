import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hệ Thống Loyalty & Membership - CSKH Tự Động",
    description: "Tích điểm, thăng hạng thành viên, chăm sóc khách hàng tự động qua ZNS.",
};

export default function LoyaltyPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-[var(--greyscale-900)] mb-4">Hệ Thống Loyalty & Membership</h1>
            <p className="text-lg text-[var(--greyscale-500)]">Trang đang được xây dựng...</p>
        </div>
    );
}
