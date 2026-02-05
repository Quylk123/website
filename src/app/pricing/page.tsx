import type { Metadata } from "next";
import { CheckCircle2, ChevronDown, Check, X, HelpCircle } from "lucide-react";
import Button from "@/components/Button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"; // Assuming you have an Accordion component or will use native details/summary

export const metadata: Metadata = {
    title: "Bảng Giá Dịch Vụ - Zimo Platform",
    description: "Bảng giá minh bạch các gói dịch vụ thiết kế Mini App và phần mềm quản lý. Chi phí hợp lý cho mọi quy mô doanh nghiệp.",
    keywords: ["bảng giá zimo", "chi phí làm mini app", "giá phần mềm quản lý bán hàng", "báo giá thiết kế web"],
};

export default function PricingPage() {
    return (
        <div className="bg-[var(--base-background)] text-[var(--greyscale-900)] font-sans">
            <section className="pt-20 pb-16 bg-[var(--greyscale-50)] text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Đầu Tư Nhỏ, <span className="text-[var(--base-primary)]">Lợi Ích Lớn</span></h1>
                    <p className="text-xl text-[var(--greyscale-500)] max-w-2xl mx-auto mb-12">
                        Chọn gói giải pháp phù hợp với giai đoạn phát triển của doanh nghiệp bạn. Không phí ẩn, minh bạch tuyệt đối.
                    </p>

                    {/* Pricing Grid */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                        {/* Basic Package */}
                        <div className="bg-[var(--greyscale-0)] p-8 rounded-3xl shadow-sm border border-[var(--greyscale-200)] flex flex-col hover:border-[var(--base-primary)] transition-all">
                            <h3 className="text-xl font-bold text-[var(--greyscale-500)] mb-4 uppercase tracking-wider">Start-up</h3>
                            <div className="text-5xl font-extrabold text-[var(--greyscale-900)] mb-6">Liên hệ<span className="text-lg text-[var(--greyscale-400)] font-normal">/năm</span></div>
                            <p className="text-[var(--greyscale-500)] mb-8 h-12">Dành cho cá nhân hoặc cửa hàng nhỏ mới bắt đầu kinh doanh online.</p>

                            <div className="flex-1 space-y-4 mb-8">
                                <FeatureItem text="Mini App bán hàng cơ bản" />
                                <FeatureItem text="Zalo Mini App (Template)" />
                                <FeatureItem text="Thông tin khách hàng đơn giản" />
                                <FeatureItem text="Trạng thái đơn hàng" />
                                <FeatureItem text="Quản lý 500 sản phẩm" />
                                <FeatureItem text="1 Tài khoản nhân viên" />
                                <FeatureItem text="Nhắn tin ZNS cơ bản" />
                            </div>
                            <Button variant="outline" className="w-full justify-center" href="https://zalo.me/0899111195" target="_blank">Đăng Ký Tư Vấn</Button>
                        </div>

                        {/* Growth Package */}
                        <div className="bg-[var(--greyscale-0)] p-8 rounded-3xl shadow-xl border-2 border-[var(--base-primary)] flex flex-col relative transform md:-translate-y-4 z-10">
                            <div className="absolute top-0 right-0 bg-[var(--base-primary)] text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
                            <h3 className="text-xl font-bold text-[var(--base-primary)] mb-4 uppercase tracking-wider">Growth</h3>
                            <div className="text-5xl font-extrabold text-[var(--greyscale-900)] mb-6">Liên hệ<span className="text-lg text-[var(--greyscale-400)] font-normal">/năm</span></div>
                            <p className="text-[var(--greyscale-500)] mb-8 h-12">Giải pháp hoàn hảo cho doanh nghiệp đang trên đà tăng trưởng mạnh.</p>

                            <div className="flex-1 space-y-4 mb-8">
                                <FeatureItem text="Mọi tính năng gói Start-up" highlighted />
                                <FeatureItem text="Hệ thống Loyalty Tích điểm" highlighted />
                                <FeatureItem text="Mini Game Marketing" highlighted />
                                <FeatureItem text="Quản lý không giới hạn SP" />
                                <FeatureItem text="5 Tài khoản nhân viên" />
                                <FeatureItem text="Báo cáo phân tích chuyên sâu" />
                            </div>
                            <Button variant="primary" className="w-full justify-center" href="https://zalo.me/0899111195" target="_blank">Chọn Gói Này</Button>
                        </div>

                        {/* Enterprise Package */}
                        <div className="bg-[var(--greyscale-0)] p-8 rounded-3xl shadow-sm border border-[var(--greyscale-200)] flex flex-col hover:border-[var(--base-primary)] transition-all">
                            <h3 className="text-xl font-bold text-[var(--greyscale-500)] mb-4 uppercase tracking-wider">Enterprise</h3>
                            <div className="text-5xl font-extrabold text-[var(--greyscale-900)] mb-6">Custom</div>
                            <p className="text-[var(--greyscale-500)] mb-8 h-12">Thiết kế riêng biệt và tích hợp hệ thống theo yêu cầu doanh nghiệp lớn.</p>

                            <div className="flex-1 space-y-4 mb-8">
                                <FeatureItem text="Thiết kế UI/UX độc quyền" />
                                <FeatureItem text="Tích hợp ERP/CRM/POS" />
                                <FeatureItem text="Server riêng biệt (Private Cloud)" />
                                <FeatureItem text="Hỗ trợ kỹ thuật 24/7 VIP" />
                                <FeatureItem text="Cam kết SLA 99.9%" />
                            </div>
                            <Button variant="outline" className="w-full justify-center" href="https://zalo.me/0899111195" target="_blank">Liên Hệ Báo Giá</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[var(--greyscale-0)]">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12">Câu Hỏi Thường Gặp</h2>
                    <div className="space-y-4">
                        <FaqItem
                            question="Tôi có cần biết lập trình để sử dụng Zimo không?"
                            answer="Không. Zimo được thiết kế để bất kỳ ai cũng có thể sử dụng. Giao diện quản trị trực quan, kéo thả đơn giản."
                        />
                        <FaqItem
                            question="Tôi có sở hữu dữ liệu khách hàng không?"
                            answer="Có. Toàn bộ dữ liệu khách hàng là tài sản của bạn. Zimo cam kết bảo mật và không sử dụng dữ liệu của bạn cho mục đích khác."
                        />
                        <FaqItem
                            question="Chi phí ZNS được tính như thế nào?"
                            answer="Chi phí gửi tin nhắn ZNS được trả trực tiếp cho Zalo. Zimo chỉ cung cấp công cụ để bạn gửi và tối ưu chi phí."
                        />
                        <FaqItem
                            question="Tôi có thể nâng cấp gói dịch vụ sau này không?"
                            answer="Chắc chắn rồi. Bạn có thể nâng cấp gói dịch vụ bất cứ lúc nào khi quy mô kinh doanh mở rộng, hệ thống sẽ tự động tính toán chi phí chênh lệch."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureItem({ text, highlighted = false }: { text: string; highlighted?: boolean }) {
    return (
        <div className={`flex items-start gap-3 ${highlighted ? 'font-semibold text-[var(--greyscale-900)]' : 'text-[var(--greyscale-500)]'}`}>
            <CheckCircle2 className={`w-5 h-5 mt-0.5 ${highlighted ? 'text-[var(--base-primary)]' : 'text-gray-400'}`} />
            <span>{text}</span>
        </div>
    )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
    return (
        <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[var(--base-primary)]" />
                {question}
            </h4>
            <p className="text-gray-600 pl-8">{answer}</p>
        </div>
    )
}
