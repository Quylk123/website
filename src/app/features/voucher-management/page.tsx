import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hệ Thống Quản Lý Voucher Điện Tử",
    description: "Phát hành và quản lý voucher, mã giảm giá, thẻ quà tặng điện tử.",
};

export default function VoucherPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-[var(--greyscale-900)] mb-4">Quản Lý Voucher Điện Tử</h1>
            <p className="text-lg text-[var(--greyscale-500)]">Trang đang được xây dựng...</p>
        </div>
    );
}
