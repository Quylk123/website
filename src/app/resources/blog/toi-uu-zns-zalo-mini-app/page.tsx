import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tối ưu ZNS cho Zalo Mini App - Tăng 90% tỷ lệ mở 2026",
    description: "Hướng dẫn tối ưu ZNS (Zalo Notification Service) cho Zalo Mini App: cách gửi, tối ưu content, time sending, và tăng 90% tỷ lệ mở.",
    keywords: "ZNS Zalo Mini App, tối ưu ZNS, gửi ZNS, Zalo Notification Service, hướng dẫn ZNS",
    alternates: {
        canonical: "https://zimo.vn/resources/blog/toi-uu-zns-zalo-mini-app",
    },
    openGraph: {
        title: "Tối ưu ZNS cho Zalo Mini App - Tăng 90% tỷ lệ mở 2026",
        description: "Hướng dẫn tối ưu ZNS (Zalo Notification Service) cho Zalo Mini App: cách gửi, tối ưu content, time sending, và tăng 90% tỷ lệ mở.",
        type: "article",
        url: "https://zimo.vn/resources/blog/toi-uu-zns-zalo-mini-app",
    },
};

export default function BlogPostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Tối ưu ZNS cho Zalo Mini App - Tăng 90% tỷ lệ mở 2026",
        "description": "Hướng dẫn tối ưu ZNS (Zalo Notification Service) cho Zalo Mini App: cách gửi, tối ưu content, time sending, và tăng 90% tỷ lệ mở.",
        "image": "https://zimo.vn/images/blog/zns-optimization.jpg",
        "author": {
            "@type": "Organization",
            "name": "Zimo"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Zimo",
            "logo": {
                "@type": "ImageObject",
                "url": "https://zimo.vn/logo.png"
            }
        },
        "datePublished": "2026-02-10",
        "dateModified": "2026-02-10",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "id": "https://zimo.vn/resources/blog/toi-uu-zns-zalo-mini-app"
        },
        "keywords": "ZNS Zalo Mini App, tối ưu ZNS",
        "articleSection": "Marketing",
        "wordCount": 2600
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <article className="flex flex-col bg-[var(--base-background)] text-[var(--greyscale-900)] font-sans min-h-screen">
            {/* Header */}
            <header className="pt-20 pb-12 bg-[var(--greyscale-50)]">
                <div className="container mx-auto px-4 max-w-4xl">
                    <nav className="mb-8">
                        <a
                            href="/resources/blog"
                            className="inline-flex items-center gap-2 text-[var(--greyscale-600)] hover:text-[var(--base-primary)] transition-colors"
                        >
                            ← Quay lại Blog
                        </a>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Tối ưu ZNS cho Zalo Mini App - Tăng 90% tỷ lệ mở 2026
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-[var(--greyscale-500)]">
                        <span className="bg-[var(--palette-orange-badge-bg)] text-[var(--palette-orange-text)] px-3 py-1 rounded-full text-sm font-medium">
                            Marketing
                        </span>
                        <span>•</span>
                        <span>10/02/2026</span>
                        <span>•</span>
                        <span>14 phút đọc</span>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-[var(--base-text-paragraph)] leading-relaxed mb-8">
                        ZNS (Zalo Notification Service) là công cụ mạnh nhất để giữ liên hệ với khách hàng trên Zalo. Tỷ lệ mở lên đến 90% — cao hơn SMS và email rất nhiều. Bài viết này sẽ hướng dẫn tối ưu ZNS để đạt hiệu quả tối đa.
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">ZNS là gì và tại sao quan trọng?</h2>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📱 ZNS (Zalo Notification Service):</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Định nghĩa:</strong> Tin nhắn thông báo từ Zalo Official Account đến người dùng Zalo</li>
                            <li>• <strong>Tỷ lệ mở:</strong> 85-90% (SMS: 20-30%, Email: 15-25%)</li>
                            <li>• <strong>Tỷ lệ click:</strong> 25-35% (nếu tối ưu tốt)</li>
                            <li>• <strong>Chi phí:</strong> 600-800 VNĐ/tin (tùy gói)</li>
                            <li>• <strong>Giới hạn:</strong> Không spam, có template cố định</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 So sánh ZNS với các kênh khác:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>ZNS:</strong> Tỷ lệ mở 90%, chi phí 600đ</li>
                            <li>• <strong>SMS:</strong> Tỷ lệ mở 25%, chi phí 400đ</li>
                            <li>• <strong>Email:</strong> Tỷ lệ mở 20%, chi phí 0đ (nhưng mất thời gian)</li>
                            <li>• <strong>Zalo Chat:</strong> Tỷ lệ mở 95%, chi phí 0đ (nhưng khó gửi hàng loạt)</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Các loại ZNS và khi nào nên dùng</h2>

                    <div className="bg-[var(--palette-blue-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📝 Loại 1: ZNS Transactional (Giao dịch)</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Mục đích:</strong> Thông báo giao dịch, đặt hàng, thanh toán</li>
                            <li>• <strong>Ví dụ:</strong> "Đơn hàng #12345 đã được xác nhận", "Thanh toán thành công 500.000đ"</li>
                            <li>• <strong>Ưu tiên:</strong> Cao nhất, gửi ngay lập tức</li>
                            <li>• <strong>Giới hạn gửi:</strong> Không giới hạn</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-purple-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📝 Loại 2: ZNS Marketing (Tiếp thị)</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Mục đích:</strong> Khuyến mãi, voucher, thông báo sản phẩm mới</li>
                            <li>• <strong>Ví dụ:</strong> "Voucher 20% cho đơn hàng trên 500k", "Sản phẩm mới đã có sẵn"</li>
                            <li>• <strong>Ưu tiên:</strong> Thấp hơn transactional</li>
                            <li>• <strong>Giới hạn gửi:</strong> 1-2 tin/ngày/người dùng</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-orange-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📝 Loại 3: ZNS Reminder (Nhắc nhở)</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Mục đích:</strong> Nhắc hẹn, nhắc giỏ hàng, nhắc thanh toán</li>
                            <li>• <strong>Ví dụ:</strong> "Bạn có lịch hẹn vào 14:00 hôm nay", "Giỏ hàng của bạn vẫn đang chờ"</li>
                            <li>• <strong>Ưu tiên:</strong> Trung bình</li>
                            <li>• <strong>Giới hạn gửi:</strong> 3-5 tin/ngày/người dùng</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Tối ưu content ZNS để tăng tỷ lệ mở</h2>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">✅ Nguyên tắc content ZNS hiệu quả:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Ngắn gọn:</strong> Tối đa 200-300 ký tự</li>
                            <li>• <strong>Rõ ràng:</strong> Người dùng biết ngay ZNS là về cái gì</li>
                            <li>• <strong>CTA mạnh:</strong> "Xem ngay", "Đặt hàng", "Xem voucher"</li>
                            <li>• <strong>Emoji phù hợp:</strong> Tăng 15-20% tỷ lệ mở</li>
                            <li>• <strong>Personalization:</strong> Dùng tên khách hàng nếu có</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">❌ Sai lầm thường gặp:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Quá dài:</strong> Người dùng không đọc hết</li>
                            <li>• <strong>Không rõ ràng:</strong> Không biết ZNS là về cái gì</li>
                            <li>• <strong>Không có CTA:</strong> Người dùng không biết phải làm gì</li>
                            <li>• <strong>Spam:</strong> Gửi quá nhiều, người dùng tắt thông báo</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Best practice cho từng loại ZNS</h2>

                    <div className="bg-[var(--palette-blue-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📋 ZNS Transactional - Template hiệu quả:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Đơn hàng đã đặt:</strong> "📦 Đơn hàng #12345 đã được xác nhận. Dự kiến giao: 15/02. Xem chi tiết [link]"</li>
                            <li>• <strong>Thanh toán thành công:</strong> "✅ Thanh toán 500.000đ thành công. Cảm ơn bạn đã mua hàng!"</li>
                            <li>• <strong>Đang giao:</strong> "🚚 Đơn hàng #12345 đang được giao. Xem vị trí [link]"</li>
                            <li>• <strong>Hoàn thành:</strong> "✨ Đơn hàng #12345 đã hoàn thành. Đánh giá để nhận voucher 10%"</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-purple-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📋 ZNS Marketing - Template hiệu quả:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Voucher:</strong> "🎁 Voucher 20% cho đơn hàng trên 500k. Hạn chót: 20/02. Xem ngay [link]"</li>
                            <li>• <strong>Flash sale:</strong> "⚡ Flash sale 12h trưa - 30% giảm giá. Sẵn sàng [link]"</li>
                            <li>• <strong>Sản phẩm mới:</strong> "✨ Sản phẩm mới: [Tên sản phẩm]. Xem ngay [link]"</li>
                            <li>• <strong>Khuyến mãi:</strong> "🎉 Mua 1 tặng 1 cho [Tên sản phẩm]. Thời gian: 15-20/02. Xem [link]"</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-orange-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📋 ZNS Reminder - Template hiệu quả:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Giỏ hàng bỏ:</strong> "🛒 Giỏ hàng của bạn vẫn đang chờ. Hoàn thành trong 2h để nhận freeship [link]"</li>
                            <li>• <strong>Nhắc hẹn:</strong> "⏰ Bạn có lịch hẹn vào 14:00 hôm nay tại [Địa điểm]. Xem chi tiết [link]"</li>
                            <li>• <strong>Đánh giá:</strong> "⭐ Đánh giá đơn hàng #12345 để nhận voucher 10%. Đánh giá ngay [link]"</li>
                            <li>• <strong>Win-back:</strong> "👋 Đã lâu không thấy bạn. Voucher 15% chờ bạn quay lại [link]"</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Tối ưu thời gian gửi ZNS</h2>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">⏰ Giờ vàng để gửi ZNS:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>9:00-10:00:</strong> Người dùng vừa mở Zalo, tỷ lệ mở cao nhất (90-95%)</li>
                            <li>• <strong>12:00-13:00:</strong> Nghỉ trưa, người dùng kiểm tra Zalo (85-90%)</li>
                            <li>• <strong>19:00-21:00:</strong> Sau giờ làm, thời gian rảnh (80-85%)</li>
                            <li>• <strong>Tránh:</strong> 22:00-7:00, cuối tuần (tỷ lệ mở thấp hơn)</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 Case Study: Cafe A</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Trước:</strong> Gửi ZNS bất giờ, tỷ lệ mở 75%</li>
                            <li>• <strong>Sau:</strong> Gửi vào 9:00 sáng, 12:00 trưa, 19:00 tối</li>
                            <li>• <strong>Kết quả:</strong> Tỷ lệ mở tăng lên 92% (+17%)</li>
                            <li>• <strong>Tỷ lệ click:</strong> Từ 25% lên 35%</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">A/B testing ZNS</h2>

                    <div className="bg-[var(--palette-blue-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">🧪 Cách A/B test ZNS:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Test 2 variant:</strong> Chia user thành 2 nhóm, gửi content khác nhau</li>
                            <li>• <strong>Biến test:</strong> Subject, emoji, CTA, thời gian gửi</li>
                            <li>• <strong>KPI:</strong> Tỷ lệ mở, tỷ lệ click, conversion</li>
                            <li>• <strong>Thời gian test:</strong> 1-2 tuần, tối thiểu 1000-2000 user mỗi nhóm</li>
                            <li>• <strong>Công cụ:</strong> Zalo OA Dashboard, hoặc tự triển khai</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-purple-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 Case Study: E-commerce B</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Variant A:</strong> "Voucher 20% cho đơn hàng trên 500k. Xem ngay [link]"</li>
                            <li>• <strong>Variant B:</strong> "🎁 Voucher 20% - Hạn chót 20/02. Xem ngay [link]"</li>
                            <li>• <strong>Kết quả:</strong> Variant B có tỷ lệ mở 89% vs 82% (Variant A)</li>
                            <li>• <strong>Bài học:</strong> Deadline (hạn chót) và emoji tăng tỷ lệ mở</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Tích hợp ZNS với Mini App</h2>

                    <div className="bg-[var(--palette-orange-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">🔗 Cách link ZNS đến Mini App:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Deep link:</strong> ZNS → Mini App trang cụ thể (ví dụ: trang sản phẩm)</li>
                            <li>• <strong>UTM parameters:</strong> Theo dõi traffic từ ZNS</li>
                            <li>• <strong>Truyền data:</strong> User ID, voucher code, product ID</li>
                            <li>• <strong>Auto-fill:</strong> Tự động điền thông tin khi user vào Mini App</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 Case Study: Restaurant C</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>ZNS:</strong> "🎁 Voucher 20% - Đặt bàn ngay [link]"</li>
                            <li>• <strong>Deep link:</strong> Vào Mini App → trang đặt bàn, tự động chọn ngày hôm nay</li>
                            <li>• <strong>Kết quả:</strong> 500 lượt click, 200 booking (40% conversion)</li>
                            <li>• <strong>So với:</strong> Link đến homepage chỉ có 15% conversion</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Tổng kết</h2>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        ZNS là công cụ mạnh nhất để giữ liên hệ với khách hàng trên Zalo. Nếu tối ưu tốt, có thể đạt 90% tỷ lệ mở, 35% tỷ lệ click, và tăng 40% doanh số.
                    </p>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        <strong className="text-[var(--greyscale-900)]">Lời khuyên:</strong> Bắt đầu với ZNS transactional (thông báo đơn hàng), sau đó mở rộng ZNS marketing và reminder. A/B test content, thời gian gửi, và tích hợp với Mini App để tối ưu conversion.
                    </p>

                    <div className="bg-gradient-to-r from-[var(--primary-50)] to-transparent p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            Sẵn Sàng Tối Ưu ZNS Cho Mini App?
                        </h3>
                        <p className="text-[var(--base-text-paragraph)] mb-6">
                            Liên hệ Zimo ngay để được hỗ trợ tích hợp và tối ưu ZNS cho Mini App của bạn.
                        </p>
                        <a
                            href="https://zalo.me/0899111195"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[var(--base-primary)] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all text-lg"
                        >
                            Nhận tư vấn miễn phí →
                        </a>
                    </div>
                </div>
            </div>
        </article>
        </>
    );
}
