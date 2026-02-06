import type { Metadata } from "next";
import { ArrowRight, Ticket, Filter, Clock, BarChart, Target, ShieldCheck, PieChart, Users2 } from "lucide-react";
import Button from "@/components/Button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Quản Lý Voucher & Mã Giảm Giá - Target Đúng Người Đúng Thời Điểm",
    description: "Hệ thống tạo mã giảm giá linh hoạt: Theo phần trăm, số tiền cố định. Giới hạn số lượng dùng, áp dụng riêng cho từng hạng thành viên.",
    keywords: ["quản lý voucher", "mã giảm giá zalo", "e-voucher", "coupon marketing", "khuyến mãi theo hạng thành viên"],
    openGraph: {
        title: "Zimo Voucher - Giải Pháp Tiếp Thị 0 Đồng",
        description: "Tăng tỷ lệ chuyển đổi (CR) lên 30% với các chiến dịch khuyến mãi được cá nhân hóa.",
        url: "https://zimo.vn/features/voucher-management",
        type: "website",
    },
};

export default function VoucherPage() {
    return (
        <div className="bg-[var(--base-background)] text-[var(--greyscale-900)] font-sans">
            {/* Hero Section */}
            <section className="relative pt-20 pb-24 bg-[var(--greyscale-50)] overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-6">
                                <Ticket className="w-4 h-4" /> Hệ thống E-Voucher thông minh
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                                Bùng Nổ Doanh Số Với <br />
                                <span className="text-red-600">Chiến Dịch Khuyến Mãi</span>
                            </h1>
                            <p className="text-xl text-[var(--greyscale-500)] mb-8 leading-relaxed">
                                Tạo hàng ngàn mã giảm giá trong 1 click. Cấu hình linh hoạt:
                                <span className="font-semibold text-red-700"> Giảm % - Giảm tiền mặt - Đổi điểm nhận quà</span>.
                                Target chính xác đến từng nhóm khách hàng tiềm năng.
                            </p>
                            <div className="flex gap-4">
                                <Button variant="primary" size="large" href="http://dashboard.zimo.vn/register" target="_blank" rightIcon={<ArrowRight className="w-5 h-5" />}>
                                    Tạo Voucher Ngay
                                </Button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex justify-center">
                            {/* Illustration: Voucher Card */}
                            <div className="relative w-full max-w-md">
                                {/* Back decorator */}
                                <div className="absolute top-4 -right-4 w-full h-full bg-red-200 rounded-3xl transform rotate-6 opacity-50"></div>
                                {/* Main Coupon */}
                                <div className="relative bg-[var(--greyscale-0)] rounded-3xl shadow-2xl overflow-hidden border border-[var(--greyscale-100)]">
                                    <div className="bg-red-600 p-6 flex items-center justify-between text-white">
                                        <div>
                                            <div className="text-sm font-medium opacity-90">SUMMER SALE</div>
                                            <div className="text-3xl font-bold">GIẢM 50%</div>
                                        </div>
                                        <Ticket className="w-12 h-12 opacity-80" />
                                    </div>
                                    <div className="p-8 relative">
                                        {/* Dashed line */}
                                        <div className="absolute -left-3 top-0 bottom-0 w-6 flex flex-col justify-center space-y-2">
                                            {[...Array(6)].map((_, i) => (
                                                <div key={i} className="w-6 h-6 rounded-full bg-[var(--greyscale-50)] -ml-3"></div>
                                            ))}
                                        </div>
                                        <div className="absolute -right-3 top-0 bottom-0 w-6 flex flex-col justify-center space-y-2">
                                            {[...Array(6)].map((_, i) => (
                                                <div key={i} className="w-6 h-6 rounded-full bg-[var(--greyscale-50)] -mr-3"></div>
                                            ))}
                                        </div>

                                        <div className="space-y-4 ml-4">
                                            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                                <span className="text-gray-500">Mã code</span>
                                                <span className="font-mono font-bold text-xl text-gray-800 bg-gray-100 px-3 py-1 rounded">SUMMER2024</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-500">Hạn sử dụng</span>
                                                <span className="font-medium text-red-600">30/08/2024</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-500">Điều kiện</span>
                                                <span className="font-medium">Đơn từ 200k</span>
                                            </div>
                                            <div className="mt-6 pt-2">
                                                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
                                                    Dành riêng cho Gold Member
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="hover:shadow-lg transition-all hover:border-red-200 group">
                            <CardContent className="p-8">
                                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <PieChart className="w-7 h-7 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Đa Dạng Loại Hình</h3>
                                <p className="text-[var(--greyscale-500)] leading-relaxed">
                                    Hỗ trợ đầy đủ các loại khuyến mãi phổ biến nhất:
                                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                                        <li>Giảm theo phần trăm (%)</li>
                                        <li>Giảm số tiền cố định (VNĐ)</li>
                                        <li>Voucher đổi điểm thưởng Loyalty</li>
                                    </ul>
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-all hover:border-red-200 group">
                            <CardContent className="p-8">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Target className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Target Đối Tượng Sâu</h3>
                                <p className="text-[var(--greyscale-500)] leading-relaxed">
                                    Không spam đại trà. Chọn chính xác ai được dùng mã:
                                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                                        <li>Tất cả khách hàng</li>
                                        <li>Khách hàng cụ thể (SĐT/Zalo ID)</li>
                                        <li>Theo hạng thành viên (Gold, Diamond...)</li>
                                    </ul>
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-all hover:border-red-200 group">
                            <CardContent className="p-8">
                                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="w-7 h-7 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Kiểm Soát Ngân Sách</h3>
                                <p className="text-[var(--greyscale-500)] leading-relaxed">
                                    Chống gian lận và vượt ngân sách với các lớp bảo vệ:
                                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                                        <li>Giới hạn tổng số lượng phát hành</li>
                                        <li>Giới hạn lượt dùng/khách hàng (Ví dụ: 1 lần)</li>
                                        <li>Yêu cầu giá trị đơn hàng tối thiểu</li>
                                    </ul>
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
