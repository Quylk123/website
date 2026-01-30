import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tạo Mini Game Trúng Thưởng - Gamification Marketing",
    description: "Vòng quay may mắn, lật hình, minigame thu thập data khách hàng hiệu quả.",
};

export default function MiniGamePage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-[var(--greyscale-900)] mb-4">Gamification & Mini Game</h1>
            <p className="text-lg text-[var(--greyscale-500)]">Trang đang được xây dựng...</p>
        </div>
    );
}
