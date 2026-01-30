import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShoppingBag, Smartphone, Database, BarChart3, Globe } from "lucide-react";
import Button from "@/components/Button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Zimo Ecommerce - Tạo Web Bán Hàng & Zalo Mini App Đồng Bộ",
    description: "Giải pháp tạo website bán hàng và Zalo Mini App đồng bộ sản phẩm, đơn hàng, tồn kho. Tăng trưởng doanh thu bán lẻ với chi phí tối ưu.",
    keywords: ["tạo web bán hàng", "zalo mini app bán hàng", "thiết kế web thương mại điện tử", "phần mềm quản lý bán hàng đa kênh", "website bán hàng chuẩn seo"],
    openGraph: {
        title: "Zimo Ecommerce - Bán Hàng Đa Kênh Website & Zalo",
        description: "Sở hữu ngay Website và Mini App bán hàng chuyên nghiệp chỉ trong 5 phút.",
        url: "https://zimo.vn/products/zimo-ecommerce",
        type: "website",
    },
};

export default function ZimoEcommercePage() {
    return (
        <div className="bg-[var(--base-background)] text-[var(--greyscale-900)] font-sans">
            {/* Hero Section */}
            <section className="relative pt-20 pb-24 overflow-hidden bg-[var(--greyscale-50)]">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--primary-50)] opacity-50 skew-x-12 transform origin-top-right"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-100)] text-[var(--base-primary)] text-sm font-semibold mb-6">
                                <ShoppingBag className="w-4 h-4" /> Giải pháp bán lẻ toàn diện
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                                Tạo <span className="text-[var(--base-primary)]">Website Bán Hàng</span> & <span className="text-[#0068FF]">Zalo Mini App</span> Chỉ Trong 5 Phút
                            </h1>
                            <p className="text-xl text-[var(--greyscale-500)] mb-8 leading-relaxed">
                                Đồng bộ sản phẩm, đơn hàng và kho hàng trên mọi nền tảng. Chốt đơn tự động, chăm sóc khách hàng qua ZNS và tăng tỷ lệ quay lại mua hàng.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="large" href="http://dashboard.zimo.vn/register" target="_blank" rightIcon={<ArrowRight className="w-5 h-5" />}>
                                    Dùng thử miễn phí ngay
                                </Button>
                                <Button variant="outline" size="large" href="#features">
                                    Xem tính năng chi tiết
                                </Button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition duration-500">
                                <Image
                                    src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Zimo Ecommerce Dashboard"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />

                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce-slow">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <Smartphone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Đơn hàng mới</div>
                                        <div className="font-bold text-lg">+128 Đơn/ngày</div>
                                    </div>
                                </div>
                            </div>
                            {/* Decor blob */}
                            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-200 to-green-200 rounded-full blur-3xl opacity-30"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits / Stats */}
            <section className="py-12 border-b border-[var(--greyscale-100)]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <h3 className="text-4xl font-bold text-[var(--base-primary)] mb-2">5 Phút</h3>
                            <p className="text-[var(--greyscale-500)]">Thiết lập hệ thống</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-[var(--base-primary)] mb-2">x3</h3>
                            <p className="text-[var(--greyscale-500)]">Tỷ lệ khách quay lại</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-[var(--base-primary)] mb-2">-40%</h3>
                            <p className="text-[var(--greyscale-500)]">Chi phí Marketing</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-[var(--base-primary)] mb-2">24/7</h3>
                            <p className="text-[var(--greyscale-500)]">Bán hàng tự động</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Features */}
            <section id="features" className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Tính Năng Vượt Trội Cho Bán Lẻ</h2>
                        <p className="text-xl text-[var(--greyscale-500)] max-w-3xl mx-auto">
                            Hệ thống Zimo Ecommerce cung cấp đầy đủ công cụ để bạn vận hành doanh nghiệp online một cách chuyên nghiệp nhất.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <Card className="border-[var(--greyscale-100)] hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                                    <Globe className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Website Chuẩn SEO</h3>
                                <p className="text-[var(--greyscale-500)] leading-relaxed mb-4">
                                    Tự động tối ưu SEO on-page, tốc độ tải trang cực nhanh. Giao diện mobile-first thân thiện, giúp khách hàng mua sắm dễ dàng trên mọi thiết bị.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-sm text-[var(--greyscale-600)]"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Tên miền riêng miễn phí</li>
                                    <li className="flex items-center text-sm text-[var(--greyscale-600)]"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> SSL bảo mật an toàn</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Feature 2 */}
                        <Card className="border-[var(--greyscale-100)] hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                                    <Smartphone className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Zalo Mini App Đồng Bộ</h3>
                                <p className="text-[var(--greyscale-500)] leading-relaxed mb-4">
                                    Tiếp cận 75 triệu người dùng Zalo mà không cần tải App. Khách hàng mở Zalo là thấy cửa hàng của bạn. Tự động gửi tin nhắn trạng thái đơn hàng qua ZNS.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-sm text-[var(--greyscale-600)]"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Login 1 chạm qua Zalo</li>
                                    <li className="flex items-center text-sm text-[var(--greyscale-600)]"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Xin quyền số điện thoại</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Feature 3 */}
                        <Card className="border-[var(--greyscale-100)] hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                                    <Database className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Quản Lý Tập Trung</h3>
                                <p className="text-[var(--greyscale-500)] leading-relaxed mb-4">
                                    Quản lý sản phẩm, tồn kho, đơn hàng từ Website và Mini App trên một màn hình duy nhất. Không còn nỗi lo lệch tồn kho hay sót đơn hàng.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-sm text-[var(--greyscale-600)]"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Báo cáo doanh thu Real-time</li>
                                    <li className="flex items-center text-sm text-[var(--greyscale-600)]"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Quản lý thuộc tính sản phẩm</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[var(--greyscale-900)] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Bắt Đầu Kinh Doanh Online Ngay Hôm Nay</h2>
                    <p className="text-xl text-[var(--greyscale-400)] mb-10 max-w-2xl mx-auto">
                        Không cần biết code, không cần đội ngũ kỹ thuật. Zimo lo hết phần công nghệ để bạn tập trung bán hàng.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Button variant="primary" size="large" href="http://dashboard.zimo.vn/register" target="_blank" className="text-lg px-8">
                            Tạo Website Miễn Phí
                        </Button>
                        <Button variant="outline" size="large" href="https://zalo.me/0899111195" target="_blank" className="text-lg px-8 border-white text-white hover:bg-white hover:text-[var(--greyscale-900)]">
                            Tư Vấn: 0899.111.195
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
