import Link from "next/link";
import {
  ArrowRight,
  Headset,
  Car,
  Package,
  Gift,
  Zap,
  MessageCircle,
  Coins,
  CheckCircle2,
  XCircle,
  Rocket
} from "lucide-react";
import Button from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col bg-[var(--base-background)] text-[var(--greyscale-900)] font-sans relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-[var(--greyscale-50)]">
        {/* Background Blobs (Simulated with simple circles for now) */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--primary-100)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[var(--primary-200)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <div className="inline-block py-1.5 px-4 rounded-full bg-[var(--primary-50)] border border-[var(--primary-100)] text-[var(--base-primary)] text-sm font-semibold mb-6 shadow-sm">
            🚀 Đối tác phát triển Zalo Mini App chiến lược
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--greyscale-900)] mb-8 leading-tight">
            Biến 100 Triệu người dùng Zalo thành <span className="text-[var(--base-primary)] relative">Khách hàng trung thành</span>
          </h1>
          <p className="text-xl text-[var(--greyscale-500)] mb-12 max-w-3xl mx-auto leading-relaxed">
            Zimo.vn cung cấp giải pháp Mini App trọn gói cho ngành Ô tô, Bán lẻ và B2B. Tích hợp ZNS chăm sóc tự động, đột phá doanh thu trên hệ sinh thái Zalo.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <Button
              variant="primary"
              size="large"
              className="shadow-xl hover:shadow-2xl hover:-translate-y-1"
              href="#giai-phap"
              leftIcon={<Rocket className="h-5 w-5" />}
            >
              Khám phá giải pháp
            </Button>
            <Button
              variant="outline"
              size="large"
              className="bg-[var(--greyscale-0)] hover:border-[var(--base-primary)] hover:text-[var(--base-primary)] hover:-translate-y-1 shadow-sm"
              href="tel:0899111195"
              leftIcon={<Headset className="h-5 w-5" />}
            >
              Gọi tư vấn: 0899.111.195
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section (#giai-phap) */}
      <section id="giai-phap" className="py-24 bg-[var(--base-background)] relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--greyscale-900)] mb-6">Giải Pháp "May Đo" Theo Ngành</h2>
            <p className="text-xl text-[var(--greyscale-500)] max-w-2xl mx-auto">
              Chúng tôi am hiểu nỗi đau của từng mô hình kinh doanh để tạo ra những Mini App thực chiến nhất.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Auto Care */}
            <Card className="hover:-translate-y-2 hover:shadow-lg transition-all duration-300 border-[var(--greyscale-100)]">
              <CardHeader>
                <div className="w-16 h-16 bg-[var(--palette-blue-bg)] rounded-2xl flex items-center justify-center text-[var(--palette-blue-text)] mb-6">
                  <Car className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold group-hover:text-[var(--base-primary)]">Zimo Auto Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  Giải pháp cho Showroom, Garage. Tự động nhắc lịch bảo dưỡng qua ZNS, sổ bảo hành điện tử, đặt lịch dịch vụ không cần gọi điện.
                </CardDescription>
                <Link href="/products/zimo-ecommerce" className="inline-flex items-center gap-2 text-[var(--base-primary)] font-semibold hover:gap-4 transition-all">
                  Yêu cầu demo <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Card 2: B2B Pro */}
            <Card className="hover:-translate-y-2 hover:shadow-lg transition-all duration-300 border-[var(--greyscale-100)]">
              <CardHeader>
                <div className="w-16 h-16 bg-[var(--palette-green-bg)] rounded-2xl flex items-center justify-center text-[var(--palette-green-text)] mb-6">
                  <Package className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold">Zimo B2B Pro</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  Cho Nhà phân phối, Xưởng sản xuất. Đại lý tự đặt hàng, tra cứu tồn kho realtime, xem công nợ và chính sách chiết khấu cá nhân hóa.
                </CardDescription>
                <Link href="/products/zimo-ecommerce" className="inline-flex items-center gap-2 text-[var(--palette-green-text)] font-semibold hover:gap-4 transition-all">
                  Yêu cầu demo <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Card 3: Event & Game */}
            <Card className="hover:-translate-y-2 hover:shadow-lg transition-all duration-300 border-[var(--greyscale-100)]">
              <CardHeader>
                <div className="w-16 h-16 bg-[var(--palette-orange-bg)] rounded-2xl flex items-center justify-center text-[var(--palette-orange-text)] mb-6">
                  <Gift className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold">Zimo Event & Game</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  Vòng quay may mắn, Lì xì, Minigame thu thập data khách hàng tiềm năng (Leads) hiệu quả cho các chiến dịch Marketing, Lễ Tết.
                </CardDescription>
                <Link href="/features/mini-game" className="inline-flex items-center gap-2 text-[var(--palette-orange-text)] font-semibold hover:gap-4 transition-all">
                  Yêu cầu demo <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Split Section (#tinh-nang) */}
      <section id="tinh-nang" className="py-24 bg-[var(--base-background)] text-[var(--greyscale-900)] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[var(--primary-100)] rounded-full opacity-40 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[var(--primary-50)] rounded-full opacity-40 filter blur-3xl"></div>

        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--greyscale-200)]">
              <img
                src="https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/DashboardLightmode.png"
                alt="Analytics Dashboard"
                className="w-full transform hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--greyscale-900)]/10 via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold mb-8 leading-tight">Tại sao chọn Zimo thay vì tự xây dựng App?</h2>
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[var(--primary-200)] shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <Zap className="text-[var(--base-primary)] h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-[var(--greyscale-900)]">Triển khai thần tốc (3-7 ngày)</h4>
                  <p className="text-[var(--greyscale-500)] text-lg leading-relaxed">Sử dụng kho giao diện mẫu có sẵn. Không cần chờ đợi 3-6 tháng như làm App truyền thống.</p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[var(--primary-200)] shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <MessageCircle className="text-[var(--base-primary)] h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-[var(--greyscale-900)]">Tích hợp sâu ZNS & OA</h4>
                  <p className="text-[var(--greyscale-500)] text-lg leading-relaxed">Gửi tin nhắn CSKH tự động với chi phí rẻ hơn 60% so với SMS Brandname. Tỷ lệ đọc tin trên 90%.</p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[var(--primary-200)] shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <Coins className="text-[var(--base-primary)] h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-[var(--greyscale-900)]">Tối ưu chi phí vận hành</h4>
                  <p className="text-[var(--greyscale-500)] text-lg leading-relaxed">Không cần đội ngũ IT riêng. Chi phí duy trì hàng năm cực thấp dành cho SME.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (#bang-gia) */}
      <section id="bang-gia" className="py-24 bg-[var(--greyscale-50)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--greyscale-900)] mb-16">Bảng Giá Linh Hoạt</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Package */}
            <div className="bg-[var(--greyscale-0)] p-8 rounded-3xl shadow-sm border border-[var(--greyscale-200)] hover:shadow-xl transition duration-300 flex flex-col">
              <h3 className="text-xl font-bold text-[var(--greyscale-500)] mb-4 uppercase tracking-wider">Gói Cơ Bản</h3>
              <div className="text-5xl font-extrabold text-[var(--greyscale-900)] mb-6">Liên hệ<span className="text-lg text-[var(--greyscale-400)] font-normal">/năm</span></div>
              <ul className="text-left space-y-4 mb-10 text-[var(--greyscale-500)] flex-1">
                <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Giao diện cơ bản</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Thông tin doanh nghiệp</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Tích hợp Zalo OA</li>
                <li className="flex items-center text-[var(--greyscale-400)]"><XCircle className="mr-3 h-5 w-5" /> Tích điểm Loyalty</li>
              </ul>
              <Button variant="outline" className="w-full border-[var(--base-primary)] text-[var(--base-primary)]" href="https://zalo.me/0899111195" target="_blank">Chọn gói này</Button>
            </div>

            {/* Growth Package (Highlighted) */}
            <div className="bg-[var(--greyscale-0)] p-8 rounded-3xl shadow-2xl border-2 border-[var(--base-primary)] relative transform md:-translate-y-6 z-10 flex flex-col">
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
            <div className="bg-[var(--greyscale-0)] p-8 rounded-3xl shadow-sm border border-[var(--greyscale-200)] hover:shadow-xl transition duration-300 flex flex-col">
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
      </section>
    </div>
  );
}
