import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "5 Lỗi Sai Khi Xây Dựng Zalo Mini App Cho Khách Sạn | Zimo",
    description: "Tránh 5 sai lầm tốn kém khi triển khai Zalo Mini App cho khách sạn. Học từ kinh nghiệm thực tế của 50+ khách hàng để tối ưu ROI.",
    keywords: "Zalo Mini App khách sạn, lỗi xây dựng app khách sạn, booking app khách sạn, Zalo booking",
    openGraph: {
        title: "5 Lỗi Sai Khi Xây Dựng Zalo Mini App Cho Khách Sạn | Zimo",
        description: "Học từ kinh nghiệm 50+ khách sạn - tránh sai lầm tốn kém khi triển khai Zalo Mini App booking.",
        type: "article",
        url: "https://zimo.vn/resources/blog/5-loi-sai-khi-xay-dung-zalominiapp-cho-khach-san",
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
                        5 Lỗi Sai Khi Xây Dựng Zalo Mini App Cho Khách Sạn
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-[var(--greyscale-500)]">
                        <span className="bg-[var(--palette-green-badge-bg)] text-[var(--palette-green-text)] px-3 py-1 rounded-full text-sm font-medium">
                            Khách sạn
                        </span>
                        <span>•</span>
                        <span>03/02/2026</span>
                        <span>•</span>
                        <span>7 phút đọc</span>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Hero Image */}
                <div className="mb-10 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099975?w=1200&h=600&fit=crop"
                        alt="Khách sạn sử dụng Zalo Mini App"
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-[var(--base-text-paragraph)] leading-relaxed mb-8">
                        Trong 2 năm làm việc với <strong className="text-[var(--greyscale-900)]">50+ khách sạn và homestay</strong>, Zimo đã gặp không ít trường hợp khách hàng lãng phí tiền và thời gian vì những sai lầm có thể tránh được. Bài này tổng hợp 5 lỗi phổ biến nhất.
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Lỗi #1: Quá Nghiêng Về "Tính Năng" Mà Quên "Trải Nghiệm Khách Hàng"</h2>
                    <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=500&fit=crop"
                            alt="Mobile booking app UX"
                            width={1200}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Sai lầm này rất phổ biến. Khách hàng liệt kê hàng tá tính năng: đặt phòng, thanh toán, tích điểm, voucher, feedback, live chat, push notification... mà quên mất điều quan trọng nhất: <strong className="text-[var(--greyscale-900)]">trải nghiệm người dùng (UX)</strong>.
                    </p>
                    <div className="bg-[var(--palette-red-badge-bg)] p-4 rounded-xl mb-6">
                        <p className="text-[var(--palette-red-text)] font-medium mb-2">
                            ⚠️ Hậu quả:
                        </p>
                        <ul className="text-[var(--base-text-paragraph)] space-y-1">
                            <li>• Khách hàng mở app nhưng không biết làm gì</li>
                            <li>• Flow đặt phòng quá phức tạp, bỏ giữa chừng</li>
                            <li>• Tỷ lệ conversion chỉ 1-2%</li>
                        </ul>
                    </div>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-6">
                        <strong className="text-[var(--greyscale-900)]">Giải pháp:</strong> Tập trung vào core journey — từ lúc khách mở app đến khi đặt phòng thành công, tối đa <strong className="text-[var(--greyscale-900)]">3-4 bước</strong>. Tính năng phụ thêm sau nếu cần thiết.
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Lỗi #2: Thiếu Sơ Đồ Phòng (Room Plan) Trực Quan</h2>
                    <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&h=500&fit=crop"
                            alt="Sơ đồ phòng khách sạn"
                            width={1200}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Khách sạn 10-30 phòng thường dùng table listing. Nhưng với khách sạn lớn hơn, table trở nên <strong className="text-[var(--greyscale-900)]">khó quản lý</strong>.
                    </p>
                    <div className="bg-[var(--palette-red-badge-bg)] p-4 rounded-xl mb-6">
                        <p className="text-[var(--palette-red-text)] font-medium mb-2">
                            ⚠️ Hậu quả:
                        </p>
                        <ul className="text-[var(--base-text-paragraph)] space-y-1">
                            <li>• Lễ tân mất 5-10 phút để tìm phòng trống</li>
                            <li>• Dễ double-book khi có nhiều khách cùng lúc</li>
                            <li>• Không nhìn được tổng quan tình trạng phòng</li>
                        </ul>
                    </div>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-6">
                        <strong className="text-[var(--greyscale-900)]">Giải pháp:</strong> Dùng <strong className="text-[var(--greyscale-900)]">Room Plan</strong> — sơ đồ trực quan như Excel, màu sắc phân loại: trống (xanh), đã đặt (vàng), đang ở (đỏ), dọn dẹp (xám).
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Lỗi #3: Không Tích Hợp Với PMS/POS Hiện Tại</h2>
                    <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop"
                            alt="Hệ thống tích hợp khách sạn"
                            width={1200}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Nhiều khách sạn muốn "tự làm tất cả" — booking app, POS, PMS... nhưng thực tế:
                    </p>
                    <div className="bg-[var(--palette-red-badge-bg)] p-4 rounded-xl mb-6">
                        <p className="text-[var(--palette-red-text)] font-medium mb-2">
                            ⚠️ Hậu quả:
                        </p>
                        <ul className="text-[var(--base-text-paragraph)] space-y-1">
                            <li>• Dữ liệu không đồng bộ — app khác với POS</li>
                            <li>• Nhân viên phải nhập liệu thủ công 2 lần</li>
                            <li>• Lỗi do người — sai số, sai phòng</li>
                            <li>• Chi phí phát triển x3-x5 thời gian</li>
                        </ul>
                    </div>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-6">
                        <strong className="text-[var(--greyscale-900)]">Giải pháp:</strong> Tích hợp với hệ thống sẵn có qua API. Zimo hỗ trợ tích hợp với <strong className="text-[var(--greyscale-900)]">20+ PMS/POS phổ biến</strong>: Smoobu, SmileHotel, VNPT...
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Lỗi #4: Quên Tích Hợp ZNS Để Nhắc Lịch Hẹn</h2>
                    <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&h=500&fit=crop"
                            alt="Tin nhắn Zalo ZNS"
                            width={1200}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Khách đặt phòng xong... và không còn gì nữa. Đến ngày check-in mới nhớ ra.
                    </p>
                    <div className="bg-[var(--palette-red-badge-bg)] p-4 rounded-xl mb-6">
                        <p className="text-[var(--palette-red-text)] font-medium mb-2">
                            ⚠️ Hậu quả:
                        </p>
                        <ul className="text-[var(--base-text-paragraph)] space-y-1">
                            <li>• Tỷ lệ no-show 15-20%</li>
                            <li>• Lễ tân phải gọi điện nhắc từng khách</li>
                            <li>• Không thể cancel kịp thời gian</li>
                        </ul>
                    </div>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-6">
                        <strong className="text-[var(--greyscale-900)]">Giải pháp:</strong> Gửi ZNS tự động: <strong className="text-[var(--greyscale-900)]">1 ngày trước check-in</strong>, <strong className="text-[var(--greyscale-900)]">sáng check-in</strong>, <strong className="text-[var(--greyscale-900)]">trước checkout</strong>. Chi phí chỉ 80đ/tin — rẻ hơn SMS brandname 60%.
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Lỗi #5: Không Có Hệ Thống Tích Điểm (Loyalty)</h2>
                    <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=500&fit=crop"
                            alt="Hệ thống tích điểm khách hàng"
                            width={1200}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                        Khách sạn trung bình: <strong className="text-[var(--greyscale-900)]">30% khách hàng quay lại</strong>. Nhưng với Loyalty, con số này có thể tăng lên <strong className="text-[var(--greyscale-900)]">50-60%</strong>.
                    </p>
                    <div className="bg-[var(--palette-red-badge-bg)] p-4 rounded-xl mb-6">
                        <p className="text-[var(--palette-red-text)] font-medium mb-2">
                            ⚠️ Hậu quả:
                        </p>
                        <ul className="text-[var(--base-text-paragraph)] space-y-1">
                            <li>• Mất khách sau mỗi lần ở</li>
                            <li>• Không có chương trình giữ chân khách</li>
                            <li>• Cạnh tranh chỉ về giá</li>
                        </ul>
                    </div>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-6">
                        <strong className="text-[var(--greyscale-900)]">Giải pháp:</strong> Xây Loyalty đơn giản: <strong className="text-[var(--greyscale-900)]">1 đêm = 100 điểm</strong>, <strong className="text-[var(--greyscale-900)]">500 điểm = 1 đêm miễn phí</strong>. Zalo Mini App tích hợp sẵn tính năng này.
                    </p>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Case Study: Khách Sạn Y Tăng ROI 300%</h2>
                    <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=500&fit=crop"
                            alt="Khách sạn Đà Nẵng"
                            width={1200}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="bg-[var(--palette-green-badge-bg)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 Khách sạn Y (20 phòng, Đà Nẵng)</h3>
                        <p className="text-[var(--base-text-paragraph)] mb-4">
                            Ban đầu dùng app booking truyền thống, chi phí 200 triệu, nhưng tỷ lệ đặt qua app chỉ 5%. Sau khi chuyển sang Zalo Mini App:
                        </p>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>✅ Chi phí: <strong>chỉ 15 triệu</strong> (giảm 92.5%)</li>
                            <li>✅ Thời gian: <strong>5 ngày</strong> (thay vì 4 tháng)</li>
                            <li>✅ Tỷ lệ đặt qua Zalo: <strong>65%</strong> (tăng 1200%)</li>
                            <li>✅ Tỷ lệ no-show: <strong>giảm từ 20% → 8%</strong></li>
                            <li>✅ ROI: <strong>thu hồi vốn sau 2 tháng</strong></li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Kiểm Tra Checklist Trước Khi Bắt Đầu</h2>
                    <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                        <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">✅ Trước khi xây dựng, hãy tự hỏi:</h3>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                            <li>☐ <strong>Tôi có hiểu rõ pain point của khách hàng không?</strong></li>
                            <li>☐ <strong>Journey đặt phòng có tối ưu (3-4 bước) không?</strong></li>
                            <li>☐ <strong>Cần Room Plan trực quan không?</strong></li>
                            <li>☐ <strong>Cần tích hợp PMS/POS nào không?</strong></li>
                            <li>☐ <strong>Có cần ZNS nhắc lịch không?</strong></li>
                            <li>☐ <strong>Có cần Loyalty không?</strong></li>
                            <li>☐ <strong>Ngân sách bao nhiêu? Timeline?</strong></li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Kết Luận</h2>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-6">
                        Xây dựng Zalo Mini App cho khách sạn không khó — <strong className="text-[var(--greyscale-900)]">khó là xây đúng</strong>. Tránh 5 sai lầm này, bạn sẽ tiết kiệm hàng trăm triệu và thời gian quý giá.
                    </p>
                    <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-8">
                        Zimo đã làm với 50+ khách sạn — chúng tôi hiểu nỗi đau của bạn. Liên hệ để nhận <strong className="text-[var(--greyscale-900)]">tư vấn 1:1 miễn phí</strong> về Mini App phù hợp nhất cho khách sạn của bạn.
                    </p>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-[var(--palette-green-badge-bg)] to-transparent p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            Xây Zalo Mini App Khách Sạn Đúng Ngay Lần Đầu
                        </h3>
                        <p className="text-[var(--base-text-paragraph)] mb-6">
                            Liên hệ Zimo để nhận demo miễn phí và báo giá chi tiết.
                        </p>
                        <a
                            href="https://zalo.me/0899111195"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[var(--base-primary)] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all text-lg"
                        >
                            Xem Demo Khách Sạn →
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}
