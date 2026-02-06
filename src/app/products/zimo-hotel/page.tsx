import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Bed, CalendarCheck, CreditCard, Hotel, UserCheck } from "lucide-react";
import Button from "@/components/Button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Zimo Hotel - Phần Mềm Quản Lý Khách Sạn & Booking Miễn Phí",
    description: "Zimo Hotel là nền tảng quản lý khách sạn toàn diện: Booking, Housekeeping, Minibar & Báo cáo. Tích hợp Zalo Mini App, trải nghiệm di động hoàn hảo. Dùng thử miễn phí!",
    keywords: ["phần mềm quản lý khách sạn", "hotel management system", "hotel booking software", "phần mềm đặt phòng khách sạn", "hotel booking engine", "giải pháp quản lý khách sạn", "quản lý khách sạn miễn phí", "phần mềm khách sạn mini", "homestay booking system", "quản lý nhà nghỉ bằng app", "phần mềm quản lý khách sạn trên zalo", "booking app khách sạn miễn phí"],
    openGraph: {
        title: "Zimo Hotel - Booking Engine & PMS 4.0 cho Khách Sạn & Homestay",
        description: "Tăng 40% doanh thu đặt phòng trực tiếp, giảm phụ thuộc OTA. Booking Engine 0% phí tích hợp Zalo Mini App - Trải nghiệm di động hoàn hảo.",
        url: "https://zimo.vn/products/zimo-hotel",
        siteName: "Zimo.vn",
        locale: "vi_VN",
        type: "website",
        images: [
            {
                url: "https://zimo.vn/og-zimo-hotel.jpg",
                width: 1200,
                height: 630,
                alt: "Zimo Hotel - Quản lý khách sạn toàn diện",
            },
        ],
    },
};

export default function ZimoHotelPage() {
    return (
        <div className="bg-[var(--base-background)] text-[var(--greyscale-900)] font-sans">
            {/* Hero Section */}
            <section className="relative pt-20 pb-24 overflow-hidden bg-[var(--greyscale-50)]">
                {/* Background Decoration */}
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-50 opacity-60 skew-y-12 transform origin-bottom-left"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                                <Hotel className="w-4 h-4" /> Dành cho Khách sạn & Homestay
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                                Tự Động Hóa <span className="text-blue-600">Vận Hành Khách Sạn</span> & Booking Online
                            </h1>
                            <p className="text-xl text-[var(--greyscale-500)] mb-8 leading-relaxed">
                                Hệ thống PMS quản lý phòng, lễ tân tích hợp Booking Engine trực tiếp trên Zalo. Giúp khách sạn tăng đặt phòng trực tiếp, giảm phụ thuộc vào OTA.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="large" href="http://dashboard.zimo.vn/register" target="_blank" rightIcon={<ArrowRight className="w-5 h-5" />}>
                                    Dùng thử PMS miễn phí
                                </Button>
                                <Button variant="outline" size="large" href="#features">
                                    Khám phá tính năng
                                </Button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--greyscale-0)]">
                                <Image
                                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Zimo Hotel Booking Engine"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <div className="text-white">
                                        <div className="font-bold text-xl mb-2">Booking trực tiếp trên Zalo</div>
                                        <div className="text-gray-200 text-sm">Khách hàng đặt phòng chỉ trong 30s, không cần tải app</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Features */}
            <section id="features" className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Giải Pháp All-In-One Cho Lưu Trú</h2>
                        <p className="text-xl text-[var(--greyscale-500)] max-w-3xl mx-auto">
                            Thay thế sổ sách và excel bằng phần mềm quản lý chuyên nghiệp, dễ sử dụng cho cả nhân viên lễ tân và chủ khách sạn.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <Card className="border-[var(--greyscale-100)] hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                                    <Bed className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Sơ Đồ Giường Phòng (PMS)</h3>
                                <p className="text-[var(--greyscale-500)] leading-relaxed mb-4">
                                    Quản lý trạng thái phòng (Sạch/Bẩn/Đang ở) trực quan. Kéo thả để gán phòng, check-in, check-out nhanh chóng. Quản lý buồng phòng hiệu quả.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-sm text-[var(--greyscale-600)]"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Tránh trùng lịch (Overbooking)</li>
                                    <li className="flex items-center text-sm text-[var(--greyscale-600)]"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Quản lý dịch vụ thêm (Minibar)</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Feature 2 */}
                        <Card className="border-[var(--greyscale-100)] hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6">
                                    <CalendarCheck className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Booking Engine 0% Phí</h3>
                                <p className="text-[var(--greyscale-500)] leading-relaxed mb-4">
                                    Tích hợp công cụ đặt phòng ngay trên Zalo Mini App và Website của bạn. Khách hàng xem ảnh phòng, giá cả và đặt cọc online ngay lập tức.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-sm text-[var(--greyscale-600)]"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Tiết kiệm 15-20% phí OTA</li>
                                    <li className="flex items-center text-sm text-[var(--greyscale-600)]"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Thanh toán online an toàn</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Feature 3 */}
                        <Card className="border-[var(--greyscale-100)] hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6">
                                    <UserCheck className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">CSKH & Loyalty</h3>
                                <p className="text-[var(--greyscale-500)] leading-relaxed mb-4">
                                    Tự động lưu thông tin khách hàng. Gửi tin nhắn ZNS cảm ơn sau khi check-out, chúc mừng sinh nhật, gửi voucher khuyến mãi để khách quay lại.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-sm text-[var(--greyscale-600)]"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Tích điểm thành viên</li>
                                    <li className="flex items-center text-sm text-[var(--greyscale-600)]"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Phân hạng khách hàng VIP</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Tối Ưu Doanh Thu Khách Sạn Của Bạn</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Bắt đầu xây dựng kênh đặt phòng trực tiếp bền vững với Zimo Hotel ngay hôm nay.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Button variant="primary" size="large" href="http://dashboard.zimo.vn/register" target="_blank" className="text-lg px-8 bg-white text-blue-900 hover:bg-blue-50">
                            Đăng Ký Dùng Thử
                        </Button>
                        <Button variant="outline" size="large" href="https://zalo.me/0899111195" target="_blank" className="text-lg px-8 border-white text-white hover:bg-blue-800">
                            Liên Hệ Tư Vấn
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
