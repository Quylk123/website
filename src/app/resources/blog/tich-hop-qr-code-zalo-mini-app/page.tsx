import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tích hợp QR Code vào Zalo Mini App - Hướng dẫn chi tiết 2026",
    description: "Hướng dẫn tích hợp QR Code vào Zalo Mini App: cách tạo, đặt QR Code, theo dõi quét, và tối ưu conversion. Tăng 40% traffic từ offline.",
    keywords: "QR Code Zalo Mini App, tích hợp QR Code, tạo QR Code Zalo, hướng dẫn QR Code Mini App, quét QR Code Zalo",
    alternates: {
        canonical: "https://zimo.vn/resources/blog/tich-hop-qr-code-zalo-mini-app",
    },
    openGraph: {
        title: "Tích hợp QR Code vào Zalo Mini App - Hướng dẫn chi tiết 2026",
        description: "Hướng dẫn tích hợp QR Code vào Zalo Mini App: cách tạo, đặt QR Code, theo dõi quét, và tối ưu conversion. Tăng 40% traffic từ offline.",
        type: "article",
        url: "https://zimo.vn/resources/blog/tich-hop-qr-code-zalo-mini-app",
    },
};

export default function BlogPostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Tích hợp QR Code vào Zalo Mini App - Hướng dẫn chi tiết 2026",
        "description": "Hướng dẫn tích hợp QR Code vào Zalo Mini App: cách tạo, đặt QR Code, theo dõi quét, và tối ưu conversion. Tăng 40% traffic từ offline.",
        "image": "https://zimo.vn/images/blog/qr-code-zalo-mini-app.jpg",
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
            "id": "https://zimo.vn/resources/blog/tich-hop-qr-code-zalo-mini-app"
        },
        "keywords": "QR Code Zalo Mini App, tích hợp QR Code",
        "articleSection": "Hướng dẫn",
        "wordCount": 2200
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
                        Tích hợp QR Code vào Zalo Mini App - Hướng dẫn chi tiết 2026
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-[var(--greyscale-500)]">
                        <span className="bg-[var(--palette-blue-badge-bg)] text-[var(--palette-blue-text)] px-3 py-1 rounded-full text-sm font-medium">
                            Hướng dẫn
                        </span>
                        <span>•</span>
                        <span>10/02/2026</span>
                        <span>•</span>
                        <span>12 phút đọc</span>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-[var(--base-text-paragraph)] leading-relaxed mb-8">
                        QR Code là cầu nối quan trọng giữa offline và online cho Zalo Mini App. Bài viết này sẽ hướng dẫn chi tiết cách tích hợp QR Code, tối ưu quét, và tăng conversion từ offline lên 40%.
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Tại sao cần QR Code cho Zalo Mini App?</h2>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">🎯 Lợi ích của QR Code:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Tăng traffic từ offline:</strong> Khách hàng quét QR Code tại cửa hàng → vào Mini App</li>
                            <li>• <strong>Giảm friction:</strong> Không cần gõ URL, chỉ quét là vào ngay</li>
                            <li>• <strong>Tăng conversion:</strong> 40% khách hàng offline sẽ quét QR Code nếu có incentive</li>
                            <li>• <strong>Theo dõi dữ liệu:</strong> Biết được bao nhiêu lượt quét, từ đâu</li>
                            <li>• <strong>Thương hiệu:</strong> QR Code có thể có logo doanh nghiệp</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 Case Study: Nhà hàng A</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Trước:</strong> Không có QR Code, 0 traffic từ offline</li>
                            <li>• <strong>Sau:</strong> Đặt QR Code tại bàn, tặng voucher 10%</li>
                            <li>• <strong>Kết quả:</strong> 500 lượt quét/tháng, 150 đơn hàng (30% conversion)</li>
                            <li>• <strong>ROI:</strong> Chi phí in QR Code = 500K, doanh thu bổ sung = 15 triệu</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Cách tạo QR Code cho Zalo Mini App</h2>

                    <div className="bg-[var(--palette-blue-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📝 Phương pháp 1: Tạo qua Zalo OA Dashboard (Miễn phí)</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• Đăng nhập vào Zalo OA Dashboard</li>
                            <li>• Chọn "Mini App" → "QR Code"</li>
                            <li>• Chọn Mini App muốn tạo QR Code</li>
                            <li>• Download QR Code (PNG/JPG)</li>
                            <li>• <strong>Ưu điểm:</strong> Miễn phí, chính thức từ Zalo</li>
                            <li>• <strong>Nhược điểm:</strong> Không tùy biến được nhiều</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-purple-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📝 Phương pháp 2: Tạo qua công cụ bên ngoài (Tùy biến cao)</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• Dùng QR Code Generator: <a href="https://www.qrcode-generator.com" className="text-[var(--base-primary)] underline">QRCode-Generator.com</a></li>
                            <li>• Nhập URL Mini App: <code>https://zalo.me/s/[mini-app-id]</code></li>
                            <li>• Tùy biến: màu, logo, kích thước</li>
                            <li>• Download và in ấn</li>
                            <li>• <strong>Ưu điểm:</strong> Tùy biến cao, có logo thương hiệu</li>
                            <li>• <strong>Nhược điểm:</strong> Có thể mất phí, không theo dõi được</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-orange-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📝 Phương pháp 3: Tạo QR Code động (Theo dõi được)</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• Dùng dịch vụ: <a href="https://www.qrcode-tiger.com" className="text-[var(--base-primary)] underline">QR Code Tiger</a>, <a href="https://www.bitly.com" className="text-[var(--base-primary)] underline">Bitly</a></li>
                            <li>• Tạo short link trỏ đến Mini App</li>
                            <li>• Tạo QR Code từ short link</li>
                            <li>• Theo dõi: số lượt quét, vị trí, thiết bị</li>
                            <li>• <strong>Ưu điểm:</strong> Theo dõi dữ liệu, có thể thay đổi URL sau này</li>
                            <li>• <strong>Nhược điểm:</strong> Có phí, phụ thuộc bên thứ 3</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Cách đặt QR Code hiệu quả</h2>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📍 Vị trí đặt QR Code:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Nhà hàng/Cafe:</strong> Trên bàn, menu, bill</li>
                            <li>• <strong>Cửa hàng bán lẻ:</strong> Kệ sản phẩm, quầy thu ngân, cửa ra vào</li>
                            <li>• <strong>Khách sạn:</strong> Phòng, lễ tân, thang máy</li>
                            <li>• <strong>Spa/Thẩm mỹ viện:</strong> Phòng chờ, phòng trị liệu, quầy lễ tân</li>
                            <li>• <strong>Buồng:</strong> Túi đựng, sản phẩm, hóa đơn</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">💡 Mẹo để tăng lượt quét:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Call-to-action rõ ràng:</strong> "Quét để nhận voucher 10%", "Quét để xem menu"</li>
                            <li>• <strong>Kích thước đủ lớn:</strong> Tối thiểu 2cm x 2cm</li>
                            <li>• <strong>Vị trí dễ thấy:</strong> Ngang tầm mắt, không bị che khuất</li>
                            <li>• <strong>Đa kênh:</strong> Đặt QR Code ở nhiều vị trí khác nhau</li>
                            <li>• <strong>In chất lượng cao:</strong> Tránh mờ, nứt, nhăn</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Tích hợp incentive để tăng conversion</h2>

                    <div className="bg-[var(--palette-red-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">🎁 Các loại incentive hiệu quả:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Voucher giảm giá:</strong> Quét → nhận 10-20% giảm giá</li>
                            <li>• <strong>Tích điểm:</strong> Quét → tích 5 điểm</li>
                            <li>• <strong>Quà tặng:</strong> Quét → nhận đồ uống miễn phí, món ăn kèm</li>
                            <li>• <strong>Ưu tiên:</strong> Quét → không cần xếp hàng</li>
                            <li>• <strong>Thông tin:</strong> Quét → xem menu, xem sản phẩm</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-blue-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 Case Study: Cafe B</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Chiến dịch:</strong> "Quét QR Code để nhận voucher 15%"</li>
                            <li>• <strong>Đặt QR Code:</strong> Trên bàn, menu, cửa</li>
                            <li>• <strong>Kết quả:</strong> 800 lượt quét/tháng, 320 voucher được dùng (40%)</li>
                            <li>• <strong>Doanh thu:</strong> Tăng <strong>25%</strong> so với tháng trước</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Theo dõi hiệu quả QR Code</h2>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📈 Các chỉ số cần theo dõi:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Số lượt quét:</strong> Bao nhiêu người đã quét QR Code</li>
                            <li>• <strong>Tỷ lệ conversion:</strong> (Số đơn hàng / Số lượt quết) x 100%</li>
                            <li>• <strong>Vị trí:</strong> QR Code ở vị trí nào có nhiều lượt quét nhất</li>
                            <li>• <strong>Thời gian:</strong> QR Code nào hiệu quả vào giờ nào</li>
                            <li>• <strong>Thiết bị:</strong> iOS hay Android quét nhiều hơn</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-orange-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">🔧 Công cụ theo dõi:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>QR Code Generator (phí):</strong> Theo dõi chi tiết, có dashboard</li>
                            <li>• <strong>Google Analytics:</strong> Nếu dùng short link đến Mini App</li>
                            <li>• <strong>Zalo OA Analytics:</strong> Xem traffic từ offline (hạn chế)</li>
                            <li>• <strong>Custom tracking:</strong> Thêm UTM parameters vào URL</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Mẹo và tối ưu QR Code</h2>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">✅ Lưu ý quan trọng:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Test QR Code trước khi in:</strong> Quét thử nhiều thiết bị</li>
                            <li>• <strong>Không thay đổi URL:</strong> Nếu dùng QR Code tĩnh, không thay đổi URL</li>
                            <li>• <strong>Đặt nhiều QR Code:</strong> A/B test vị trí và incentive</li>
                            <li>• <strong>Cập nhật thường xuyên:</strong> Thay đổi incentive theo mùa/chiến dịch</li>
                            <li>• <strong>Kết hợp ZNS:</strong> Gửi ZNS nhắc khách quét QR Code</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-purple-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">⚠️ Lỗi thường gặp:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>QR Code mờ:</strong> In chất lượng kém</li>
                            <li>• <strong>Call-to-action không rõ:</strong> Khách hàng không biết quét để làm gì</li>
                            <li>• <strong>Incentive không hấp dẫn:</strong> Khách hàng không có động lực quét</li>
                            <li>• <strong>Vị trí không phù hợp:</strong> Đặt ở nơi khó quét</li>
                            <li>• <strong>Không test:</strong> QR Code không hoạt động khi in</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Tổng kết</h2>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        QR Code là công cụ quan trọng để kết nối offline và online cho Zalo Mini App. Nếu tích hợp đúng, có thể tăng 40% traffic từ offline và 30% conversion.
                    </p>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        <strong className="text-[var(--greyscale-900)]">Lời khuyên:</strong> Bắt đầu với QR Code tĩnh từ Zalo OA (miễn phí), đặt ở nhiều vị trí khác nhau, A/B test incentive. Sau khi có kết quả, nâng cấp lên QR Code động để theo dõi chi tiết hơn.
                    </p>

                    <div className="bg-gradient-to-r from-[var(--primary-50)] to-transparent p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            Sẵn Sàng Tích Hợp QR Code Cho Mini App?
                        </h3>
                        <p className="text-[var(--base-text-paragraph)] mb-6">
                            Liên hệ Zimo ngay để được hỗ trợ tích hợp QR Code và tối ưu conversion cho Mini App của bạn.
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
