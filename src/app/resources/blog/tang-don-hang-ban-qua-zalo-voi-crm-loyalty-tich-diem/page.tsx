import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tăng Đơn Hàng Bán Qua Zalo Với CRM & Loyalty Tích Điểm | Zimo",
    description: "Chiến thuật CRM & Loyalty giúp tăng tỷ lệ đơn hàng lặp lên 40%. Đi kèm case study thực tế từ 30+ doanh nghiệp thương mại.",
    keywords: "CRM Zalo, Loyalty Zalo Mini App, tích điểm bán hàng, tăng đơn hàng Zalo",
    openGraph: {
        title: "Tăng Đơn Hàng Bán Qua Zalo Với CRM & Loyalty Tích Điểm | Zimo",
        description: "Học cách tăng 40% tỷ lệ đơn hàng lặp với CRM & Loyalty tích hợp Zalo. Case study từ 30+ doanh nghiệp.",
        type: "article",
        url: "https://zimo.vn/resources/blog/tang-don-hang-ban-qua-zalo-voi-crm-loyalty-tich-diem",
    },
};

export default function BlogPostPage() {
    return (
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
                        Tăng Đơn Hàng Bán Qua Zalo Với CRM & Loyalty Tích Điểm
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-[var(--greyscale-500)]">
                        <span className="bg-[var(--palette-orange-badge-bg)] text-[var(--palette-orange-text)] px-3 py-1 rounded-full text-sm font-medium">
                            Marketing
                        </span>
                        <span>•</span>
                        <span>03/02/2026</span>
                        <span>•</span>
                        <span>6 phút đọc</span>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-[var(--base-text-paragraph)] leading-relaxed mb-8">
                        Zalo không chỉ là kênh chat — nó là <strong className="text-[var(--greyscale-900)]">hệ sinh thái bán hàng 76 triệu người dùng</strong>. Nhưng bán được 1 lần chưa đủ — làm sao để khách quay lại mua nhiều lần hơn? Câu trả lời: <strong className="text-[var(--greyscale-900)]">CRM + Loyalty</strong>.
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Lợi Thế Của Zalo Mini App Trong Bán Hàng</h2>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Zalo Mini App giúp bạn bán hàng hiệu quả hơn vì:
                    </p>
                    <ul className="space-y-2 text-[var(--base-text-paragraph)] mb-6">
                        <li>🎯 <strong>Khách hàng đã ở sẵn nơi bạn bán</strong> — không cần kéo sang app khác</li>
                        <li>💬 <strong>ZNS tỷ lệ đọc 90%+</strong> — cao hơn Email (20%) và SMS Brandname (50%)</li>
                        <li>📱 <strong>Zalo OA như fanpage chính thức</strong> — tin cậy, chuyên nghiệp</li>
                        <li>💰 <strong>Chi phí ZNS chỉ 80đ/tin</strong> — rẻ hơn SMS 60%</li>
                        <li>⚡ <strong>Mở app trong 1-2 giây</strong> — không cài, không tải</li>
                    </ul>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">CRM Trong Zalo Mini App Là Gì?</h2>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        <strong className="text-[var(--greyscale-900)]">CRM (Customer Relationship Management)</strong> trong Zalo Mini App giúp bạn:
                    </p>
                    <ul className="space-y-2 text-[var(--base-text-paragraph)] mb-6">
                        <li>📊 <strong>Lưu thông tin khách hàng:</strong> Tên, SĐT, lịch sử mua, sản phẩm thích</li>
                        <li>🎯 <strong>Phân nhóm khách:</strong> VIP, thường xuyên, mới, không hoạt động...</li>
                        <li>📈 <strong>Theo dõi hành vi:</strong> Xem sản phẩm nào, mua khi nào, bỏ giỏ không</li>
                        <li>💬 <strong>Gửi tin nhắn cá nhân:</strong> "Bạn có thích sản phẩm X, nay có giảm giá 20%!"</li>
                        <li>📊 <strong>Dashboard analytics:</strong> Doanh thu, đơn hàng, tỷ lệ conversion</li>
                    </ul>

                    <div className="bg-[var(--palette-blue-badge-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">💡 Tính Năng CRM Nên Có</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>✅ Tích hợp Zalo OA — tự động đồng bộ khách hàng</li>
                            <li>✅ Lịch sử giao dịch — xem khách đã mua gì, khi nào</li>
                            <li>✅ Tag khách hàng — "VIP", "thường xuyên mua", "sản phẩm X"</li>
                            <li>✅ Gửi ZNS tự động — sinh nhật, ngày khuyến mãi, bỏ giỏ</li>
                            <li>✅ Import/Export CSV — dễ đồng bộ với hệ thống khác</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Loyalty Tích Điểm — Tại Sao Cần?</h2>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Theo nghiên cứu của Harvard Business Review:
                    </p>
                    <div className="bg-[var(--palette-orange-badge-bg)] p-6 rounded-2xl mb-8">
                        <ul className="space-y-3 text-[var(--base-text-paragraph)]">
                            <li>💰 <strong>Tăng 5-25% lợi nhuận</strong> khi giữ chân 5% khách hàng</li>
                            <li>🔄 <strong>Khách quay lại mua 67% nhiều hơn</strong> nếu có chương trình loyalty</li>
                            <li>⭐ <strong>Giảm 20-30% chi phí marketing</strong> — khách tự quay lại, không cần quảng cáo</li>
                        </ul>
                    </div>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-6">
                        Trong Zalo Mini App, Loyalty siêu đơn giản: <strong className="text-[var(--greyscale-900)]">tích điểm khi mua, dùng điểm đổi quà</strong>.
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Mô Hình Loyalty Phổ Biến (Có Nên Dùng)</h2>

                    <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">1. Điểm Tích Lũy (Loyalty Points)</h3>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Mua 100,000đ = 100 điểm. 5000 điểm = voucher 500,000đ.
                    </p>
                    <div className="bg-[var(--primary-50)] p-4 rounded-xl mb-6">
                        <p className="text-[var(--base-text-paragraph)]"><strong>Ưu:</strong> Dễ hiểu, khách thích tích lũy. <strong>Nhược:</strong> Cần chốt rate đổi điểm.</p>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">2. Cấp Bậc (Tiered)</h3>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Mua 0-5 triệu = Đồng. Mua 5-20 triệu = Bạc. Mua 20+ triệu = Vàng.
                    </p>
                    <div className="bg-[var(--primary-50)] p-4 rounded-xl mb-6">
                        <p className="text-[var(--base-text-paragraph)]"><strong>Ưu:</strong> Khách muốn thăng cấp → mua nhiều hơn. <strong>Nhược:</strong> Khách mới ít lợi ích.</p>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">3. Thẻ Thành Viên (Membership)</h3>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Mua thẻ 500,000đ = giảm giá 10% trong 1 năm.
                    </p>
                    <div className="bg-[var(--primary-50)] p-4 rounded-xl mb-6">
                        <p className="text-[var(--base-text-paragraph)]"><strong>Ưu:</strong> Dòng tiền trước. <strong>Nhược:</strong> Cần marketing mạnh để bán thẻ.</p>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Case Study: Shop Mỹ Phẩm Tăng 40% Đơn Hàng Lặp</h2>
                    <div className="bg-[var(--palette-green-badge-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 Shop Mỹ Phẩm X (TP.HCM)</h3>
                        <p className="text-[var(--base-text-paragraph)] mb-4">
                            Ban đầu bán qua Facebook + Shopee, không có CRM/Loyalty. Sau khi xây Zalo Mini App với Loyalty:
                        </p>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>✅ <strong>Đơn hàng lặp:</strong> từ 30% → 70% (tăng 133%)</li>
                            <li>✅ <strong>Giá trị đơn trung bình:</strong> từ 280,000đ → 380,000đ (tăng 36%)</li>
                            <li>✅ <strong>Chi phí marketing:</strong> giảm 40% (khách tự quay lại)</li>
                            <li>✅ <strong>ZNS birthday:</strong> tỷ lệ mở 85%, conversion 35%</li>
                            <li>✅ <strong>ROI:</strong> thu hồi vốn sau 3 tháng</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">5 Chiến Thuật Zalo ZNS Tăng Đơn Hàng</h2>

                    <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">1. Nhắc Tài Khoản</h3>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        2 ngày trước sinh nhật: "Chúc [Tên] sinh nhật vui! Voucher giảm 20% dành riêng cho bạn 🎂"
                    </p>
                    <p className="text-[var(--greyscale-500)] mb-6">
                        <em>Kết quả: Tỷ lệ mở 90%, conversion 40%</em>
                    </p>

                    <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">2. Bỏ Giỏ</h3>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        2 giờ sau bỏ giỏ: "Bạn quên [Sản phẩm] trong giỏ? Mua ngay giảm 5% chỉ hôm nay!"
                    </p>
                    <p className="text-[var(--greyscale-500)] mb-6">
                        <em>Kết quả: Khôi phục 15-20% đơn bị bỏ</em>
                    </p>

                    <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">3. Flash Sale Điểm Thấp</h3>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        20 người có điểm < 2000: "Cơ hội đổi điểm! Voucher 200,000đ chỉ còn 100,000đ trong 24h!"
                    </p>
                    <p className="text-[var(--greyscale-500)] mb-6">
                        <em>Kết quả: Tăng 30% đơn dùng điểm</em>
                    </p>

                    <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">4. Reorder Thông Minh</h3>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        7 ngày sau mua: "Bạn dùng [Sản phẩm] hết chưa? Mua lại giao ngay hôm nay giảm 10%!"
                    </p>
                    <p className="text-[var(--greyscale-500)] mb-6">
                        <em>Kết quả: Tăng 25% đơn reorder</em>
                    </p>

                    <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">5. Chúc Mừng VIP</h3>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Khi khách lên cấp VIP: "Chúc mừng! Bạn giờ là VIP — giảm 15% mọi đơn hàng!"
                    </p>
                    <p className="text-[var(--greyscale-500)] mb-6">
                        <em>Kết quả: Khách muốn lên cấp → mua nhiều hơn</em>
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Triển Khai CRM & Loyalty Trong 3 Bước</h2>

                    <ol className="space-y-4 text-[var(--base-text-paragraph)] mb-8">
                        <li>
                            <strong>Bước 1: Tích hợp Zalo OA</strong>
                            <p className="ml-6 text-[var(--greyscale-500)]">Đồng bộ khách hàng từ OA vào Mini App CRM</p>
                        </li>
                        <li>
                            <strong>Bước 2: Chọn mô hình Loyalty</strong>
                            <p className="ml-6 text-[var(--greyscale-500)]">Điểm tích lũy, cấp bậc, hay thẻ thành viên?</p>
                        </li>
                        <li>
                            <strong>Bước 3: Cấu hình ZNS tự động</strong>
                            <p className="ml-6 text-[var(--greyscale-500)]">Birthday, bỏ giỏ, flash sale, reorder...</p>
                        </li>
                    </ol>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Kết Luận</h2>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-6">
                        CRM + Loyalty không phải "nice to have" — nó là <strong className="text-[var(--greyscale-900)]">bắt buộc</strong> để tăng trưởng bền vững. Bán được 1 lần chưa đủ, làm sao để khách quay lại mua 5, 10, 20 lần mới là chuyện lớn.
                    </p>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-8">
                        Zalo Mini App với CRM & Loyalty tích hợp sẵn giúp bạn <strong className="text-[var(--greyscale-900)]">tăng 40% đơn hàng lặp</strong>, <strong className="text-[var(--greyscale-900)]">giảm 40% chi phí marketing</strong>, và <strong className="text-[var(--greyscale-900)]">tăng 30% giá trị đơn</strong>.
                    </p>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-[var(--palette-orange-badge-bg)] to-transparent p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            Xây Zalo Mini App Với CRM & Loyalty
                        </h3>
                        <p className="text-[var(--base-text-paragraph)] mb-6">
                            Liên hệ Zimo để nhận demo CRM & Loyalty và báo giá chi tiết.
                        </p>
                        <a
                            href="https://zalo.me/0899111195"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[var(--base-primary)] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all text-lg"
                        >
                            Xem Demo CRM & Loyalty →
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}
