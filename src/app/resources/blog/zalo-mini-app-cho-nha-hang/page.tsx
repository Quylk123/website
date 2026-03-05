import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Zalo Mini App cho nhà hàng - Tăng 200% đơn hàng 2026",
    description: "Hướng dẫn triển khai Zalo Mini App cho nhà hàng: đặt bàn, menu online, thanh toán, tích điểm. Tăng 200% đơn hàng trong 3 tháng.",
    keywords: "Zalo Mini App nhà hàng, đặt bàn Zalo, menu online nhà hàng, thanh toán nhà hàng Zalo, tích điểm nhà hàng",
    alternates: {
        canonical: "https://zimo.vn/resources/blog/zalo-mini-app-cho-nha-hang",
    },
    openGraph: {
        title: "Zalo Mini App cho nhà hàng - Tăng 200% đơn hàng 2026",
        description: "Hướng dẫn triển khai Zalo Mini App cho nhà hàng: đặt bàn, menu online, thanh toán, tích điểm. Tăng 200% đơn hàng trong 3 tháng.",
        type: "article",
        url: "https://zimo.vn/resources/blog/zalo-mini-app-cho-nha-hang",
    },
};

export default function BlogPostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Zalo Mini App cho nhà hàng - Tăng 200% đơn hàng 2026",
        "description": "Hướng dẫn triển khai Zalo Mini App cho nhà hàng: đặt bàn, menu online, thanh toán, tích điểm. Tăng 200% đơn hàng trong 3 tháng.",
        "image": "https://zimo.vn/images/blog/zalo-mini-app-restaurant.jpg",
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
            "id": "https://zimo.vn/resources/blog/zalo-mini-app-cho-nha-hang"
        },
        "keywords": "Zalo Mini App nhà hàng, đặt bàn Zalo",
        "articleSection": "Case Study",
        "wordCount": 2800
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
                        Zalo Mini App cho nhà hàng - Tăng 200% đơn hàng 2026
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-[var(--greyscale-500)]">
                        <span className="bg-[var(--palette-red-badge-bg)] text-[var(--palette-red-text)] px-3 py-1 rounded-full text-sm font-medium">
                            Case Study
                        </span>
                        <span>•</span>
                        <span>10/02/2026</span>
                        <span>•</span>
                        <span>15 phút đọc</span>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-[var(--base-text-paragraph)] leading-relaxed mb-8">
                        Zalo Mini App đang thay đổi cách nhà hàng kinh doanh tại Việt Nam. Đặt bàn online, menu không chạm, thanh toán nhanh, tích điểm — tất cả đều có thể trong một ứng dụng. Bài viết này sẽ hướng dẫn triển khai và chia sẻ case study thực tế.
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Tại sao nhà hàng cần Zalo Mini App?</h2>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">🎯 Lợi ích chính:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Tăng đơn hàng:</strong> Đặt bàn online, đặt món mang về</li>
                            <li>• <strong>Giảm chi phí:</strong> Không cần in menu, giảm nhân viên lễ tân</li>
                            <li>• <strong>Tăng trải nghiệm:</strong> Menu không chạm, thanh toán nhanh</li>
                            <li>• <strong>Giữ chân khách:</strong> Tích điểm, voucher, ZNS thông báo</li>
                            <li>• <strong>Dữ liệu khách hàng:</strong> Biết khách hàng thích món gì, đến lúc nào</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 So sánh với phương pháp truyền thống:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Đặt bàn điện thoại:</strong> Nhân viên bận, quên ghi chép</li>
                            <li>• <strong>Đặt bàn Mini App:</strong> Tự động, không bị quên</li>
                            <li>• <strong>Menu giấy:</strong> Cập nhật khó, in ấn tốn kém</li>
                            <li>• <strong>Menu online:</strong> Cập nhật tức thì, không cần in</li>
                            <li>• <strong>Thanh toán tiền mặt:</strong> Tiền lẻ, nhân viên đếm</li>
                            <li>• <strong>Thanh toán ZaloPay:</strong> Tự động, không sai sót</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Các tính năng Zalo Mini App cho nhà hàng</h2>

                    <div className="bg-[var(--palette-blue-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📱 Tính năng 1: Đặt bàn online</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Chọn bàn:</strong> Xem sơ đồ bàn, chọn bàn thích hợp</li>
                            <li>• <strong>Chọn thời gian:</strong> Chọn ngày giờ, số người</li>
                            <li>• <strong>Ghi chú đặc biệt:</strong> Yêu cầu chỗ ngồi riêng, cho trẻ em</li>
                            <li>• <strong>Xác nhận:</strong> Nhận ZNS xác nhận ngay lập tức</li>
                            <li>• <strong>Nhắc hẹn:</strong> ZNS nhắc 2 tiếng trước khi đến</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-purple-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📱 Tính năng 2: Menu online</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Menu không chạm:</strong> Quét QR Code trên bàn → xem menu trên điện thoại</li>
                            <li>• <strong>Hình ảnh món ăn:</strong> Món ăn có hình ảnh, mô tả chi tiết</li>
                            <li>• <strong>Lọc món ăn:</strong> Theo loại, theo giá, theo độ phổ biến</li>
                            <li>• <strong>Ghi chú món ăn:</strong> Yêu cầu không hành, ít đường, v.v.</li>
                            <li>• <strong>Cập nhật giá:</strong> Đổi giá tức thì, không cần in lại menu</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-orange-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📱 Tính năng 3: Đặt món mang về</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Chọn món:</strong> Chọn món ăn, số lượng, ghi chú</li>
                            <li>• <strong>Chọn thời gian lấy:</strong> Lấy ngay hoặc hẹn giờ</li>
                            <li>• <strong>Thanh toán trước:</strong> Thanh toán ZaloPay, QR Code</li>
                            <li>• <strong>Nhắc khi hoàn thành:</strong> ZNS thông báo khi món đã xong</li>
                            <li>• <strong>Tracking đơn:</strong> Xem tiến trình chế biến</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-red-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📱 Tính năng 4: Thanh toán nhanh</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>ZaloPay:</strong> Thanh toán qua ví ZaloPay</li>
                            <li>• <strong>QR Code:</strong> Quét mã QR để thanh toán</li>
                            <li>• <strong>Chia tiền:</strong> Chia tiền cho nhóm</li>
                            <li>• <strong>Hoàn tiền:</strong> Hoàn tiền tự động nếu hủy đơn</li>
                            <li>• <strong>Hóa đơn điện tử:</strong> Gửi hóa đơn qua ZNS</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📱 Tính năng 5: Tích điểm & Loyalty</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Tích điểm:</strong> 1 điểm cho mỗi 10.000đ chi tiêu</li>
                            <li>• <strong>Đổi điểm:</strong> Đổi lấy voucher, món ăn miễn phí</li>
                            <li>• <strong>Cấp bậc:</strong> Đồng, Vàng, Kim cương — ưu đãi khác nhau</li>
                            <li>• <strong>Nhắc tích điểm:</strong> ZNS nhắc khi sắp đạt cấp mới</li>
                            <li>• <strong>Giữ chân:</strong> Voucher cho khách hàng không quay lại 30 ngày</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Case Study: Nhà hàng Hải Sản A</h2>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 Bối cảnh:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Loại:</strong> Nhà hàng hải sản, 50 bàn</li>
                            <li>• <strong>Vấn đề:</strong> Nhân viên lễ tân bận, khách hàng chờ lâu, không biết menu</li>
                            <li>• <strong>Mục tiêu:</strong> Tăng đơn hàng, giảm chi phí nhân sự</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-blue-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">🔧 Giải pháp triển khai:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Đặt bàn online:</strong> Khách hàng đặt bàn qua Mini App</li>
                            <li>• <strong>Menu QR Code:</strong> Đặt QR Code trên từng bàn</li>
                            <li>• <strong>Đặt món mang về:</strong> Tạo đơn đặt món mang về</li>
                            <li>• <strong>Thanh toán ZaloPay:</strong> Tích hợp thanh toán</li>
                            <li>• <strong>Tích điểm:</strong> 1 điểm cho mỗi 20.000đ</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📈 Kết quả sau 3 tháng:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Đặt bàn online:</strong> Từ 0 lên 200 booking/tháng</li>
                            <li>• <strong>Đặt món mang về:</strong> Từ 10 lên 80 đơn/ngày (+700%)</li>
                            <li>• <strong>Đơn hàng tổng:</strong> Tăng <strong>200%</strong> so với trước</li>
                            <li>• <strong>Chi phí nhân sự:</strong> Giảm 30% (giảm 1 nhân viên lễ tân)</li>
                            <li>• <strong>Khách hàng quay lại:</strong> Tăng 50% nhờ tích điểm</li>
                            <li>• <strong>ROI:</strong> Chi phí Mini App 5 triệu, doanh thu bổ sung 50 triệu/tháng</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Case Study: Cafe B</h2>

                    <div className="bg-[var(--palette-purple-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 Bối cảnh:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Loại:</strong> Cafe, 20 bàn, chủ yếu khách take away</li>
                            <li>• <strong>Vấn đề:</strong> Khách hàng chờ lâu, nhân viên bận, mất khách</li>
                            <li>• <strong>Mục tiêu:</strong> Giảm thời gian chờ, tăng đơn hàng</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-orange-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">🔧 Giải pháp triển khai:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Đặt món trước:</strong> Khách đặt món qua Mini App, đến là nhận</li>
                            <li>• <strong>QR Code pickup:</strong> Khách hàng quét mã để nhận món</li>
                            <li>• <strong>Thanh toán trước:</strong> Thanh toán qua ZaloPay</li>
                            <li>• <strong>Tích điểm:</strong> 1 điểm cho mỗi 10.000đ</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-red-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📈 Kết quả sau 2 tháng:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Đặt món trước:</strong> Từ 0 lên 100 đơn/ngày</li>
                            <li>• <strong>Thời gian chờ:</strong> Từ 15 phút xuống 3 phút (-80%)</li>
                            <li>• <strong>Đơn hàng tổng:</strong> Tăng <strong>150%</strong> so với trước</li>
                            <li>• <strong>Khách hàng mới:</strong> Tăng 40% (khách đến qua Zalo OA)</li>
                            <li>• <strong>Chi phí nhân sự:</strong> Giảm 20%</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Quy trình triển khai Zalo Mini App cho nhà hàng</h2>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📝 Bước 1: Chuẩn bị</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• Đăng ký Zalo OA (nếu chưa có)</li>
                            <li>• Chuẩn bị menu, hình ảnh món ăn</li>
                            <li>• Xác định tính năng cần thiết: đặt bàn, đặt món, thanh toán, tích điểm</li>
                            <li>• Chuẩn bị ngân sách: 3-10 triệu tùy tính năng</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-blue-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📝 Bước 2: Phát triển</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• Thiết kế UI/UX phù hợp với thương hiệu nhà hàng</li>
                            <li>• Phát triển tính năng: đặt bàn, menu, đặt món, thanh toán, tích điểm</li>
                            <li>• Tích hợp ZaloPay, ZNS, QR Code</li>
                            <li>• Test kỹ càng với nhân viên và khách hàng</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-purple-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📝 Bước 3: Triển khai</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• Đặt QR Code trên bàn, menu, cửa ra vào</li>
                            <li>• Huấn luyện nhân viên sử dụng Mini App</li>
                            <li>• Quảng bá qua Zalo OA, ZNS, mạng xã hội</li>
                            <li>• Khuyến mãi: Giảm 10% khi đặt bàn qua Mini App</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-orange-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📝 Bước 4: Tối ưu</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• Theo dõi: số đặt bàn, đặt món, đơn hàng</li>
                            <li>• Nhận feedback từ khách hàng</li>
                            <li>• Cập nhật menu, giá cả thường xuyên</li>
                            <li>• Chạy ZNS khuyến mãi, nhắc tích điểm</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Chi phí và ROI</h2>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">💰 Chi phí triển khai:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Phát triển Mini App:</strong> 3-10 triệu (tùy tính năng)</li>
                            <li>• <strong>Tích hợp ZaloPay:</strong> Miễn phí</li>
                            <li>• <strong>Chi phí duy trì:</strong> 500k-1 triệu/tháng (nếu cần)</li>
                            <li>• <strong>Phí giao dịch:</strong> 1.1% (ZaloPay), 2.5% (thẻ)</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">💰 ROI thực tế:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Nhà hàng A:</strong> Chi phí 5 triệu, ROI 1000% (50 triệu doanh thu/tháng)</li>
                            <li>• <strong>Cafe B:</strong> Chi phí 3 triệu, ROI 600% (18 triệu doanh thu/tháng)</li>
                            <li>• <strong>Thời gian thu hồi:</strong> 1-2 tháng</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Tổng kết</h2>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Zalo Mini App là công cụ mạnh mẽ cho nhà hàng, giúp tăng đơn hàng, giảm chi phí, và cải thiện trải nghiệm khách hàng. Case study thực tế cho thấy ROI 600-1000% trong 2-3 tháng.
                    </p>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        <strong className="text-[var(--greyscale-900)]">Lời khuyên:</strong> Bắt đầu với tính năng đơn giản (đặt bàn, menu online), sau đó mở rộng sang đặt món mang về, thanh toán, tích điểm. Khuyến mãi khi sử dụng Mini App để thúc đẩy khách hàng dùng thử.
                    </p>

                    <div className="bg-gradient-to-r from-[var(--primary-50)] to-transparent p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            Sẵn Sàng Triển Khai Mini App Cho Nhà Hàng?
                        </h3>
                        <p className="text-[var(--base-text-paragraph)] mb-6">
                            Liên hệ Zimo ngay để được tư vấn và triển khai Mini App cho nhà hàng của bạn.
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
