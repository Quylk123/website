"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, Share2, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogPostPage() {
    const publishDate = "03/02/2026";
    const readTime = "5 phút";
    const category = "Chuyển đổi số";

    return (
        <div className="flex flex-col bg-[var(--base-background)] text-[var(--greyscale-900)] font-sans min-h-screen">
            {/* Navigation */}
            <nav className="border-b border-[var(--greyscale-200)] bg-white">
                <div className="container mx-auto px-4 py-4">
                    <Link
                        href="/resources/blog"
                        className="inline-flex items-center gap-2 text-[var(--greyscale-600)] hover:text-[var(--base-primary)] transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Quay lại Blog
                    </Link>
                </div>
            </nav>

            {/* Article Header */}
            <article className="container mx-auto px-4 py-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Category Badge */}
                    <div className="mb-6">
                        <span className="bg-[var(--primary-100)] text-[var(--base-primary)] px-4 py-2 rounded-full text-sm font-semibold">
                            {category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Zalo Mini App là gì? Tại sao doanh nghiệp SME cần ngay?
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 text-[var(--greyscale-500)] mb-8 pb-8 border-b border-[var(--greyscale-200)]">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{publishDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{readTime} đọc</span>
                        </div>
                    </div>
                </motion.div>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--primary-100)] to-[var(--primary-50)]">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🚀</div>
                                <div className="text-2xl font-bold text-[var(--base-primary)]">Zalo Mini App</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Article Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="prose prose-lg max-w-none"
                >
                    {/* Introduction */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">
                            Zalo Mini App là gì?
                        </h2>
                        <p className="text-lg text-[var(--greyscale-600)] leading-relaxed mb-4">
                            <strong className="text-[var(--greyscale-900)]">Zalo Mini App</strong> là ứng dụng nhỏ được tích hợp ngay trong nền tảng Zalo — mạng xã hội có hơn 76 triệu người dùng Việt Nam. Khác với ứng dụng truyền thống phải tải về cài đặt, Mini App chạy trực tiếp trên Zalo, siêu nhẹ và không cần cài đặt.
                        </p>
                        <p className="text-lg text-[var(--greyscale-600)] leading-relaxed">
                            Với chỉ <strong className="text-[var(--greyscale-900)]">1 lần click</strong>, khách hàng có thể truy cập vào dịch vụ của bạn: đặt phòng, mua hàng, tích điểm, hẹn lịch... tất cả ngay trong Zalo mà họ dùng hàng ngày.
                        </p>
                    </section>

                    {/* Why SME Need It */}
                    <section className="mb-12 bg-[var(--greyscale-50)] p-8 rounded-2xl">
                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">
                            Tại sao doanh nghiệp SME cần Zalo Mini App ngay?
                        </h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-[var(--greyscale-900)] flex items-center gap-3">
                                    <span className="text-2xl">💰</span>
                                    Chi phí chỉ bằng 10% làm App truyền thống
                                </h3>
                                <p className="text-[var(--greyscale-600)] leading-relaxed">
                                    Làm 1 app riêng: 100-500 triệu, mất 3-6 tháng. Làm Zalo Mini App: chỉ 10-50 triệu, triển khai trong 3-7 ngày. Với doanh nghiệp SME, đây là con số không thể bỏ qua.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3 text-[var(--greyscale-900)] flex items-center gap-3">
                                    <span className="text-2xl">👥</span>
                                    Tiếp cận 76 triệu người dùng Zalo
                                </h3>
                                <p className="text-[var(--greyscale-600)] leading-relaxed">
                                    Khách hàng của bạn đang ở đâu? 76 triệu người Việt đang dùng Zalo mỗi ngày. Mini App giúp bạn "nằm" ngay nơi khách hàng có mặt, không cần họ tải app mới.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3 text-[var(--greyscale-900)] flex items-center gap-3">
                                    <span className="text-2xl">⚡</span>
                                    Trải nghiệm siêu nhanh, mượt mà
                                </h3>
                                <p className="text-[var(--greyscale-600)] leading-relaxed">
                                    Mini App chỉ tải 1 lần đầu, sau đó mở trong <strong className="text-[var(--greyscale-900)]">1-2 giây</strong>. Không cài, không update, không tốn bộ nhớ — khách hàng cực kỳ thích.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3 text-[var(--greyscale-900)] flex items-center gap-3">
                                    <span className="text-2xl">📱</span>
                                    Tích hợp sâu với ZNS & OA
                                </h3>
                                <p className="text-[var(--greyscale-600)] leading-relaxed">
                                    Gửi tin nhắn CSKH tự động với ZNS (Zalo Notification Service). Tỷ lệ đọc tin <strong className="text-[var(--greyscale-900)]">trên 90%</strong> — cao hơn SMS và Email nhiều lần.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3 text-[var(--greyscale-900)] flex items-center gap-3">
                                    <span className="text-2xl">📊</span>
                                    Dữ liệu khách hàng 360 độ
                                </h3>
                                <p className="text-[var(--greyscale-600)] leading-relaxed">
                                    Theo dõi hành vi khách hàng: ai đặt gì, khi nào, bao nhiêu lần... Tất cả lưu trữ an toàn để bạn chăm sóc tốt hơn.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Success Metrics */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 text-[var(--greyscale-900)]">
                            Kết quả thực tế: Tăng trưởng 200% trong 3 tháng
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-gradient-to-br from-[var(--primary-100)] to-white p-6 rounded-xl text-center">
                                <div className="text-4xl font-bold text-[var(--base-primary)] mb-2">200%</div>
                                <div className="text-[var(--greyscale-600)]">Tăng doanh thu</div>
                            </div>
                            <div className="bg-gradient-to-br from-[var(--primary-100)] to-white p-6 rounded-xl text-center">
                                <div className="text-4xl font-bold text-[var(--base-primary)] mb-2">3-7 ngày</div>
                                <div className="text-[var(--greyscale-600)]">Thời gian triển khai</div>
                            </div>
                            <div className="bg-gradient-to-br from-[var(--primary-100)] to-white p-6 rounded-xl text-center">
                                <div className="text-4xl font-bold text-[var(--base-primary)] mb-2">90%+</div>
                                <div className="text-[var(--greyscale-600)]">Tỷ lệ đọc tin ZNS</div>
                            </div>
                        </div>

                        <div className="bg-[var(--base-primary)] p-6 rounded-xl text-white">
                            <p className="text-lg leading-relaxed mb-4">
                                <strong>🎯 Case Study:</strong> Khách sạn X (30 phòng) triển khai Zimo Hotel Mini App:
                            </p>
                            <ul className="space-y-2 ml-6">
                                <li>✅ Tỷ lệ đặt phòng qua Zalo: từ 10% → 60%</li>
                                <li>✅ Giảm 70% cuộc gọi điện thoại đặt phòng</li>
                                <li>✅ Tăng 40% khách hàng quay lại nhờ hệ thống tích điểm</li>
                                <li>✅ Tiết kiệm 5 tiếng/ngày cho lễ tân</li>
                            </ul>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="mb-12">
                        <div className="bg-gradient-to-r from-[var(--primary-100)] to-[var(--primary-50)] p-8 md:p-12 rounded-2xl text-center">
                            <h2 className="text-3xl font-bold mb-4 text-[var(--greyscale-900)]">
                                Sẵn sàng đưa doanh nghiệp của bạn lên Zalo?
                            </h2>
                            <p className="text-lg text-[var(--greyscale-600)] mb-8">
                                Liên hệ ngay để nhận tư vấn miễn phí và báo giá ưu đãi.
                            </p>
                            <a
                                href="https://zalo.me/0899111195"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[var(--base-primary)] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all text-lg"
                            >
                                Nhận tư vấn miễn phí
                                <ArrowLeft className="h-5 w-5 rotate-180" />
                            </a>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="mb-8">
                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">
                            Kết luận
                        </h2>
                        <p className="text-lg text-[var(--greyscale-600)] leading-relaxed mb-4">
                            Zalo Mini App không còn là lựa chọn — nó là <strong className="text-[var(--greyscale-900)]">xu hướng tất yếu</strong> cho doanh nghiệp SME muốn phát triển trong kỷ nguyên số. Chi phí thấp, triển khai nhanh, hiệu quả cao.
                        </p>
                        <p className="text-lg text-[var(--greyscale-600)] leading-relaxed">
                            Đừng để đối thủ vượt qua. Bắt đầu ngay hôm nay với Zimo — đối tác chiến lược trong phát triển Zalo Mini App cho SME.
                        </p>
                    </section>
                </motion.div>

                {/* Share & Actions */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="pt-8 border-t border-[var(--greyscale-200)]"
                >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className="text-[var(--greyscale-600)] font-medium">Chia sẻ bài viết:</span>
                            <button className="p-2 rounded-lg border border-[var(--greyscale-200)] hover:border-[var(--base-primary)] hover:text-[var(--base-primary)] transition-colors">
                                <Share2 className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[var(--greyscale-600)] font-medium">Thích bài viết:</span>
                            <button className="p-2 rounded-lg border border-[var(--greyscale-200)] hover:border-red-500 hover:text-red-500 transition-colors">
                                <Heart className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Back to Blog */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="pt-8 mt-8 border-t border-[var(--greyscale-200)]"
                >
                    <Link
                        href="/resources/blog"
                        className="inline-flex items-center gap-2 text-[var(--greyscale-600)] hover:text-[var(--base-primary)] font-semibold transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Xem tất cả bài viết
                    </Link>
                </motion.div>
            </article>
        </div>
    );
}
