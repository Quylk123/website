import { Metadata } from "next";

export const metadata: Metadata = {
    title: "So Sánh Web Truyền Thống vs Mini App Khách Sạn - Cái Nào Tốt Hơn? | Zimo",
    description: "So sánh chi tiết Web truyền thống và Mini App Khách Sạn: Tính năng, chi phí, trải nghiệm khách hàng. Tại sao Mini App đang thắng thế.",
    keywords: "web truyền thống vs mini app khách sạn, mini app khách sạn, website khách sạn, so sánh app khách sạn",
    alternates: {
        canonical: "https://zimo.vn/resources/blog/so-sanh-web-truyen-thong-vs-mini-app-khach-san",
    },
    openGraph: {
        title: "So Sánh Web Truyền Thống vs Mini App Khách Sạn - Cái Nào Tốt Hơn?",
        description: "So sánh chi tiết Web truyền thống và Mini App Khách Sạn: Tính năng, chi phí, trải nghiệm. Tại sao Mini App đang thắng thế.",
        type: "article",
        url: "https://zimo.vn/resources/blog/so-sanh-web-truyen-thong-vs-mini-app-khach-san",
    },
};

export default function BlogPostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "So Sánh Web Truyền Thống vs Mini App Khách Sạn - Cái Nào Tốt Hơn?",
        "description": "So sánh chi tiết Web truyền thống và Mini App Khách Sạn: Tính năng, chi phí, trải nghiệm khách hàng. Tại sao Mini App đang thắng thế.",
        "image": "https://zimo.vn/images/blog/web-vs-miniapp-comparison.jpg",
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
            "@id": "https://zimo.vn/resources/blog/so-sanh-web-truyen-thong-vs-mini-app-khach-san"
        },
        "keywords": "web truyền thống vs mini app khách sạn, mini app khách sạn, website khách sạn, so sánh app khách sạn",
        "articleSection": "So sánh",
        "wordCount": 2500
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
                            So Sánh Web Truyền Thống vs Mini App Khách Sạn - Cái Nào Tốt Hơn?
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-[var(--greyscale-500)]">
                            <span className="bg-[var(--palette-orange-badge-bg)] text-[var(--palette-orange-text)] px-3 py-1 rounded-full text-sm font-medium">
                                So sánh
                            </span>
                            <span>•</span>
                            <span>04/02/2026</span>
                            <span>•</span>
                            <span>11 phút đọc</span>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="container mx-auto px-4 py-12 max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-[var(--base-text-paragraph)] leading-relaxed mb-8">
                            <strong className="text-[var(--greyscale-900)]">Web truyền thống</strong> và <strong className="text-[var(--greyscale-900)]">Mini App Khách Sạn</strong> — cái nào tốt hơn cho khách sạn của bạn? Bài này so sánh chi tiết hai giải pháp để bạn ra quyết định sáng suốt.
                        </p>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Tổng Quan: Web Truyền Thống vs Mini App</h2>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[var(--greyscale-50)]">
                                        <th className="border border-[var(--greyscale-200)] p-3 text-left font-bold">Tiêu chí</th>
                                        <th className="border border-[var(--greyscale-200)] p-3 text-left font-bold bg-[var(--palette-blue-bg)]">Web Truyền Thống</th>
                                        <th className="border border-[var(--greyscale-200)] p-3 text-left font-bold bg-[var(--palette-green-bg)]">Mini App Khách Sạn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-[var(--greyscale-200)] p-3 font-bold">Chi phí phát triển</td>
                                        <td className="border border-[var(--greyscale-200)] p-3">50-200 triệu</td>
                                        <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)] font-bold">10-50 triệu</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[var(--greyscale-200)] p-3 font-bold">Thời gian triển khai</td>
                                        <td className="border border-[var(--greyscale-200)] p-3">3-6 tháng</td>
                                        <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)] font-bold">3-7 ngày</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[var(--greyscale-200)] p-3 font-bold">Cài đặt từ user</td>
                                        <td className="border border-[var(--greyscale-200)] p-3">Không cần</td>
                                        <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)] font-bold">Không cần</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[var(--greyscale-200)] p-3 font-bold">Tỷ lệ chuyển đổi (booking)</td>
                                        <td className="border border-[var(--greyscale-200)] p-3">1-3%</td>
                                        <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)] font-bold">8-15%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[var(--greyscale-200)] p-3 font-bold">Tỷ lệ đọc tin nhắn</td>
                                        <td className="border border-[var(--greyscale-200)] p-3">Email: 20-30%</td>
                                        <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)] font-bold">ZNS: 90%+</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[var(--greyscale-200)] p-3 font-bold">Duy trì hàng năm</td>
                                        <td className="border border-[var(--greyscale-200)] p-3">10-30 triệu</td>
                                        <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)] font-bold">1-5 triệu</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-[var(--greyscale-200)] p-3 font-bold">Tiếp cận khách hàng</td>
                                        <td className="border border-[var(--greyscale-200)] p-3">Tự tìm website</td>
                                        <td className="border border-[var(--greyscale-200)] p-3 bg-[var(--primary-50)] font-bold">76 triệu người dùng Zalo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">1. Chi Phí & Thời Gian</h2>

                        <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">Web Truyền Thống</h3>
                        <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                            Website truyền thống cần đầu tư lớn:
                        </p>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)] mb-6">
                            <li>💰 <strong>Phát triển:</strong> 50-200 triệu (design + frontend + backend + database)</li>
                            <li>⏰ <strong>Thời gian:</strong> 3-6 tháng (design → dev → test → deploy)</li>
                            <li>🛠️ <strong>Duy trì:</strong> 10-30 triệu/năm (server, bug fix, update)</li>
                            <li>📱 <strong>Mobile version:</strong> Tốn thêm 30-50% chi phí nếu làm app riêng</li>
                        </ul>

                        <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">Mini App Khách Sạn</h3>
                        <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                            <strong className="text-[var(--greyscale-900)]">Mini App Khách Sạn</strong> tối ưu chi phí:
                        </p>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)] mb-6">
                            <li>💰 <strong>Phát triển:</strong> 10-50 triệu (sử dụng kho giao diện mẫu có sẵn)</li>
                            <li>⏰ <strong>Thời gian:</strong> 3-7 ngày (tuỳ custom hóa)</li>
                            <li>🛠️ <strong>Duy trì:</strong> 1-5 triệu/năm (Zalo hosting, support)</li>
                            <li>📱 <strong>Mobile:</strong> Tự chạy trên Zalo (iOS + Android) không cần làm riêng</li>
                        </ul>

                        <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                            <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">💰 Tổng Chi Phí 3 Năm</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold mb-3 text-[var(--greyscale-900)]">Web Truyền Thống</h4>
                                    <div className="text-2xl font-bold text-[var(--base-error)]">150-300 triệu</div>
                                    <p className="text-sm text-[var(--greyscale-500)]">Phát triển + Duy trì 3 năm</p>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-3 text-[var(--greyscale-900)]">Mini App Khách Sạn</h4>
                                    <div className="text-2xl font-bold text-[var(--status-success)]">20-60 triệu</div>
                                    <p className="text-sm text-[var(--greyscale-500)]">Phát triển + Duy trì 3 năm</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-[var(--primary-100)]">
                                <p className="text-[var(--base-text-paragraph)]">
                                    🎉 <strong>Tiết kiệm 80-85%</strong> với Mini App!
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">2. Trải Nghiệm Khách Hàng</h2>

                        <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">Web Truyền Thống</h3>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-[var(--palette-blue-bg)] text-[var(--palette-blue-text)] flex items-center justify-center flex-shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold text-[var(--greyscale-900)]">Tìm website khó khăn</h4>
                                    <p className="text-[var(--base-text-paragraph)]">Khách phải search tên khách sạn, nhớ URL, hoặc click từ quảng cáo</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-[var(--palette-blue-bg)] text-[var(--palette-blue-text)] flex items-center justify-center flex-shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold text-[var(--greyscale-900)]">Tỷ lệ chuyển đổi thấp</h4>
                                    <p className="text-[var(--base-text-paragraph)]">Web thường có tỷ lệ booking 1-3% do friction (đăng ký, login, etc.)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-[var(--palette-blue-bg)] text-[var(--palette-blue-text)] flex items-center justify-center flex-shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold text-[var(--greyscale-900)]">Email ít được đọc</h4>
                                    <p className="text-[var(--base-text-paragraph)]">Tỷ lệ mở email chỉ 20-30%, tin confirm đặt phòng dễ bị bỏ qua</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-[var(--palette-blue-bg)] text-[var(--palette-blue-text)] flex items-center justify-center flex-shrink-0">4</div>
                                <div>
                                    <h4 className="font-bold text-[var(--greyscale-900)]">Mobile UX kém</h4>
                                    <p className="text-[var(--base-text-paragraph)]">Web thường chưa tối ưu tốt cho mobile, khách dễ thoát trang</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">Mini App Khách Sạn</h3>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-[var(--palette-green-bg)] text-[var(--palette-green-text)] flex items-center justify-center flex-shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold text-[var(--greyscale-900)]">Khách hàng đã ở Zalo</h4>
                                    <p className="text-[var(--base-text-paragraph)]">76 triệu người Việt dùng Zalo mỗi ngày — khách không cần cài app mới</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-[var(--palette-green-bg)] text-[var(--palette-green-text)] flex items-center justify-center flex-shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold text-[var(--greyscale-900)]">Tỷ lệ chuyển đổi cao</h4>
                                    <p className="text-[var(--base-text-paragraph)]">Tỷ lệ booking 8-15% do friction thấp, trust cao từ Zalo OA</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-[var(--palette-green-bg)] text-[var(--palette-green-text)] flex items-center justify-center flex-shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold text-[var(--greyscale-900)]">ZNS tỷ lệ đọc 90%+</h4>
                                    <p className="text-[var(--base-text-paragraph)]">Tin xác nhận đặt phòng, nhắc check-in được 90% khách đọc — hơn email rất nhiều</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-[var(--palette-green-bg)] text-[var(--palette-green-text)] flex items-center justify-center flex-shrink-0">4</div>
                                <div>
                                    <h4 className="font-bold text-[var(--greyscale-900)]">Super mượt trên mobile</h4>
                                    <p className="text-[var(--base-text-paragraph)]">Mini App chạy ngay trên Zalo, tải 1 lần đầu, sau đó mở trong 1-2 giây</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">3. Tính Năng Quản Lý</h2>

                        <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">Web Truyền Thống</h3>
                        <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                            Web chỉ có frontend booking, thiếu backend quản lý:
                        </p>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)] mb-6">
                            <li>❌ Không có PMS tích hợp</li>
                            <li>❌ Không có hệ thống tích điểm</li>
                            <li>❌ Không có ZNS gửi tin tự động</li>
                            <li>❌ Không có dashboard quản lý</li>
                            <li>❌ Không có báo cáo thống kê chi tiết</li>
                        </ul>

                        <h3 className="text-2xl font-bold mb-4 text-[var(--greyscale-900)]">Mini App Khách Sạn</h3>
                        <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                            <strong className="text-[var(--greyscale-900)]">Mini App Khách Sạn</strong> đi kèm toàn bộ hệ thống quản lý:
                        </p>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)] mb-6">
                            <li>✅ <strong>PMS tích hợp:</strong> Quản lý đặt phòng, check-in/out, sơ đồ phòng</li>
                            <li>✅ <strong>Hệ thống tích điểm:</strong> Loyalty, thẻ thành viên, khuyến mãi tự động</li>
                            <li>✅ <strong>ZNS tự động:</strong> Gửi tin confirm, nhắc check-in, cảm ơn sau ở</li>
                            <li>✅ <strong>Dashboard quản lý:</strong> Xem doanh thu, occupancy, khách hàng mới</li>
                            <li>✅ <strong>Báo cáo chi tiết:</strong> Export Excel, phân tích dữ liệu</li>
                        </ul>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">4. SEO & Marketing</h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="p-6 bg-[var(--greyscale-0)] rounded-xl border border-[var(--greyscale-200)]">
                                <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">Web Truyền Thống</h3>
                                <ul className="space-y-3 text-[var(--base-text-paragraph)]">
                                    <li>✅ Tối ưu SEO tốt (Google)</li>
                                    <li>✅ Có URL để quảng cáo</li>
                                    <li>❌ Không có channel riêng trên Zalo</li>
                                    <li>❌ Không có database khách hàng tích hợp</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-[var(--primary-50)] rounded-xl border border-[var(--primary-100)]">
                                <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">Mini App Khách Sạn</h3>
                                <ul className="space-y-3 text-[var(--base-text-paragraph)]">
                                    <li>✅ Có URL để quảng cáo</li>
                                    <li>✅ Tích hợp Zalo OA (76M users)</li>
                                    <li>✅ Database khách hàng sẵn có</li>
                                    <li>✅ ZNS gửi marketing (tỷ lệ đọc 90%+)</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Case Study: Khách Sạn Y (35 phòng)</h2>
                        <div className="bg-[var(--primary-50)] p-6 rounded-2xl mb-8">
                            <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">📊 So Sánh Kết Quả Sau 4 Tháng</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold mb-3 text-[var(--greyscale-900)]">🔵 Web Truyền Thống (Trước)</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="p-3 bg-[var(--greyscale-0)] rounded-lg">
                                            <div className="text-sm text-[var(--greyscale-500)]">Đặt phòng/tháng</div>
                                            <div className="text-xl font-bold">45 bookings</div>
                                        </div>
                                        <div className="p-3 bg-[var(--greyscale-0)] rounded-lg">
                                            <div className="text-sm text-[var(--greyscale-500)]">Doanh thu/tháng</div>
                                            <div className="text-xl font-bold">45 triệu</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-3 text-[var(--greyscale-900)]">🟢 Mini App (Sau)</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="p-3 bg-[var(--status-success)]/20 rounded-lg border border-[var(--status-success)]">
                                            <div className="text-sm text-[var(--greyscale-500)]">Đặt phòng/tháng</div>
                                            <div className="text-xl font-bold text-[var(--status-success)]">128 bookings</div>
                                        </div>
                                        <div className="p-3 bg-[var(--status-success)]/20 rounded-lg border border-[var(--status-success)]">
                                            <div className="text-sm text-[var(--greyscale-500)]">Doanh thu/tháng</div>
                                            <div className="text-xl font-bold text-[var(--status-success)]">95 triệu</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-[var(--primary-100)]">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-[var(--status-success)] mb-2">+184%</div>
                                        <div className="text-[var(--base-text-paragraph)]">Tăng đặt phòng qua Mini App</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Kết Luận: Khi Nào Nên Chọn Giải Pháp Nào?</h2>

                        <div className="space-y-6 mb-8">
                            <div className="p-6 bg-[var(--palette-blue-badge-bg)] rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-[var(--greyscale-900)]">🔵 Nên Chọn Web Truyền Thống Khi:</h3>
                                <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                                    <li>• Khách sạn lớn (100+ phòng) với ngân sách lớn</li>
                                    <li>• Cần tính năng cực kỳ custom, chưa có solution sẵn</li>
                                    <li>• Muốn hoàn toàn chủ sở hữu, không phụ thuộc platform</li>
                                    <li>• Có đội ngũ IT mạnh để duy trì</li>
                                </ul>
                            </div>

                            <div className="p-6 bg-[var(--palette-green-badge-bg)] rounded-xl border border-[var(--palette-green-border)]">
                                <h3 className="text-xl font-bold mb-3 text-[var(--greyscale-900)]">🟢 Nên Chọn Mini App Khách Sạn Khi:</h3>
                                <ul className="space-y-2 text-[var(--base-text-paragraph)]">
                                    <li>• <strong>Khách sạn SME (10-50 phòng)</strong> muốn triển khai nhanh</li>
                                    <li>• Muốn <strong>tiết kiệm chi phí</strong> (80-85%)</li>
                                    <li>• Muốn tiếp cận <strong>76 triệu người dùng Zalo</strong></li>
                                    <li>• Cần <strong>booking nhanh</strong> (8-15% conversion rate)</li>
                                    <li>• Muốn <strong>ZNS tự động</strong> với tỷ lệ đọc 90%+</li>
                                    <li>• Không có đội ngũ IT riêng</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Lời Khuyên Của Zimo</h2>
                        <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-4">
                            Với khách sạn SME, <strong className="text-[var(--greyscale-900)]">Mini App Khách Sạn</strong> là lựa chọn tối ưu. Không chỉ tiết kiệm chi phí mà còn:
                        </p>
                        <ul className="space-y-2 text-[var(--base-text-paragraph)] mb-6">
                            <li>✅ Triển khai nhanh — bắt đầu nhận booking trong 1 tuần</li>
                            <li>✅ ROI nhanh — thu hồi vốn trong 2-3 tháng</li>
                            <li>✅ Kết quả tốt — tăng 100-200% tỷ lệ đặt phòng</li>
                            <li>✅ Hỗ trợ chuyên nghiệp — không cần đội ngũ IT</li>
                        </ul>

                        <div className="bg-[var(--palette-yellow-badge-bg)] p-6 rounded-2xl mb-8">
                            <h3 className="text-xl font-bold mb-4 text-[var(--greyscale-900)]">💡 Lời Khuyên Của Zimo</h3>
                            <p className="text-[var(--base-text-paragraph)] mb-4">
                                <strong className="text-[var(--greyscale-900)]">Đừng chọn Web hay Mini App — chọn CẢ HAI!</strong>
                            </p>
                            <p className="text-[var(--base-text-paragraph)] leading-relaxed">
                                Zimo cung cấp giải pháp <strong className="text-[var(--greyscale-900)]">Web + Mini App</strong> đồng bộ. Web giúp khách sạn có mặt trên Google, Mini App giúp tối ưu trải nghiệm trên Zalo. Cả hai cùng sync dữ liệu, không tốn chi phí duy trì gấp đôi.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-[var(--greyscale-900)]">Kết Luận</h2>
                        <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-6">
                            <strong className="text-[var(--greyscale-900)]">Web truyền thống</strong> và <strong className="text-[var(--greyscale-900)]">Mini App Khách Sạn</strong> đều có ưu nhược điểm riêng. Nhưng với khách sạn SME, Mini App rõ ràng thắng thế về chi phí, tốc độ, và kết quả.
                        </p>
                        <p className="text-[var(--base-text-paragraph)] leading-relaxed mb-8">
                            Đừng để đối thủ vượt qua. Bắt đầu với <strong className="text-[var(--greyscale-900)]">Mini App Khách Sạn</strong> của Zimo ngay hôm nay.
                        </p>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-[var(--primary-50)] to-transparent p-8 rounded-2xl text-center">
                            <h3 className="text-2xl font-bold mb-4">
                                Sẵn Sàng Tối Ưu Với Mini App Khách Sạn?
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
