import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cách Triển Khai Mini App Khách Sạn Hiệu Quả - Hướng Dẫn Chi Tiết | Zimo",
    description: "Hướng dẫn triển khai Mini App Khách Sạn từ A-Z: Đăng ký Zalo OA, thiết kế giao diện, tích hợp PMS và chạy thử nghiệm. Tăng 200% tỷ lệ đặt phòng.",
    keywords: "mini app khách sạn, triển khai zalo mini app, hướng dẫn mini app khách sạn, zalo oa khách sạn",
    alternates: {
        canonical: "https://zimo.vn/resources/blog/cach-trien-khai-mini-app-khach-san-hieu-qua",
    },
    openGraph: {
        title: "Cách Triển Khai Mini App Khách Sạn Hiệu Quả - Hướng Dẫn Chi Tiết",
        description: "Hướng dẫn triển khai Mini App Khách Sạn từ A-Z: Đăng ký Zalo OA, thiết kế, tích hợp PMS. Tăng 200% tỷ lệ đặt phòng.",
        type: "article",
        url: "https://zimo.vn/resources/blog/cach-trien-khai-mini-app-khach-san-hieu-qua",
    },
};

export default function BlogPostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Cách Triển Khai Mini App Khách Sạn Hiệu Quả - Hướng Dẫn Chi Tiết",
        "description": "Hướng dẫn triển khai Mini App Khách Sạn từ A-Z: Đăng ký Zalo OA, thiết kế giao diện, tích hợp PMS và chạy thử nghiệm. Tăng 200% tỷ lệ đặt phòng.",
        "image": "https://zimo.vn/images/blog/mini-app-deployment.jpg",
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
        "datePublished": "2026-02-04",
        "dateModified": "2026-02-04",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://zimo.vn/resources/blog/cach-trien-khai-mini-app-khach-san-hieu-qua"
        },
        "keywords": "mini app khách sạn, triển khai zalo mini app, hướng dẫn mini app khách sạn, zalo oa khách sạn",
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
                            Cách Triển Khai Mini App Khách Sạn Hiệu Quả - Hướng Dẫn Chi Tiết
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-[var(--greyscale-500)]">
                            <span className="bg-[var(--palette-blue-badge-bg)] text-[var(--palette-blue-text)] px-3 py-1 rounded-full text-sm font-medium">
                                Hướng dẫn
                            </span>
                            <span>•</span>
                            <span>04/02/2026</span>
                            <span>•</span>
                            <span>10 phút đọc</span>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="container mx-auto px-4 py-12 max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-[var(--base-text-paragraph)] leading-relaxed mb-8">
                            <strong className="text-[var(--greyscale-900)]">Mini App Khách Sạn</strong> đang trở thành xu hướng tất yếu trong ngành lưu trú. Nhưng làm thế nào để triển khai hiệu quả? Bài này sẽ hướng dẫn bạn từ A-Z với kinh nghiệm thực tế từ 50+ khách sạn.
                        </p>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Tại Sao Cần Triển Khai Mini App Khách Sạn?</h2>
                        <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                            Trước khi đi vào chi tiết, hãy hiểu tại sao <strong className="text-[var(--greyscale-900)]">Mini App Khách Sạn</strong> lại quan trọng:
                        </p>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)] mb-6">
                            <li>📱 <strong>76 triệu người dùng Zalo</strong> — Khách hàng của bạn đang ở đây</li>
                            <li>⚡ <strong>Triển khai nhanh (3-7 ngày)</strong> — Không chờ đợi 3-6 tháng như app truyền thống</li>
                            <li>💰 <strong>Chi phí chỉ bằng 10%</strong> — Tiết kiệm 90% so với phát triển app riêng</li>
                            <li>🚀 <strong>Tăng 200% tỷ lệ đặt phòng</strong> — Theo nghiên cứu nội bộ Zimo</li>
                        </ul>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Bước 1: Đăng Ký Zalo OA (Official Account)</h2>
                        <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                            Bước đầu tiên và quan trọng nhất: Tạo <strong className="text-[var(--greyscale-900)]">Zalo OA</strong> cho khách sạn của bạn.
                        </p>

                        <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">1.1. Cách Đăng Ký Zalo OA</h3>
                        <ol className="space-y-4 text-[var(--base-text-paragraph)] mb-6">
                            <li>
                                <strong>1. Truy cập</strong>
                                <p className="ml-6 text-[var(--greyscale-500)]">Vào <a href="https://oa.zalo.me" className="text-[var(--base-primary)] hover:underline">oa.zalo.me</a> và đăng ký tài khoản doanh nghiệp</p>
                            </li>
                            <li>
                                <strong>2. Chuẩn bị hồ sơ</strong>
                                <p className="ml-6 text-[var(--greyscale-500)]">Giấy phép kinh doanh, CMND người đại diện, thông tin doanh nghiệp</p>
                            </li>
                            <li>
                                <strong>3. Chọn loại OA</strong>
                                <p className="ml-6 text-[var(--greyscale-500)]">Chọn "OA Doanh Nghiệp" (có tính năng mở rộng hơn OA Cá nhân)</p>
                            </li>
                            <li>
                                <strong>4. Xác minh</strong>
                                <p className="ml-6 text-[var(--greyscale-500)]">Xác minh qua Zalo hoặc gửi hồ sơ giấy tờ (thường mất 1-3 ngày)</p>
                            </li>
                        </ol>

                        <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                            <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">💡 Mẹo: Tăng Tỷ Lệ Duyệt OA</h3>
                            <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                                <li>✅ Điền đầy đủ, chính xác thông tin doanh nghiệp</li>
                                <li>✅ Upload logo chất lượng cao (trên 300x300px)</li>
                                <li>✅ Giấy phép kinh doanh còn hiệu lực</li>
                                <li>✅ Có website hoặc Fanpage liên kết</li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Bước 2: Lên Ý Tưởng Cho Mini App Khách Sạn</h2>
                        <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                            Mini App Khách Sạn của bạn cần những tính năng gì? Đây là câu hỏi quan trọng trước khi bắt đầu phát triển.
                        </p>

                        <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">2.1. Tính Năng Cần Thiết Cho Khách Sạn</h3>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[var(--greyscale-50)]">
                                        <th className="border border-[var(--greyscale-200)] p-3 text-left font-bold">Tính năng</th>
                                        <th className="border border-[var(--greyscale-200)] p-3 text-left font-bold">Mô tả</th>
                                        <th className="border border-[var(--greyscale-200)] p-3 text-left font-bold">Độ ưu tiên</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-[var(--greyscale-200)] p-3 font-bold">Đặt phòng</td>
                                        <td className="border border-[var(--greyscale-200)] p-3">Khách tự đặt phòng qua Mini App</td>
                                        <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">Cao</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[var(--greyscale-200)] p-3 font-bold">Check-in/out</td>
                                        <td className="border border-[var(--greyscale-200)] p-3">Nhân viên thao tác trên di động</td>
                                        <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">Cao</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[var(--greyscale-200)] p-3 font-bold">Tích điểm</td>
                                        <td className="border border-[var(--greyscale-200)] p-3">Hệ thống loyalty cho khách quen</td>
                                        <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">Cao</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[var(--greyscale-200)] p-3 font-bold">Sơ đồ phòng</td>
                                        <td className="border border-[var(--greyscale-200)] p-3">Visual room plan để xếp phòng</td>
                                        <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)]">Cao</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[var(--greyscale-200)] p-3 font-bold">ZNS tự động</td>
                                        <td className="border border-[var(--greyscale-200)] p-3">Gửi tin nhắn nhắc đặt phòng</td>
                                        <td className="border border-[var(--greyscale-200)] p-3">Trung bình</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[var(--greyscale-200)] p-3 font-bold">Minibar/Dịch vụ</td>
                                        <td className="border border-[var(--greyscale-200)] p-3">Khách đặt dịch vụ từ phòng</td>
                                        <td className="border border-[var(--greyscale-200)] p-3">Trung bình</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Bước 3: Tìm Đối Tác Phát Triển Mini App</h2>
                        <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                            Bạn có thể tự lập trình hoặc thuê đối tác chuyên nghiệp. Với <strong className="text-[var(--greyscale-900)]">Mini App Khách Sạn</strong>, mình khuyên:
                        </p>

                        <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">3.1. Tự Lập Trình vs Thuê Đối Tác</h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="p-6 bg-[var(--greyscale-0)] rounded-xl border border-[var(--greyscale-200)]">
                                <h4 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">👨‍💻 Tự Lập Trình</h4>
                                <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                                    <li>✅ Đa dạng custom theo ý muốn</li>
                                    <li>✅ Không phụ thuộc vào đối tác</li>
                                    <li>❌ Cần kiến thức kỹ thuật</li>
                                    <li>❌ Tốn thời gian (2-3 tháng)</li>
                                    <li>❌ Duy trì, bug fix tự làm</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-[var(--primary-50)] rounded-xl border border-[var(--primary-100)]">
                                <h4 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">🤝 Thuê Đối Tác</h4>
                                <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                                    <li>✅ Triển khai nhanh (3-7 ngày)</li>
                                    <li>✅ Kinh nghiệm thực tế với khách sạn</li>
                                    <li>✅ Hỗ trợ kỹ thuật chuyên nghiệp</li>
                                    <li>❌ Chi phí cao hơn (10-50 triệu)</li>
                                    <li>❌ Phụ thuộc vào đối tác</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-[var(--palette-yellow-badge-bg)] p-6 rounded-2xl mb-8">
                            <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">💡 Lời Khuyên Của Zimo</h3>
                            <p className="text-[var(--base-text-paragraph)] mb-4">
                                Với khách sạn SME, <strong className="text-[var(--greyscale-900)]">thuê đối tác có kinh nghiệm</strong> là lựa chọn tối ưu:
                            </p>
                            <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                                <li>✅ Tiết kiệm 3-6 tháng thời gian phát triển</li>
                                <li>✅ Học từ sai lầm của 50+ khách sạn khác</li>
                                <li>✅ Được hỗ trợ khi có vấn đề</li>
                                <li>✅ Kho giao diện mẫu có sẵn, triển khai ngay</li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Bước 4: Thiết Kế & Phát Triển Mini App</h2>
                        <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                            Sau khi chọn đối tác, quá trình phát triển <strong className="text-[var(--greyscale-900)]">Mini App Khách Sạn</strong> thường gồm:
                        </p>

                        <ol className="space-y-4 text-[var(--base-text-paragraph)] mb-6">
                            <li>
                                <strong>1. Wireframe & Design (1-2 ngày)</strong>
                                <p className="ml-6 text-[var(--greyscale-500)]">Vẽ sơ đồ luồng người dùng, thiết kế giao diện theo brand của khách sạn</p>
                            </li>
                            <li>
                                <strong>2. Lập trình (2-5 ngày)</strong>
                                <p className="ml-6 text-[var(--greyscale-500)]">Xây dựng backend, frontend, tích hợp Zalo OA</p>
                            </li>
                            <li>
                                <strong>3. Tích hợp PMS/POS (1-2 ngày)</strong>
                                <p className="ml-6 text-[var(--greyscale-500)]">Kết nối với hệ thống quản lý hiện có (nếu có)</p>
                            </li>
                            <li>
                                <strong>4. Testing (1-2 ngày)</strong>
                                <p className="ml-6 text-[var(--greyscale-500)]">Test trên các thiết bị, fix bug, tối ưu performance</p>
                            </li>
                            <li>
                                <strong>5. Deploy & Training (1 ngày)</strong>
                                <p className="ml-6 text-[var(--greyscale-500)]">Deploy lên Zalo, training cho nhân viên khách sạn</p>
                            </li>
                        </ol>

                        <div className="bg-[var(--palette-blue-badge-bg)] p-6 rounded-2xl mb-8">
                            <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 Timeline Triển Khai Mini App Khách Sạn</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-24 font-bold text-[var(--base-primary)]">Ngày 1-2</div>
                                    <div className="flex-1 p-3 bg-[var(--greyscale-0)] rounded-lg">Wireframe & Design</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-24 font-bold text-[var(--base-primary)]">Ngày 3-7</div>
                                    <div className="flex-1 p-3 bg-[var(--greyscale-0)] rounded-lg">Lập trình & Tích hợp</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-24 font-bold text-[var(--base-primary)]">Ngày 7-8</div>
                                    <div className="flex-1 p-3 bg-[var(--greyscale-0)] rounded-lg">Testing & Fix bug</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-24 font-bold text-[var(--base-primary)]">Ngày 9-10</div>
                                    <div className="flex-1 p-3 bg-[var(--primary-50)] rounded-lg border border-[var(--primary-100)] font-bold">Deploy & Training</div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Bước 5: Chạy Thử Nghiệm & Tối Ưu</h2>
                        <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                            Sau khi deploy, chưa chạy ngay vào quảng bá. Hãy chạy thử nghiệm với nhóm khách hàng nhỏ.
                        </p>

                        <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">5.1. Checklist Trước Khi Launch</h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[var(--base-primary)] text-white flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                <div>
                                    <h4 className="font-bold text-[var(--greyscale-900)]">Test trên đa thiết bị</h4>
                                    <p className="text-[var(--base-text-paragraph)]">iOS, Android, các phiên bản Zalo khác nhau</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[var(--base-primary)] text-white flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                <div>
                                    <h4 className="font-bold text-[var(--greyscale-900)]">Test flow đặt phòng</h4>
                                    <p className="text-[var(--base-text-paragraph)]">Đặt → Nhận xác nhận → Check-in → Check-out → Tích điểm</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[var(--base-primary)] text-white flex items-center justify-center flex-shrink-0 font-bold">3</div>
                                <div>
                                    <h4 className="font-bold text-[var(--greyscale-900)]">Test ZNS gửi tin nhắn</h4>
                                    <p className="text-[var(--base-text-paragraph)]">Xác nhận ZNS có gửi đúng, đúng thời điểm không</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[var(--base-primary)] text-white flex items-center justify-center flex-shrink-0 font-bold">4</div>
                                <div>
                                    <h4 className="font-bold text-[var(--greyscale-900)]">Test nhân viên</h4>
                                    <p className="text-[var(--base-text-paragraph)]">Training lễ tân, housekeeping, front desk</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Bước 6: Phát Hành & Quảng Bá Mini App</h2>
                        <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                            Khi mọi thứ đã OK, hãy quảng bá <strong className="text-[var(--greyscale-900)]">Mini App Khách Sạn</strong> đến khách hàng:
                        </p>

                        <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">6.1. Kênh Quảng Bá Hiệu Quả</h3>
                        <ul className="space-y-3 text-[var(--base-text-paragraph)] mb-6">
                            <li>📱 <strong>ZNS (Zalo Notification Service)</strong> — Gửi tin nhắn đến database khách hàng cũ</li>
                            <li>🏠 <strong>Quầy lễ tân</strong> — QR code đặt tại quầy, khách quét để download Mini App</li>
                            <li>🛎️ <strong>Trong phòng</strong> — Card hướng dẫn, menu tích hợp link Mini App</li>
                            <li>📢 <strong>Fanpage/Website</strong> — Button "Đặt phòng qua Zalo" hiển thị nổi bật</li>
                            <li>🎁 <strong>Khuyến mãi</strong> — Đặt qua Mini App được giảm giá 5-10%</li>
                        </ul>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Case Study: Khách Sạn X (40 phòng)</h2>
                        <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                            <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 Kết Quả Sau 3 Tháng Triển Khai Mini App</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold mb-3 text-[var(--greyscale-900)]">Trước Khi Deploy:</h4>
                                    <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                                        <li>• Tỷ lệ đặt phòng qua Zalo: 0%</li>
                                        <li>• Tỷ lệ đặt phòng qua website: 20%</li>
                                        <li>• Tỷ lệ đặt phòng qua điện thoại: 80%</li>
                                        <li>• Thời gian lễ tân xử lý 1 booking: 5 phút</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-3 text-[var(--greyscale-900)]">Sau 3 Tháng:</h4>
                                    <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                                        <li>• Tỷ lệ đặt phòng qua Zalo: <strong>55%</strong> ⬆️</li>
                                        <li>• Tỷ lệ đặt phòng qua website: <strong>35%</strong> ⬆️</li>
                                        <li>• Tỷ lệ đặt phòng qua điện thoại: <strong>10%</strong> ⬇️</li>
                                        <li>• Thời gian lễ tân xử lý 1 booking: <strong>30 giây</strong> ⬇️</li>
                                        <li>• Tỷ lệ khách quay lại: <strong>+40%</strong> (hệ thống tích điểm)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Kết Luận</h2>
                        <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-6">
                            Triển khai <strong className="text-[var(--greyscale-900)]">Mini App Khách Sạn</strong> không quá phức tạp nếu làm đúng cách. Với quy trình 6 bước trên, khách sạn của bạn có thể triển khai trong 7-10 ngày và bắt đầu thấy hiệu quả ngay lập tức.
                        </p>
                        <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-8">
                            Đừng để đối thủ vượt qua. Bắt đầu ngay hôm nay với Zimo — đối tác chuyên về <strong className="text-[var(--greyscale-900)]">Mini App Khách Sạn</strong> với kinh nghiệm triển khai 50+ khách sạn.
                        </p>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-[var(--primary-50)] to-transparent p-8 rounded-2xl text-center">
                            <h3 className="text-2xl font-bold mb-4">
                                Sẵn Sàng Triển Khai Mini App Khách Sạn?
                            </h3>
                            <p className="text-[var(--base-text-paragraph)] mb-6">
                                Nhận tư vấn miễn phí và báo giá triển khai trong 3-7 ngày.
                            </p>
                            <a
                                href="https://zalo.me/0899111195"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[var(--base-primary)] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all text-lg"
                            >
                                Nhận Tư Vấn Miễn Phí →
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
