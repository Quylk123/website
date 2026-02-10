import { Metadata } from "next";

export const metadata: Metadata = {
    title: "So sánh Zalo Mini App vs Website - Cái nào tốt hơn 2026?",
    description: "So sánh chi tiết Zalo Mini App vs Website: tính năng, chi phí, trải nghiệm, conversion. Khi nào nên dùng Mini App, khi nào nên dùng Website.",
    keywords: "Zalo Mini App vs Website, so sánh Mini App và Website, cái nào tốt hơn, Zalo Mini App hay Website",
    alternates: {
        canonical: "https://zimo.vn/resources/blog/so-sanh-zalo-mini-app-vs-website",
    },
    openGraph: {
        title: "So sánh Zalo Mini App vs Website - Cái nào tốt hơn 2026?",
        description: "So sánh chi tiết Zalo Mini App vs Website: tính năng, chi phí, trải nghiệm, conversion. Khi nào nên dùng Mini App, khi nào nên dùng Website.",
        type: "article",
        url: "https://zimo.vn/resources/blog/so-sanh-zalo-mini-app-vs-website",
    },
};

export default function BlogPostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "So sánh Zalo Mini App vs Website - Cái nào tốt hơn 2026?",
        "description": "So sánh chi tiết Zalo Mini App vs Website: tính năng, chi phí, trải nghiệm, conversion. Khi nào nên dùng Mini App, khi nào nên dùng Website.",
        "image": "https://zimo.vn/images/blog/zalo-mini-app-vs-website.jpg",
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
            "id": "https://zimo.vn/resources/blog/so-sanh-zalo-mini-app-vs-website"
        },
        "keywords": "Zalo Mini App vs Website, so sánh Mini App",
        "articleSection": "So sánh",
        "wordCount": 3200
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
                        So sánh Zalo Mini App vs Website - Cái nào tốt hơn 2026?
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-[var(--greyscale-500)]">
                        <span className="bg-[var(--palette-yellow-badge-bg)] text-[var(--palette-yellow-text)] px-3 py-1 rounded-full text-sm font-medium">
                            So sánh
                        </span>
                        <span>•</span>
                        <span>10/02/2026</span>
                        <span>•</span>
                        <span>17 phút đọc</span>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-[var(--base-text-paragraph)] leading-relaxed mb-8">
                        Zalo Mini App và Website đều là công cụ quan trọng cho doanh nghiệp. Nhưng cái nào tốt hơn? Câu trả lời phụ thuộc vào mục tiêu, ngân sách, và đối tượng khách hàng. Bài viết này sẽ so sánh chi tiết để giúp bạn quyết định.
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Tổng quan: Zalo Mini App vs Website</h2>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📱 Zalo Mini App:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Định nghĩa:</strong> Ứng dụng con bên trong Zalo, chạy trên nền tảng Zalo</li>
                            <li>• <strong>Người dùng:</strong> Khách hàng Zalo (hơn 75 triệu người Việt Nam)</li>
                            <li>• <strong>Tính năng:</strong> Đặt hàng, thanh toán, tích điểm, ZNS, ZaloPay</li>
                            <li>• <strong>Chi phí:</strong> 3-15 triệu phát triển, phí giao dịch 1.1-2.5%</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-blue-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">🌐 Website:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Định nghĩa:</strong> Trang web chạy trên trình duyệt, truy cập qua URL</li>
                            <li>• <strong>Người dùng:</strong> Bất kỳ người dùng internet</li>
                            <li>• <strong>Tính năng:</strong> Đặt hàng, thanh toán, SEO, blog, contact</li>
                            <li>• <strong>Chi phí:</strong> 10-50 triệu phát triển, phí hosting/domain 500k-2 triệu/năm</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">So sánh chi tiết</h2>

                    <div className="overflow-x-auto mb-8">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-[var(--greyscale-50)]">
                                    <th className="border border-[var(--greyscale-200)] p-3 text-left font-bold">Tiêu chí</th>
                                    <th className="border border-[var(--greyscale-200)] p-3 text-left font-bold">Zalo Mini App</th>
                                    <th className="border border-[var(--greyscale-200)] p-3 text-left font-bold">Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3 font-bold">Truy cập</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Trên Zalo (1 click)</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Trên trình duyệt (gõ URL hoặc search)</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3 font-bold">Tải ứng dụng</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Không cần (đã có Zalo)</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Không cần</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3 font-bold">Chi phí phát triển</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">3-15 triệu</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">10-50 triệu</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3 font-bold">Chi phí duy trì</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">500k-2 triệu/tháng (nếu cần)</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">500k-2 triệu/năm (hosting + domain)</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3 font-bold">Tỷ lệ chuyển đổi</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">3-5% (khách hàng Zalo)</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">1-2% (traffic tự nhiên)</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3 font-bold">SEO</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Không hỗ trợ SEO</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Hỗ trợ SEO tốt</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3 font-bold">Traffic</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Từ Zalo OA, ZNS, mạng xã hội</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Từ SEO, quảng cáo, mạng xã hội</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3 font-bold">Thanh toán</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">ZaloPay, thẻ (1.1-2.5%)</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Nhiều cổng thanh toán (2-3%)</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3 font-bold">Thông báo</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">ZNS (tỷ lệ mở 90%)</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Email (tỷ lệ mở 20%)</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3 font-bold">Khách hàng</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Khách hàng Zalo (75 triệu người Việt)</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">Bất kỳ người dùng internet</td>
                                </tr>
                                <tr>
                                    <td className="border border-[var(--greyscale-200)] p-3 font-bold">Thời gian phát triển</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">2-4 tuần</td>
                                    <td className="border border-[var(--greyscale-200)] p-3">4-8 tuần</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Ưu điểm và nhược điểm</h2>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">✅ Zalo Mini App - Ưu điểm:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Truy cập nhanh:</strong> 1 click trên Zalo</li>
                            <li>• <strong>Không cần tải:</strong> Đã có Zalo trên điện thoại</li>
                            <li>• <strong>Chi phí thấp:</strong> 3-15 triệu phát triển</li>
                            <li>• <strong>Conversion cao:</strong> 3-5% (do khách hàng quen thuộc Zalo)</li>
                            <li>• <strong>ZNS:</strong> Tỷ lệ mở 90%, giữ liên hệ tốt</li>
                            <li>• <strong>ZaloPay:</strong> Thanh toán nhanh, phí thấp</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-red-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">❌ Zalo Mini App - Nhược điểm:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Không SEO:</strong> Không có traffic từ Google</li>
                            <li>• <strong>Phụ thuộc Zalo:</strong> Nếu Zalo thay đổi chính sách, ảnh hưởng lớn</li>
                            <li>• <strong>Giới hạn tính năng:</strong> Không thể làm mọi thứ như website</li>
                            <li>• <strong>Khách hàng không có Zalo:</strong> Không tiếp cận được</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-blue-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">✅ Website - Ưu điểm:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>SEO:</strong> Có traffic từ Google, Bing</li>
                            <li>• <strong>Độc lập:</strong> Không phụ thuộc nền tảng nào</li>
                            <li>• <strong>Flexible:</strong> Có thể làm mọi thứ (blog, shop, forum, v.v.)</li>
                            <li>• <strong>Tất cả khách hàng:</strong> Bất kỳ ai có internet</li>
                            <li>• <strong>Tuyệt đối:</strong> Có thể scale, mở rộng không giới hạn</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-orange-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">❌ Website - Nhược điểm:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Chi phí cao:</strong> 10-50 triệu phát triển</li>
                            <li>• <strong>SEO mất thời gian:</strong> Cần 3-6 tháng để có traffic</li>
                            <li>• <strong>Conversion thấp:</strong> 1-2% traffic tự nhiên</li>
                            <li>• <strong>Thông báo khó:</strong> Email tỷ lệ mở thấp (20%)</li>
                            <li>• <strong>Thanh toán:</strong> Cần tích hợp nhiều cổng</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Khi nào nên dùng Zalo Mini App?</h2>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">🎯 Dùng Zalo Mini App khi:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Khách hàng chủ yếu trên Zalo:</strong> Bán hàng F&B, khách sạn, spa, dịch vụ</li>
                            <li>• <strong>Ngân sách hạn chế:</strong> 3-15 triệu phát triển</li>
                            <li>• <strong>Cần kết nối offline-online:</strong> QR Code, ZNS</li>
                            <li>• <strong>Cần giữ liên hệ:</strong> ZNS, loyalty, voucher</li>
                            <li>• <strong>Conversion quan trọng:</strong> Đặt hàng, đặt bàn, đặt phòng</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 Case Study: Nhà hàng A</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Loại:</strong> Nhà hàng, khách hàng chủ yếu Zalo</li>
                            <li>• <strong>Chọn:</strong> Zalo Mini App (không làm website)</li>
                            <li>• <strong>Kết quả:</strong> Đơn hàng tăng 200%, chi phí 5 triệu</li>
                            <li>• <strong>ROI:</strong> 1000% (50 triệu doanh thu/tháng)</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Khi nào nên dùng Website?</h2>

                    <div className="bg-[var(--palette-blue-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">🎯 Dùng Website khi:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Cần SEO:</strong> Muốn traffic từ Google</li>
                            <li>• <strong>Khách hàng không phải Zalo:</strong> Khách quốc tế, khách hàng Google</li>
                            <li>• <strong>Nội dung phức tạp:</strong> Blog, forum, tài liệu, v.v.</li>
                            <li>• <strong>Ngân sách đủ:</strong> 10-50 triệu phát triển</li>
                            <li>• <strong>Tầm nhìn dài hạn:</strong> Muốn build brand độc lập</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-purple-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 Case Study: E-commerce B</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Loại:</strong> E-commerce, khách hàng đa kênh</li>
                            <li>• <strong>Chọn:</strong> Website + Mini App (cả hai)</li>
                            <li>• <strong>Kết quả:</strong> Website SEO (30% traffic), Mini App (70% đơn hàng)</li>
                            <li>• <strong>ROI:</strong> Website 200%, Mini App 500%</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Khi nào nên dùng cả hai?</h2>

                    <div className="bg-[var(--palette-orange-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">🎯 Dùng cả hai khi:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Ngân sách đủ:</strong> 15-65 triệu (Mini App + Website)</li>
                            <li>• <strong>Khách hàng đa kênh:</strong> Có cả Zalo và không Zalo</li>
                            <li>• <strong>Cần SEO và conversion:</strong> Website cho SEO, Mini App cho conversion</li>
                            <li>• <strong>Tầm nhìn dài hạn:</strong> Build brand, scale</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Chi phí và ROI</h2>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">💰 Chi phí phát triển:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Zalo Mini App đơn giản:</strong> 3-5 triệu</li>
                            <li>• <strong>Zalo Mini App phức tạp:</strong> 8-15 triệu</li>
                            <li>• <strong>Website đơn giản:</strong> 10-20 triệu</li>
                            <li>• <strong>Website phức tạp:</strong> 30-50 triệu</li>
                            <li>• <strong>Cả hai:</strong> 15-65 triệu</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">💰 ROI thực tế:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Zalo Mini App:</strong> ROI 500-1000% (2-6 tháng thu hồi)</li>
                            <li>• <strong>Website:</strong> ROI 200-400% (6-12 tháng thu hồi)</li>
                            <li>• <strong>Cả hai:</strong> ROI 700-1400% (tùy chiến lược)</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Tổng kết</h2>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Zalo Mini App và Website đều có ưu nhược điểm riêng. Mini App tốt cho conversion, ZNS, và khách hàng Zalo. Website tốt cho SEO, nội dung, và khách hàng đa kênh.
                    </p>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        <strong className="text-[var(--greyscale-900)]">Lời khuyên:</strong>
                    </p>

                    <ul className="space-y-2 text-[var(--base-text-paragraph)] mb-6">
                        <li>• <strong>Ngân sách dưới 10 triệu:</strong> Chọn Zalo Mini App</li>
                        <li>• <strong>Ngân sách 10-30 triệu:</strong> Chọn Mini App (ưu tiên conversion) hoặc Website (nếu cần SEO)</li>
                        <li>• <strong>Ngân sách trên 30 triệu:</strong> Làm cả hai (Website + Mini App)</li>
                        <li>• <strong>Khách hàng chủ yếu Zalo:</strong> Ưu tiên Mini App</li>
                        <li>• <strong>Khách hàng đa kênh:</strong> Làm cả hai</li>
                    </ul>

                    <div className="bg-gradient-to-r from-[var(--primary-50)] to-transparent p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            Chọn Zalo Mini App hay Website?
                        </h3>
                        <p className="text-[var(--base-text-paragraph)] mb-6">
                            Liên hệ Zimo ngay để được tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn.
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
