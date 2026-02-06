import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Crown, Gift, Users, Zap, Settings, BarChart3, Smartphone } from "lucide-react";
import Button from "@/components/Button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Hệ Thống Loyalty & Membership - 6 Hạng Thành Viên Chuẩn Hóa",
    description: "Giải pháp Loyalty 6 cấp độ (Bronze - Diamond). Tự động xét hạng, tích điểm, tặng quà sinh nhật và gửi ZNS chăm sóc qua Zalo.",
    keywords: ["loyalty system", "6 hạng thành viên", "tích điểm đổi quà", "chăm sóc khách hàng zalo", "membership app"],
    openGraph: {
        title: "Zimo Loyalty - Hệ Thống Thành Viên Chuẩn Hóa 6 Cấp Độ",
        description: "Tự động hóa quy trình chăm sóc khách hàng với mô hình Loyalty đa tầng tích hợp Zalo.",
        url: "https://zimo.vn/features/loyalty-membership",
        type: "website",
    },
};

export default function LoyaltyPage() {
    return (
        <div className="bg-[var(--base-background)] text-[var(--greyscale-900)] font-sans">
            {/* Hero Section */}
            <section className="relative pt-20 pb-24 overflow-hidden bg-[var(--greyscale-50)]">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
                                <Crown className="w-4 h-4" /> Giải pháp Loyalty 4.0
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                                Hệ Thống Membership <br />
                                <span className="text-purple-600">6 Cấp Độ Chuẩn Hóa</span>
                            </h1>
                            <p className="text-xl text-[var(--greyscale-500)] mb-8 leading-relaxed">
                                Không cần xây dựng từ đầu. Áp dụng ngay mô hình 6 hạng thành viên chuẩn mực:
                                <span className="font-semibold text-purple-700"> Bronze → Silver → Gold → Platinum → Diamond</span>.
                                Tự động xét hạng theo chi tiêu và tích điểm.
                            </p>
                            <div className="flex gap-4">
                                <Button variant="primary" size="large" href="http://dashboard.zimo.vn/register" target="_blank" rightIcon={<ArrowRight className="w-5 h-5" />}>
                                    Triển khai ngay
                                </Button>
                                <Button variant="outline" size="large" href="tel:0899111195" leftIcon={<Smartphone className="w-5 h-5" />}>
                                    Tư vấn: 0899.111.195
                                </Button>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            {/* Illustration: Tier Cards Stack */}
                            <div className="relative h-[400px] w-full flex items-center justify-center">
                                {/* Card 3 (Back) */}
                                <div className="absolute top-0 right-10 bg-gradient-to-br from-amber-200 to-amber-500 rounded-2xl w-72 h-44 transform rotate-12 opacity-80 shadow-xl border border-white/20"></div>
                                {/* Card 2 (Middle) */}
                                <div className="absolute top-10 right-20 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl w-72 h-44 transform rotate-6 shadow-2xl border border-white/20">
                                    <div className="p-6 text-white h-full flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="text-xs uppercase tracking-wider opacity-80">Membership</div>
                                                <div className="text-lg font-bold">SILVER TIER</div>
                                            </div>
                                            <Crown className="text-white/50 w-8 h-8" />
                                        </div>
                                        <div className="text-right text-sm">... 2024</div>
                                    </div>
                                </div>
                                {/* Card 1 (Front) */}
                                <div className="absolute top-20 right-30 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-2xl w-80 h-48 transform -rotate-3 shadow-2xl border border-white/10 z-10">
                                    <div className="p-6 text-white h-full flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                                        <Crown className="w-4 h-4 text-yellow-400" />
                                                    </div>
                                                    <span className="text-sm font-medium tracking-wider text-purple-200">ZIMO LOYALTY</span>
                                                </div>
                                                <div className="mt-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
                                                    DIAMOND MEMBER
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between items-end mb-2">
                                                <div className="text-sm text-purple-200">Nguyễn Văn A</div>
                                                <div className="text-xl font-mono tracking-widest">8,650 PTS</div>
                                            </div>
                                            <div className="w-full h-1.5 bg-black/20 rounded-full overflow-hidden">
                                                <div className="w-[80%] h-full bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Config Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Tính Năng Mạnh Mẽ & Linh Hoạt</h2>
                        <p className="text-xl text-[var(--greyscale-500)] max-w-3xl mx-auto">
                            Hệ thống cung cấp đầy đủ công cụ để bạn thiết kế chương trình CSKH chuyên nghiệp.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="hover:border-purple-200 hover:shadow-lg transition-all group">
                            <CardContent className="p-8">
                                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Settings className="w-7 h-7 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Cấu Hình Hạng Thẻ</h3>
                                <p className="text-[var(--greyscale-500)] leading-relaxed">
                                    Tùy chỉnh hạn mức thăng hạng dựa trên <strong>Tổng chi tiêu</strong> (Spending) hoặc <strong>Điểm tích lũy</strong> (Accumulated Points). Hệ thống tự động xét hạng realtime.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="hover:border-purple-200 hover:shadow-lg transition-all group">
                            <CardContent className="p-8">
                                <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Gift className="w-7 h-7 text-pink-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Quyền Lợi Đa Tầng</h3>
                                <p className="text-[var(--greyscale-500)] leading-relaxed">
                                    Thiết lập quyền lợi riêng cho từng hạng:
                                    <ul className="mt-2 space-y-1 text-sm">
                                        <li>• Chiết khấu % hóa đơn trực tiếp</li>
                                        <li>• Hệ số nhân điểm thưởng (x1.5, x2)</li>
                                        <li>• Miễn phí vận chuyển (Freeship)</li>
                                        <li>• Quà tặng sinh nhật tự động</li>
                                    </ul>
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="hover:border-purple-200 hover:shadow-lg transition-all group">
                            <CardContent className="p-8">
                                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <BarChart3 className="w-7 h-7 text-indigo-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Báo Cáo & Insight</h3>
                                <p className="text-[var(--greyscale-500)] leading-relaxed">
                                    Theo dõi biến động thành viên, tỷ lệ giữ chân (Retention Rate) và hành vi chi tiêu của từng nhóm khách hàng (New vs VIP).
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
