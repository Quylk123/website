import type { Metadata } from "next";
import { CheckCircle2, XCircle } from "lucide-react";
import Button from "@/components/Button";

export const metadata: Metadata = {
    title: "Bảng Giá Dịch Vụ - Zimo Platform",
    description: "Bảng giá chi tiết các gói dịch vụ thiết kế Mini App và phần mềm quản lý.",
};

export default function PricingPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--greyscale-900)] mb-8 text-center">Bảng Giá Dịch Vụ</h1>
            <p className="text-xl text-[var(--greyscale-500)] max-w-2xl mx-auto text-center mb-16">
                Chọn gói dịch vụ phù hợp nhất với quy mô và nhu cầu của doanh nghiệp bạn.
            </p>

            {/* Reusing Pricing Grid from Home (simplified version or full component if extracted later) */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Basic Package */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-[var(--greyscale-200)] hover:shadow-xl transition duration-300 flex flex-col">
                    <h3 className="text-xl font-bold text-[var(--greyscale-500)] mb-4 uppercase tracking-wider">Gói Cơ Bản</h3>
                    <div className="text-5xl font-extrabold text-[var(--greyscale-900)] mb-6">Liên hệ<span className="text-lg text-[var(--greyscale-400)] font-normal">/năm</span></div>
                    <ul className="text-left space-y-4 mb-10 text-[var(--greyscale-500)] flex-1">
                        <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Giao diện cơ bản</li>
                        <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Thông tin doanh nghiệp</li>
                        <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Tích hợp Zalo OA</li>
                        <li className="flex items-center text-[var(--greyscale-300)]"><XCircle className="mr-3 h-5 w-5" /> Tích điểm Loyalty</li>
                    </ul>
                    <Button variant="outline" className="w-full border-[var(--base-primary)] text-[var(--base-primary)]" href="https://zalo.me/0899111195" target="_blank">Chọn gói này</Button>
                </div>

                {/* Growth Package */}
                <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-[var(--base-primary)] relative transform md:-translate-y-6 z-10 flex flex-col">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--base-primary)] text-white px-6 py-2 rounded-full text-sm font-bold uppercase shadow-md">Khuyên dùng</div>
                    <h3 className="text-xl font-bold text-[var(--base-primary)] mb-4 uppercase tracking-wider">Gói Tăng Trưởng</h3>
                    <div className="text-5xl font-extrabold text-[var(--greyscale-900)] mb-6">Liên hệ<span className="text-lg text-[var(--greyscale-400)] font-normal">/năm</span></div>
                    <ul className="text-left space-y-4 mb-10 text-[var(--greyscale-500)] flex-1">
                        <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> <strong>Mọi tính năng gói Cơ bản</strong></li>
                        <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Tính năng Tích điểm (Loyalty)</li>
                        <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Gửi tin ZNS tự động</li>
                        <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Báo cáo thống kê cơ bản</li>
                    </ul>
                    <Button variant="primary" className="w-full" href="https://zalo.me/0899111195" target="_blank">Liên hệ báo giá ưu đãi</Button>
                </div>

                {/* Enterprise Package */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-[var(--greyscale-200)] hover:shadow-xl transition duration-300 flex flex-col">
                    <h3 className="text-xl font-bold text-[var(--greyscale-500)] mb-4 uppercase tracking-wider">Gói Doanh Nghiệp</h3>
                    <div className="text-5xl font-extrabold text-[var(--greyscale-900)] mb-6">Custom</div>
                    <ul className="text-left space-y-4 mb-10 text-[var(--greyscale-500)] flex-1">
                        <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> <strong>Thiết kế riêng (Tailor-made)</strong></li>
                        <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Tích hợp CRM/ERP/POS</li>
                        <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Sync dữ liệu Real-time</li>
                        <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Hỗ trợ kỹ thuật ưu tiên 24/7</li>
                    </ul>
                    <Button variant="outline" className="w-full border-[var(--greyscale-800)] text-[var(--greyscale-800)]" href="https://zalo.me/0899111195" target="_blank">Tư vấn chuyên sâu</Button>
                </div>
            </div>
        </div>
    );
}
