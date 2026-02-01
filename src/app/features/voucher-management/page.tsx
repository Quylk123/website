import type { Metadata } from "next";
import { ArrowRight, Ticket, Filter, Clock, BarChart } from "lucide-react";
import Button from "@/components/Button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Quản Lý Voucher Điện Tử & Mã Giảm Giá",
    description: "Hệ thống phát hành và quản lý voucher điện tử chuyên nghiệp. Target đúng đối tượng khách hàng, chống gian lận voucher.",
    keywords: ["quản lý voucher", "mã giảm giá", "e-voucher", "coupon marketing", "khuyến mãi zalo"],
    openGraph: {
        title: "Zimo Voucher - Tiếp Thị Thông Minh",
        description: "Tăng doanh số bán hàng với các chiến dịch Voucher điện tử linh hoạt.",
        url: "https://zimo.vn/features/voucher-management",
        type: "website",
    },
};

export default function VoucherPage() {
    return (
        <div className="bg-[var(--base-background)] text-[var(--greyscale-900)] font-sans">
            <section className="relative pt-20 pb-24 bg-[var(--greyscale-50)]">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-6">
                        <Ticket className="w-4 h-4" /> E-Voucher System
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Thúc Đẩy Doanh Số Với <span className="text-red-600">Voucher Điện Tử</span>
                    </h1>
                    <p className="text-xl text-[var(--greyscale-500)] mb-10 leading-relaxed">
                        Tạo và phân phối mã giảm giá đến đúng người, đúng thời điểm. Quản lý chặt chẽ ngân sách khuyến mãi và hiệu quả chiến dịch.
                    </p>
                    <Button variant="primary" size="large" href="http://dashboard.zimo.vn/register" target="_blank" rightIcon={<ArrowRight className="w-5 h-5" />}>
                        Tạo Chiến Dịch Ngay
                    </Button>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="hover:shadow-lg transition-all border-l-4 border-l-red-500">
                            <CardContent className="p-8">
                                <Filter className="w-10 h-10 text-red-500 mb-6" />
                                <h3 className="text-xl font-bold mb-3">Target Đúng Đối Tượng</h3>
                                <p className="text-[var(--greyscale-500)] leading-relaxed">
                                    Chỉ phát voucher cho nhóm khách hàng cụ thể: Khách hàng mới, Khách hàng VIP, hoặc Khách hàng có sinh nhật trong tháng.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-all border-l-4 border-l-red-500">
                            <CardContent className="p-8">
                                <Clock className="w-10 h-10 text-red-500 mb-6" />
                                <h3 className="text-xl font-bold mb-3">Giới Hạn Thông Minh</h3>
                                <p className="text-[var(--greyscale-500)] leading-relaxed">
                                    Cấu hình chi tiết: Thời gian áp dụng, Số lượng phát hành, Số lượt dùng tối đa trên mỗi khách hàng, Giá trị đơn hàng tối thiểu.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-all border-l-4 border-l-red-500">
                            <CardContent className="p-8">
                                <BarChart className="w-10 h-10 text-red-500 mb-6" />
                                <h3 className="text-xl font-bold mb-3">Đo Lường Hiệu Quả</h3>
                                <p className="text-[var(--greyscale-500)] leading-relaxed">
                                    Theo dõi real-time số lượng voucher đã phát, đã dùng và doanh thu mang lại từ voucher. Biết ngay chiến dịch nào hiệu quả.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
