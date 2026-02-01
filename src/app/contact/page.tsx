import type { Metadata } from "next";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Button from "@/components/Button";

export const metadata: Metadata = {
    title: "Liên Hệ Zimo - Đội Ngũ Hỗ Trợ 24/7",
    description: "Liên hệ với Zimo để được tư vấn giải pháp Zalo Mini App và Website bán hàng phù hợp nhất.",
};

export default function ContactPage() {
    return (
        <div className="bg-[var(--base-background)] text-[var(--greyscale-900)] font-sans">
            <section className="pt-20 pb-24 bg-[var(--greyscale-50)]">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Liên Hệ Với Chúng Tôi</h1>
                    <p className="text-xl text-[var(--greyscale-500)] max-w-2xl mx-auto">
                        Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn về giải pháp Zimo Platform.
                    </p>
                </div>
            </section>

            <section className="py-20 -mt-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 bg-[var(--greyscale-0)] rounded-3xl shadow-xl overflow-hidden">
                        {/* Contact Info */}
                        <div className="p-12 bg-[var(--greyscale-900)] text-[var(--greyscale-0)]">
                            <h3 className="text-2xl font-bold mb-8">Thông Tin Liên Hệ</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-[var(--base-primary)]" />
                                    </div>
                                    <div>
                                        <div className="text-gray-400 mb-1">Hotline tư vấn</div>
                                        <div className="text-xl font-bold">0899.111.195</div>
                                        <div className="text-sm text-gray-400">Mr. Nguyễn Minh Thắng</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-[var(--base-primary)]" />
                                    </div>
                                    <div>
                                        <div className="text-gray-400 mb-1">Email hỗ trợ</div>
                                        <div className="text-xl font-bold">contact@zimo.vn</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-[var(--base-primary)]" />
                                    </div>
                                    <div>
                                        <div className="text-gray-400 mb-1">Văn phòng</div>
                                        <div className="text-lg font-medium leading-relaxed">
                                            TP. Hồ Chí Minh, Việt Nam
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Placeholder */}
                        <div className="p-12">
                            <h3 className="text-2xl font-bold mb-6">Gửi Tin Nhắn</h3>
                            <form className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Họ tên</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--base-primary)] transition" placeholder="Nhập họ tên" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                                        <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--base-primary)] transition" placeholder="Nhập số điện thoại" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--base-primary)] transition" placeholder="Nhập email của bạn" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nội dung cần tư vấn</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--base-primary)] transition" placeholder="Bạn quan tâm đến giải pháp nào?" />
                                </div>
                                <Button variant="primary" className="w-full justify-center py-3" rightIcon={<Send className="w-4 h-4" />}>
                                    Gửi Yêu Cầu
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
