import type { Metadata } from "next";
import { ArrowRight, Dices, Gamepad2, Gift, Sparkles } from "lucide-react";
import Button from "@/components/Button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Tạo Mini Game Trúng Thưởng - Gamification Marketing",
    description: "Giải pháp Gamification giúp thu thập data khách hàng (Leads) hiệu quả gấp 3 lần thông qua Vòng quay may mắn, Lật hình trúng thưởng.",
    keywords: ["tạo mini game", "vòng quay may mắn", "gamification marketing", "thu thập leads", "game trúng thưởng zalo"],
    openGraph: {
        title: "Gamification Marketing - Bùng Nổ Doanh Số",
        description: "Tạo chiến dịch Mini Game trúng thưởng thu hút hàng ngàn khách hàng tham gia.",
        url: "https://zimo.vn/features/mini-game",
        type: "website",
    },
};

export default function MiniGamePage() {
    return (
        <div className="bg-[var(--base-background)] text-[var(--greyscale-900)] font-sans">
            <section className="relative pt-20 pb-24 bg-[var(--greyscale-50)]">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
                        <Gamepad2 className="w-4 h-4" /> Gamification Marketing
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Biến Khách Hàng Thành <span className="text-orange-600">Fan Cuồng</span> Với Mini Game
                    </h1>
                    <p className="text-xl text-[var(--greyscale-500)] mb-10 leading-relaxed">
                        Tạo các chiến dịch Vòng Quay May Mắn, Lật Hình, Bốc Thăm ngay trên Zalo Mini App. Thu thập thông tin khách hàng tiềm năng vui vẻ và hiệu quả.
                    </p>
                    <Button variant="primary" size="large" href="http://dashboard.zimo.vn/register" target="_blank" rightIcon={<ArrowRight className="w-5 h-5" />}>
                        Tạo Game Ngay
                    </Button>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <div className="order-2 md:order-1">
                            <h3 className="text-3xl font-bold mb-4">Vòng Quay May Mắn (Lucky Wheel)</h3>
                            <p className="text-lg text-[var(--greyscale-500)] mb-6">
                                Trò chơi kinh điển luôn thu hút sự tham gia. Cấu hình tỷ lệ trúng thưởng linh hoạt, quà tặng là Voucher hoặc hiện vật. Sử dụng để tặng quà tri ân hoặc kích thích mua hàng.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3"><Sparkles className="text-orange-500 w-5 h-5" /> Tùy chỉnh giao diện thương hiệu</li>
                                <li className="flex items-center gap-3"><Sparkles className="text-orange-500 w-5 h-5" /> Kiểm soát ngân sách quà tặng</li>
                                <li className="flex items-center gap-3"><Sparkles className="text-orange-500 w-5 h-5" /> Yêu cầu nhập thông tin để quay</li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 bg-orange-50 p-8 rounded-3xl flex items-center justify-center">
                            <Dices className="w-48 h-48 text-orange-300 animate-spin-slow" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center bg-[var(--greyscale-900)] text-[var(--greyscale-0)] p-12 rounded-3xl">
                        <div>
                            <div className="text-4xl font-bold text-orange-400 mb-2">x3</div>
                            <p className="text-[var(--greyscale-400)]">Tỷ lệ để lại SĐT</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-400 mb-2">30s</div>
                            <p className="text-[var(--greyscale-400)]">Thời gian triển khai</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
                            <p className="text-[var(--greyscale-400)]">Tự động trao giải</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
