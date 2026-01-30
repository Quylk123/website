import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Zimo Hotel - Phần Mềm Quản Lý Khách Sạn & Booking Engine",
    description: "Hệ thống quản lý khách sạn, booking engine tích hợp Zalo Mini App.",
};

export default function ZimoHotelPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-[var(--greyscale-900)] mb-4">Zimo Hotel</h1>
            <p className="text-lg text-[var(--greyscale-500)]">Trang đang được xây dựng...</p>
        </div>
    );
}
