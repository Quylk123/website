import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tích hợp ZaloPay vào Zalo Mini App - Hướng dẫn chi tiết 2026",
    description: "Hướng dẫn tích hợp ZaloPay vào Zalo Mini App: cách tích hợp, phí giao dịch, quy trình thanh toán, và tối ưu conversion. Tăng 50% tỷ lệ thanh toán.",
    keywords: "ZaloPay Zalo Mini App, tích hợp thanh toán ZaloPay, hướng dẫn ZaloPay, thanh toán Mini App, phí ZaloPay",
    alternates: {
        canonical: "https://zimo.vn/resources/blog/tich-hop-zalopay-zalo-mini-app",
    },
    openGraph: {
        title: "Tích hợp ZaloPay vào Zalo Mini App - Hướng dẫn chi tiết 2026",
        description: "Hướng dẫn tích hợp ZaloPay vào Zalo Mini App: cách tích hợp, phí giao dịch, quy trình thanh toán, và tối ưu conversion. Tăng 50% tỷ lệ thanh toán.",
        type: "article",
        url: "https://zimo.vn/resources/blog/tich-hop-zalopay-zalo-mini-app",
    },
};

export default function BlogPostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Tích hợp ZaloPay vào Zalo Mini App - Hướng dẫn chi tiết 2026",
        "description": "Hướng dẫn tích hợp ZaloPay vào Zalo Mini App: cách tích hợp, phí giao dịch, quy trình thanh toán, và tối ưu conversion. Tăng 50% tỷ lệ thanh toán.",
        "image": "https://zimo.vn/images/blog/zalopay-integration.jpg",
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
            "id": "https://zimo.vn/resources/blog/tich-hop-zalopay-zalo-mini-app"
        },
        "keywords": "ZaloPay Zalo Mini App, tích hợp thanh toán ZaloPay",
        "articleSection": "Hướng dẫn",
        "wordCount": 2900
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
                        Tích hợp ZaloPay vào Zalo Mini App - Hướng dẫn chi tiết 2026
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-[var(--greyscale-500)]">
                        <span className="bg-[var(--palette-green-badge-bg)] text-[var(--palette-green-text)] px-3 py-1 rounded-full text-sm font-medium">
                            Hướng dẫn
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
                        ZaloPay là cổng thanh toán phổ biến nhất cho Zalo Mini App. Tích hợp ZaloPay giúp khách hàng thanh toán nhanh, an toàn, và tăng tỷ lệ chuyển đổi. Bài viết này sẽ hướng dẫn chi tiết cách tích hợp và tối ưu.
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">ZaloPay là gì?</h2>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">💳 ZaloPay:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Định nghĩa:</strong> Ví điện tử của Zalo, tích hợp sẵn trong Zalo</li>
                            <li>• <strong>Người dùng:</strong> Hơn 20 triệu người dùng ZaloPay</li>
                            <li>• <strong>Phí giao dịch:</strong> 1.1% cho Mini App</li>
                            <li>• <strong>Thời gian giải ngân:</strong> T+1 (ngày hôm sau)</li>
                            <li>• <strong>Độ tin cậy:</strong> Được Zalo bảo chứng</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Tại sao cần tích hợp ZaloPay?</h2>

                    <div className="bg-[var(--palette-blue-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">🎯 Lợi ích chính:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Thanh toán nhanh:</strong> 1-2 click, không cần nhập thông tin thẻ</li>
                            <li>• <strong>Phí thấp:</strong> 1.1% (thấp hơn nhiều cổng thanh toán khác)</li>
                            <li>• <strong>Tỷ lệ thành công cao:</strong> 95-98% (do tiền đã có trong ví)</li>
                            <li>• <strong>Khách hàng quen:</strong> Đã có ZaloPay, không cần đăng ký</li>
                            <li>• <strong>Quản lý dễ:</strong> Tự động giải ngân, report chi tiết</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 So sánh với các cổng thanh toán khác:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>ZaloPay:</strong> Phí 1.1%, tỷ lệ thành công 95-98%</li>
                            <li>• <strong>Thẻ (Visa/Master):</strong> Phí 2.5%, tỷ lệ thành công 85-90%</li>
                            <li>• <strong>Momo:</strong> Phí 1.5%, tỷ lệ thành công 90-95%</li>
                            <li>• <strong>Bank transfer:</strong> Phí 0%, tỷ lệ thành công 50-70% (chậm)</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Điều kiện để tích hợp ZaloPay</h2>

                    <div className="bg-[var(--palette-purple-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📋 Điều kiện bắt buộc:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Đã có Zalo OA:</strong> Phải đăng ký Zalo OA trước</li>
                            <li>• <strong>Đã có Zalo Mini App:</strong> Phải đăng ký Zalo Mini App</li>
                            <li>• <strong>Tài khoản ngân hàng doanh nghiệp:</strong> Để nhận tiền giải ngân</li>
                            <li>• <strong>GPĐKKD:</strong> Giấy phép đăng ký kinh doanh</li>
                            <li>• <strong>CMND/CCCD người đại diện:</strong> Xác minh danh tính</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Quy trình tích hợp ZaloPay</h2>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📝 Bước 1: Đăng ký tài khoản ZaloPay Business</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• Truy cập <a href="https://business.zalopay.vn" className="text-[var(--base-primary)] underline">https://business.zalopay.vn</a></li>
                            <li>• Đăng ký tài khoản doanh nghiệp</li>
                            <li>• Nhập thông tin: tên doanh nghiệp, GPĐKKD, tài khoản ngân hàng</li>
                            <li>• Upload GPĐKKD, CMND/CCCD</li>
                            <li>• Chờ duyệt: 1-3 ngày làm việc</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-blue-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📝 Bước 2: Lấy API Key và Secret Key</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• Đăng nhập vào ZaloPay Business Dashboard</li>
                            <li>• Chọn "Quản lý ứng dụng" → "Tạo ứng dụng mới"</li>
                            <li>• Nhập thông tin Mini App</li>
                            <li>• Nhận API Key và Secret Key</li>
                            <li>• <strong>Lưu ý:</strong> Secret Key chỉ hiển thị 1 lần, hãy lưu lại ngay</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-purple-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📝 Bước 3: Tích hợp vào Mini App</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Frontend:</strong> Dùng ZaloPay SDK để khởi tạo thanh toán</li>
                            <li>• <strong>Backend:</strong> Tạo order, xác minh callback</li>
                            <li>• <strong>Callback URL:</strong> Đặt URL để nhận thông báo thanh toán</li>
                            <li>• <strong>Test:</strong> Test với môi trường sandbox trước</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-orange-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📝 Bước 4: Cấu hình callback và webhook</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• Đặt callback URL trên ZaloPay Dashboard</li>
                            <li>• ZaloPay sẽ gửi thông báo khi thanh toán thành công/thất bại</li>
                            <li>• Xác minh signature để đảm bảo bảo mật</li>
                            <li>• Cập nhật trạng thái đơn hàng dựa trên callback</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-red-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📝 Bước 5: Test và phát hành</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• Test với sandbox: Giả lập thanh toán</li>
                            <li>• Test thật: Thanh toán 1-2 đồng để xác nhận</li>
                            <li>• Xác nhận mọi thứ hoạt động đúng</li>
                            <li>• Phát hành Mini App</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Quy trình thanh toán với ZaloPay</h2>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">🔄 Flow thanh toán:</h3>
                        <ol className="space-y-3 text-[var(--base-text-paragraph)]">
                            <li>• <strong>1. Khách hàng đặt hàng:</strong> Chọn sản phẩm, dịch vụ</li>
                            <li>• <strong>2. Khởi tạo order:</strong> Backend tạo order với ZaloPay</li>
                            <li>• <strong>3. Mở ZaloPay:</strong> Mini App mở ZaloPay</li>
                            <li>• <strong>4. Khách hàng xác nhận:</strong> Nhập mật khẩu, xác nhận thanh toán</li>
                            <li>• <strong>5. ZaloPay xử lý:</strong> ZaloPay xử lý, trừ tiền</li>
                            <li>• <strong>6. Callback:</strong> ZaloPay gửi callback về backend</li>
                            <li>• <strong>7. Cập nhật đơn hàng:</strong> Backend cập nhật trạng thái</li>
                            <li>• <strong>8. Hiển thị kết quả:</strong> Mini App hiển thị thanh toán thành công</li>
                        </ol>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Tối ưu conversion với ZaloPay</h2>

                    <div className="bg-[var(--palette-green-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">✅ Cách tăng tỷ lệ thanh toán:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Hiển thị rõ:</strong> "Thanh toán bằng ZaloPay" với icon ZaloPay</li>
                            <li>• <strong>Ưu tiên ZaloPay:</strong> Đặt ZaloPay lên đầu danh sách thanh toán</li>
                            <li>• <strong>Khuyến mãi:</strong> Giảm 5-10% khi thanh toán bằng ZaloPay</li>
                            <li>• <strong>One-click:</strong> Cho phép thanh toán 1-click cho khách hàng quay lại</li>
                            <li>• <strong>Nhắc nhở:</strong> Nếu khách hàng chưa thanh toán, ZNS nhắc nhở</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-blue-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 Case Study: E-commerce A</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Trước:</strong> Tỷ lệ thanh toán 60% (thường dùng thẻ)</li>
                            <li>• <strong>Sau khi tích hợp ZaloPay:</strong> Tỷ lệ thanh toán 90% (+50%)</li>
                            <li>• <strong>Khuyến mãi:</strong> Giảm 10% khi dùng ZaloPay</li>
                            <li>• <strong>Chi phí:</strong> Tích hợp miễn phí, phí giao dịch 1.1%</li>
                            <li>• <strong>ROI:</strong> Doanh thu tăng 50% nhờ tỷ lệ thanh toán tăng</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Phí và giải ngân</h2>

                    <div className="bg-[var(--palette-purple-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">💰 Phí giao dịch:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>ZaloPay:</strong> 1.1% giao dịch</li>
                            <li>• <strong>Tối thiểu:</strong> Không có tối thiểu</li>
                            <li>• <strong>Tối đa:</strong> Không có tối đa</li>
                            <li>• <strong>Giảm phí:</strong> Có thể giảm phí nếu volume cao</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-orange-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">💰 Quy trình giải ngân:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Thời gian:</strong> T+1 (ngày hôm sau)</li>
                            <li>• <strong>Phương thức:</strong> Chuyển khoản vào tài khoản ngân hàng</li>
                            <li>• <strong>Report:</strong> Có thể xem report chi tiết trên Dashboard</li>
                            <li>• <strong>Xuất hóa đơn:</strong> Có thể xuất hóa đơn điện tử</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Mẹo và lưu ý</h2>

                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">✅ Lưu ý quan trọng:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Test sandbox:</strong> Luôn test với sandbox trước khi phát hành</li>
                            <li>• <strong>Xác minh callback:</strong> Luôn xác minh signature để tránh giả mạo</li>
                            <li>• <strong>Handle lỗi:</strong> Xử lý lỗi khi thanh toán thất bại, thông báo rõ ràng cho khách hàng</li>
                            <li>• <strong>Log:</strong> Log mọi giao dịch để debug</li>
                            <li>• <strong>Backup:</strong> Cần backup order data để khôi phục khi cần</li>
                        </ul>
                    </div>

                    <div className="bg-[var(--palette-red-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">⚠️ Lỗi thường gặp:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>• <strong>Sai API Key/Secret Key:</strong> Kiểm tra lại trên Dashboard</li>
                            <li>• <strong>Callback không được gọi:</strong> Kiểm tra URL, đảm bảo có thể truy cập</li>
                            <li>• <strong>Thanh toán thất bại:</strong> Kiểm tra số dư ZaloPay, mạng</li>
                            <li>• <strong>Giả mạo callback:</strong> Luôn xác minh signature</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Tổng kết</h2>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        ZaloPay là cổng thanh toán tốt nhất cho Zalo Mini App, phí thấp (1.1%), tỷ lệ thành công cao (95-98%). Tích hợp ZaloPay giúp tăng 50% tỷ lệ thanh toán và improve trải nghiệm khách hàng.
                    </p>

                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        <strong className="text-[var(--greyscale-900)]">Lời khuyên:</strong> Tích hợp ZaloPay trước tiên (phí thấp, dễ tích hợp), sau đó mở rộng sang các cổng thanh toán khác (thẻ, Momo) để đa dạng hóa phương thức thanh toán.
                    </p>

                    <div className="bg-gradient-to-r from-[var(--primary-50)] to-transparent p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            Sẵn Sàng Tích Hợp ZaloPay?
                        </h3>
                        <p className="text-[var(--base-text-paragraph)] mb-6">
                            Liên hệ Zimo ngay để được hỗ trợ tích hợp ZaloPay vào Mini App của bạn.
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
