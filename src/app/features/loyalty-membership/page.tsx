import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Crown, Gift, Users, Zap } from "lucide-react";
import Button from "@/components/Button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Hệ Thống Loyalty & Membership - CSKH Tự Động Qua Zalo",
    description: "Xây dựng chương trình thành viên, tích điểm đổi quà, phân hạng khách hàng tự động. Tích hợp sâu với Zalo OA và ZNS.",
    keywords: ["loyalty system", "tích điểm đổi quà", "thẻ thành viên điện tử", "chăm sóc khách hàng zalo", "membership app"],
    openGraph: {
        title: "Zimo Loyalty - Giữ Chân Khách Hàng Bằng Công Nghệ",
        description: "Biến khách hàng vãng lai thành khách hàng trung thành với hệ thống Membership tích hợp Zalo.",
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
                                <Crown className="w-4 h-4" /> Hệ thống khách hàng thân thiết
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                                Xây Dựng Cộng Đồng <span className="text-purple-600">Khách Hàng Trung Thành</span>
                            </h1>
                            <p className="text-xl text-[var(--greyscale-500)] mb-8 leading-relaxed">
                                Hệ thống Loyalty 4.0 giúp doanh nghiệp SME tích điểm, phân hạng thành viên và chăm sóc khách hàng tự động trên nền tảng Zalo.
                            </p>
                            <div className="flex gap-4">
                                <Button variant="primary" size="large" href="http://dashboard.zimo.vn/register" target="_blank" rightIcon={<ArrowRight className="w-5 h-5" />}>
                                    Tạo thẻ thành viên ngay
                                </Button>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            {/* Illustration Placeholder */}
                            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 shadow-2xl text-white transform rotate-3">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <div className="text-purple-200 text-sm">Thẻ thành viên</div>
                                        <div className="text-2xl font-bold">Diamond Member</div>
                                    </div>
                                    <Crown className="w-12 h-12 text-yellow-400" />
                                </div>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-end">
                                        <div className="text-4xl font-mono">8,650</div>
                                        <div className="text-purple-200">Điểm tích lũy</div>
                                    </div>
                                    <div className="w-full h-2 bg-purple-400/30 rounded-full overflow-hidden">
                                        <div className="w-3/4 h-full bg-yellow-400 rounded-full"></div>
                                    </div>
                                    <div className="text-sm text-purple-200">Còn 1,350 điểm để thăng hạng Platinum</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/20"></div>
                                    <div>
                                        <div className="font-semibold">Nguyễn Văn A</div>
                                        <div className="text-sm opacity-70">0987 *** ***</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Tại Sao Cần Có Loyalty System?</h2>
                        <p className="text-xl text-[var(--greyscale-500)] max-w-3xl mx-auto">
                            Chi phí tìm kiếm khách hàng mới cao gấp 5-7 lần chi phí giữ chân khách hàng cũ.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="hover:border-purple-200 hover:shadow-lg transition-all">
                            <CardContent className="p-8">
                                <Users className="w-12 h-12 text-purple-600 mb-6" />
                                <h3 className="text-xl font-bold mb-3">Phân Hạng Tự Động</h3>
                                <p className="text-gray-500">
                                    Cấu hình các hạng bậc (Đồng, Bạc, Vàng, Kim Cương) dựa trên chi tiêu hoặc điểm số. Hệ thống tự động xét hạng và gửi thông báo chúc mừng.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="hover:border-purple-200 hover:shadow-lg transition-all">
                            <CardContent className="p-8">
                                <Gift className="w-12 h-12 text-purple-600 mb-6" />
                                <h3 className="text-xl font-bold mb-3">Tích Điểm Đổi Quà</h3>
                                <p className="text-gray-500">
                                    Khách hàng tích điểm sau mỗi lần mua hàng hoặc đặt dịch vụ. Sử dụng điểm để đổi Voucher, quà tặng hoặc trừ trực tiếp vào đơn hàng.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="hover:border-purple-200 hover:shadow-lg transition-all">
                            <CardContent className="p-8">
                                <Zap className="w-12 h-12 text-purple-600 mb-6" />
                                <h3 className="text-xl font-bold mb-3">Remarketing 0 Đồng</h3>
                                <p className="text-gray-500">
                                    Gửi tin nhắn ZNS chăm sóc khách hàng tự động theo kịch bản: Chúc mừng sinh nhật, Nhắc lịch hẹn, Thông báo ưu đãi riêng cho VIP.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
