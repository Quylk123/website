import { Metadata } from "next";

export const metadata: Metadata = {
    title: "So sánh Zalo Mini App vs Zalo OA: Điểm khác biệt và Khi nào nên dùng | Zimo",
    description: "Zalo Mini App và Zalo OA khác nhau như thế nào? Hướng dẫn chi tiết giúp doanh nghiệp chọn giải pháp phù hợp nhất cho nhu cầu kinh doanh của mình.",
    keywords: "so sánh Zalo Mini App vs Zalo OA, Zalo OA là gì, Zalo Mini App là gì, khác biệt Zalo OA và Mini App, khi nào dùng Zalo OA",
    alternates: {
        canonical: "https://zimo.vn/resources/blog/so-sanh-zalo-mini-app-vs-zalo-oa",
    },
    openGraph: {
        title: "So sánh Zalo Mini App vs Zalo OA: Điểm khác biệt và Khi nào nên dùng",
        description: "Zalo OA vs Zalo Mini App — chọn giải pháp nào cho doanh nghiệp của bạn? So sánh chi tiết tính năng, chi phí, và hiệu quả.",
        type: "article",
        url: "https://zimo.vn/resources/blog/so-sanh-zalo-mini-app-vs-zalo-oa",
    },
};

export default function BlogPostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "So sánh Zalo Mini App vs Zalo OA: Điểm khác biệt và Khi nào nên dùng",
        "description": "Zalo Mini App và Zalo OA khác nhau như thế nào? Hướng dẫn chi tiết giúp doanh nghiệp chọn giải pháp phù hợp nhất cho nhu cầu kinh doanh của mình.",
        "image": "https://zimo.vn/images/blog/zalo-mini-app-vs-oa.jpg",
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
        "datePublished": "2026-02-07",
        "dateModified": "2026-02-07",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://zimo.vn/resources/blog/so-sanh-zalo-mini-app-vs-zalo-oa"
        },
        "keywords": "so sánh Zalo Mini App vs Zalo OA, Zalo OA là gì, Zalo Mini App là gì",
        "articleSection": "Chuyển đổi số",
        "wordCount": 2000
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
                        So sánh Zalo Mini App vs Zalo OA: Điểm khác biệt và Khi nào nên dùng
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-[var(--greyscale-500)]">
                        <span className="bg-[var(--palette-purple-badge-bg)] text-[var(--palette-purple-text)] px-3 py-1 rounded-full text-sm font-medium">
                            Chuyển đổi số
                        </span>
                        <span>•</span>
                        <span>07/02/2026</span>
                        <span>•</span>
                        <span>10 phút đọc</span>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-[var(--base-text-paragraph)] leading-relaxed mb-8">
                        <strong className="text-[var(--greyscale-900)]">Zalo OA</strong> và <strong className="text-[var(--greyscale-900)]">Zalo Mini App</strong> là hai giải pháp phổ biến nhất của Zalo dành cho doanh nghiệp, nhưng nhiều người vẫn nhầm lẫn giữa hai khái niệm này. Bài viết này sẽ giúp bạn hiểu rõ sự khác biệt và chọn giải pháp phù hợp cho doanh nghiệp của mình.
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Zalo OA là gì?</h2>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        <strong className="text-[var(--greyscale-900)]">Zalo OA (Zalo Official Account)</strong> là tài khoản doanh nghiệp chính thức trên Zalo — tương tự như Fanpage trên Facebook. Nó cho phép doanh nghiệp:
                    </p>

                    <ul className="space-y-2 text-[var(--base-text-paragraph)] mb-6">
                        <li>• <strong>Gửi tin nhắn đến khách hàng:</strong> Chat trực tiếp 1-1 hoặc broadcast hàng loạt</li>
                        <li>• <strong>Đăng bài viết:</strong> Chia sẻ tin tức, bài viết, hình ảnh đến người quan tâm</li>
                        <li>• <strong>ZNS (Zalo Notification Service):</strong> Gửi tin nhắn thông báo tự động</li>
                        <li>• <strong>Menu và Auto-reply:</strong> Tạo menu nhanh và phản hồi tự động</li>
                        <li>• <strong>Analytics:</strong> Theo dõi tương tác và hiệu quả nội dung</li>
                    </ul>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-6">
                        Zalo OA tập trung vào <strong className="text-[var(--greyscale-900)]">kết nối và giao tiếp</strong> giữa doanh nghiệp và khách hàng. Nó là "kênh truyền thông" chính của doanh nghiệp trên Zalo.
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Zalo Mini App là gì?</h2>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        <strong className="text-[var(--greyscale-900)]">Zalo Mini App</strong> là ứng dụng nhỏ chạy ngay trong Zalo — cho phép doanh nghiệp tạo trải nghiệm tương tác phức tạp mà không cần khách hàng tải thêm ứng dụng nào khác.
                    </p>

                    <ul className="space-y-2 text-[var(--base-text-paragraph)] mb-6">
                        <li>• <strong>Booking & Đặt lịch:</strong> Đặt phòng khách sạn, đặt bàn, đặt lịch khám</li>
                        <li>• <strong>Bán hàng & Checkout:</strong> Giỏ hàng, thanh toán, tracking đơn hàng</li>
                        <li>• <strong>CRM & Loyalty:</strong> Quản lý khách hàng, tích điểm, voucher</li>
                        <li>• <strong>Dashboard & Báo cáo:</strong> Xem dữ liệu, phân tích hiệu quả</li>
                        <li>• <strong>Custom giao diện:</strong> Thiết kế UI/UX theo nhu cầu doanh nghiệp</li>
                    </ul>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-6">
                        Zalo Mini App tập trung vào <strong className="text-[var(--greyscale-900)]">trải nghiệm và chức năng</strong> — cho phép doanh nghiệp tạo ra các ứng dụng nhỏ phục vụ nhu cầu cụ thể của khách hàng.
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Sự khác biệt chính: Zalo OA vs Zalo Mini App</h2>

                    <div className="overflow-x-auto mb-8">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-[var(--greyscale-50)]">
                                    <th className="border border-[var(--greyscale-200)] p-3 text-left font-bold">Tiêu chí</th>
                                    <th className="border border-[var(--greyscale-200)] p-3 text-left font-bold">Zalo OA</th>
                                    <th className="border border-[var(--greyscale-200)] p-3 text-left font-bold">Zalo Mini App</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3"><strong>Mục đích chính</strong></td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Giao tiếp, kết nối, truyền thông</td>
                                    <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">Trải nghiệm, chức năng, giao dịch</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3"><strong>Tương tác</strong></td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Chat, gửi tin, bài viết</td>
                                    <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">UI/UX phức tạp, tương tác dạng app</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3"><strong>Tùy chỉnh giao diện</strong></td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Hạn chế (template có sẵn)</td>
                                    <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">Đầy đủ (custom design)</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3"><strong>Tích hợp hệ thống</strong></td>
                                    <td className="border border-[var(--greyscale-200)] p-3">API hạn chế</td>
                                    <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">API đầy đủ, webhooks, SDK</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3"><strong>Chi phí phát triển</strong></td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Miễn phí hoặc thấp</td>
                                    <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">10-50 triệu (tùy tính năng)</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3"><strong>CRM tích hợp</strong></td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Hạn chế</td>
                                    <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">Đầy đủ (có database riêng)</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3"><strong>Loyalty & Tích điểm</strong></td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Không có hoặc hạn chế</td>
                                    <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">Có đầy đủ, tự động</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Khi nào nên dùng Zalo OA?</h2>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Zalo OA phù hợp cho các doanh nghiệp cần:
                    </p>

                    <ul className="space-y-2 text-[var(--base-text-paragraph)] mb-6">
                        <li>• <strong>Kết nối và giao tiếp:</strong> Chat 1-1 với khách hàng, giải đáp thắc mắc, hỗ trợ CSKH</li>
                        <li>• <strong>Truyền thông nội dung:</strong> Đăng bài viết, chia sẻ tin tức, khuyến mãi</li>
                        <li>• <strong>Thu hút người quan tâm:</strong> Tăng số lượng người quan tâm (followers)</li>
                        <li>• <strong>Gửi thông báo ZNS:</strong> Thông báo đơn hàng, lịch hẹn, khuyến mãi</li>
                        <li>• <strong>Budget thấp:</strong> Doanh nghiệp mới, budget hạn chế, muốn thử nghiệm trên Zalo</li>
                    </ul>

                    <div className="bg-[var(--greyscale-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📋 Ví dụ: Khi nào dùng Zalo OA</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Cửa hàng bán lẻ nhỏ:</strong> Gửi tin nhắn chào hàng, thông báo khuyến mãi</li>
                            <li>• <strong>Spa/Salon:</strong> Nhắc lịch hẹn, gửi voucher giảm giá</li>
                            <li>• <strong>Nhà hàng:</strong> Đăng thực đơn mới, thông báo sự kiện</li>
                            <li>• <strong>Doanh nghiệp B2B:</strong> Kết nối đối tác, chia sẻ thông tin doanh nghiệp</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Khi nào nên dùng Zalo Mini App?</h2>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Zalo Mini App phù hợp cho các doanh nghiệp cần:
                    </p>

                    <ul className="space-y-2 text-[var(--base-text-paragraph)] mb-6">
                        <li>• <strong>Booking & Đặt lịch:</strong> Khách sạn, nhà hàng, spa, phòng khám, dịch vụ gia đình</li>
                        <li>• <strong>Bán hàng & Checkout:</strong> Thương mại điện tử, bán lẻ, e-commerce</li>
                        <li>• <strong>CRM & Loyalty:</strong> Quản lý khách hàng, tích điểm, voucher, marketing tự động</li>
                        <li>• <strong>Dashboard & Báo cáo:</strong> Doanh nghiệp cần theo dõi dữ liệu chi tiết</li>
                            <li>• <strong>Tùy chỉnh trải nghiệm:</strong> Doanh nghiệp muốn custom UI/UX theo thương hiệu</li>
                    </ul>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📋 Ví dụ: Khi nào dùng Zalo Mini App</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Khách sạn (30+ phòng):</strong> Booking trực tuyến, check-in, quản lý phòng, hóa đơn</li>
                            <li>• <strong>Nhà hàng có delivery:</strong> Order món, thanh toán, tracking đơn</li>
                            <li>• <strong>Spa có nhiều chi nhánh:</strong> Đặt lịch, quản lý khách hàng, loyalty</li>
                            <li>• <strong>E-commerce:</strong> Giỏ hàng, checkout, tracking, CRM, marketing</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Kết hợp cả hai: Zalo OA + Zalo Mini App</h2>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Thực tế, <strong className="text-[var(--greyscale-900)]">đa số doanh nghiệp nên dùng cả hai</strong> để tối ưu hóa hiệu quả:
                    </p>

                    <ul className="space-y-2 text-[var(--base-text-paragraph)] mb-6">
                        <li>• <strong>Zalo OA:</strong> Dùng để thu hút người quan tâm, gửi thông báo, chào hàng</li>
                        <li>• <strong>Zalo Mini App:</strong> Dùng để khách hàng thực hiện giao dịch, booking, tích điểm</li>
                        <li>• <strong>Flow điển hình:</strong> Khách quan tâm OA → Nhận thông báo qua ZNS → Click vào Mini App để booking/mua hàng</li>
                    </ul>

                    <div className="bg-[var(--palette-blue-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">🔄 Flow kết hợp hiệu quả:</h3>
                        <ol className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li><strong>1.</strong> Khách hàng quan tâm Zalo OA của bạn</li>
                            <li><strong>2.</strong> Bạn đăng bài viết khuyến mãi trên OA</li>
                            <li><strong>3.</strong> Bạn gửi ZNS thông báo ưu đãi đến khách hàng</li>
                            <li><strong>4.</strong> Khách hàng click vào link Mini App để booking/mua hàng</li>
                            <li><strong>5.</strong> Sau khi mua, khách hàng nhận được thông báo xác nhận qua ZNS</li>
                            <li><strong>6.</strong> Khách hàng tích điểm và quay lại nhờ loyalty trên Mini App</li>
                        </ol>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Case Study: Khách sạn Y kết hợp OA + Mini App</h2>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 Kết quả sau 6 tháng:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Zalo OA:</strong> Từ 2,000 → 15,000 người quan tâm (tăng 650%)</li>
                            <li>• <strong>Booking qua Mini App:</strong> Từ 10% → 55% tổng số booking</li>
                            <li>• <strong>ZNS mở rate:</strong> 85% (tỷ lệ xem tin thông báo)</li>
                            <li>• <strong>Tỷ lệ chuyển đổi:</strong> Từ người quan tâm → booking = 12%</li>
                            <li>• <strong>Customer retention:</strong> Tăng 45% nhờ loyalty</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Chi phí: So sánh ngân sách</h2>

                    <div className="overflow-x-auto mb-8">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-[var(--greyscale-50)]">
                                    <th className="border border-[var(--greyscale-200)] p-3 text-left font-bold">Giải pháp</th>
                                    <th className="border border-[var(--greyscale-200)] p-3 text-left font-bold">Chi phí thiết lập</th>
                                    <th className="border border-[var(--greyscale-200)] p-3 text-left font-bold">Chi phí vận hành/tháng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3">Zalo OA (miễn phí)</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">0 đ</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">0 đ</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3">Zalo OA (premium)</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">1-2 triệu</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">500K-1 triệu</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3">Zalo Mini App (cơ bản)</td>
                                    <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">10-20 triệu</td>
                                    <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">500K-1 triệu</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3">Zalo Mini App (nâng cao)</td>
                                    <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">30-50 triệu</td>
                                    <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">1-2 triệu</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3">Kết hợp OA + Mini App</td>
                                    <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">10-52 triệu</td>
                                    <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">500K-3 triệu</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Cách bắt đầu</h2>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Tùy thuộc vào ngân sách và nhu cầu, bạn có thể bắt đầu theo lộ trình sau:
                    </p>

                    <ol className="space-y-4 text-[var(--base-text-paragraph)] mb-8">
                        <li>
                            <strong>Lộ trình 1 (budget thấp):</strong>
                            <p className="ml-6 text-[var(--greyscale-500)]">Bắt đầu với Zalo OA miễn phí → Xây dựng nội dung → Tăng người quan tâm → Sau 3-6 tháng, cân nhắc nâng cấp lên Mini App</p>
                        </li>
                        <li>
                            <strong>Lộ trình 2 (budget trung bình):</strong>
                            <p className="ml-6 text-[var(--greyscale-500)]">Lập Zalo OA + Mini App cơ bản song song → Triển khai trong 1-2 tháng → Tối ưu hóa dựa trên dữ liệu</p>
                        </li>
                        <li>
                            <strong>Lộ trình 3 (budget cao):</strong>
                            <p className="ml-6 text-[var(--greyscale-500)]">Lập Zalo OA premium + Mini App nâng cao → Tích hợp đầy đủ CRM, loyalty, analytics → Tối ưu hóa ngay từ đầu</p>
                        </li>
                    </ol>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Kết luận</h2>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Zalo OA và Zalo Mini App không phải là "thay thế" nhau, mà là <strong className="text-[var(--greyscale-900)]">bổ sung</strong>. Dùng cả hai sẽ mang lại hiệu quả cao nhất cho doanh nghiệp của bạn.
                    </p>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Zalo OA giúp bạn <strong className="text-[var(--greyscale-900)]">thu hút và kết nối</strong> khách hàng.
                    </p>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-6">
                        Zalo Mini App giúp bạn <strong className="text-[var(--greyscale-900)]">chuyển đổi và giữ chân</strong> khách hàng.
                    </p>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-8">
                        Đừng chọn "hoặc hoặc" — hãy chọn "cả hai". Liên hệ Zimo ngay để được tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn.
                    </p>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-[var(--primary-50)] to-transparent p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            Cần Tư Vấn Về Zalo OA hoặc Zalo Mini App?
                        </h3>
                        <p className="text-[var(--base-text-paragraph)] mb-6">
                            Liên hệ Zimo ngay để nhận tư vấn miễn phí và giải pháp phù hợp nhất cho doanh nghiệp của bạn.
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
