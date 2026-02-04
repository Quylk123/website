"use client";

import Link from "next/link";
import Image from "next/image";
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
import { motion, Variants } from "framer-motion";

// Animations
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="flex flex-col bg-[var(--base-background)] text-[var(--greyscale-900)] font-sans relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-[var(--greyscale-50)]">
        {/* Background Blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--primary-100)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[var(--primary-200)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-block py-1.5 px-4 rounded-full bg-[var(--primary-50)] border border-[var(--primary-100)] text-[var(--base-primary)] text-sm font-semibold mb-6 shadow-sm">
              🚀 Đối tác chuyển đổi số #1
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Nền tảng Mini App và{" "}
              <span className="text-[var(--base-primary)]">Quản lý Bán hàng</span>{" "}
              đa kênh
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-[var(--base-text-paragraph)] max-w-3xl mx-auto mb-8">
              Giải pháp toàn diện giúp doanh nghiệp SME xây dựng Zalo Mini App, Website bán hàng và quản lý vận hành trong 1 nền tảng.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center mb-10">
              <Button
                variant="primary"
                className="shadow-md shadow-[var(--primary-200)]"
                href="https://zalo.me/0899111195"
                target="_blank"
                leftIcon={<Zap className="w-5 h-5" />}
              >
                Tư vấn qua Zalo
              </Button>
              <Button
                variant="outline"
                className="border-[var(--greyscale-300)] hover:border-[var(--base-primary)]"
                href="/products/zimo-hotel"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Xem Zimo Hotel
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-[var(--base-background)]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            <div className="p-6 bg-[var(--greyscale-50)] rounded-2xl">
              <div className="text-4xl font-bold text-[var(--base-primary)] mb-2">50+</div>
              <div className="text-[var(--base-text-paragraph)]">Doanh nghiệp SME</div>
            </div>
            <div className="p-6 bg-[var(--greyscale-50)] rounded-2xl">
              <div className="text-4xl font-bold text-[var(--base-primary)] mb-2">200%</div>
              <div className="text-[var(--base-text-paragraph)]">Tăng trưởng doanh thu</div>
            </div>
            <div className="p-6 bg-[var(--greyscale-50)] rounded-2xl">
              <div className="text-4xl font-bold text-[var(--base-primary)] mb-2">3-7</div>
              <div className="text-[var(--base-text-paragraph)]">Ngày triển khai</div>
            </div>
            <div className="p-6 bg-[var(--greyscale-50)] rounded-2xl">
              <div className="text-4xl font-bold text-[var(--base-primary)] mb-2">90%</div>
              <div className="text-[var(--base-text-paragraph)]">Tỷ lệ hài lòng</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Updates - SEO/Marketing Agent */}
      <section className="py-16 bg-[var(--greyscale-50)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                📰 Cập Nhật Mới Nhất
              </h2>
              <Link
                href="/updates"
                className="inline-flex items-center gap-2 text-[var(--base-primary)] hover:underline font-medium"
              >
                Xem tất cả cập nhật
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Update 1 */}
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[var(--primary-50)] text-[var(--base-primary)] px-3 py-1 rounded-full text-xs font-semibold">
                      SEO
                    </span>
                    <span className="text-sm text-[var(--greyscale-400)]">Hôm nay</span>
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">
                    Thêm 3 bài Blog Chuẩn SEO
                  </CardTitle>
                  <CardDescription className="text-sm text-[var(--base-text-paragraph)] leading-relaxed">
                    Các bài blog về Zalo Mini App, khách sạn và CRM/Loyalty đã được tối ưu SEO hoàn chỉnh với meta tags, keywords và heading structure.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link href="/resources/blog" className="text-[var(--base-primary)] hover:underline text-sm font-medium">
                    Đọc bài blog →
                  </Link>
                </CardContent>
              </Card>

              {/* Update 2 */}
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[var(--palette-green-badge-bg)] text-[var(--palette-green-text)] px-3 py-1 rounded-full text-xs font-semibold">
                      Content
                    </span>
                    <span className="text-sm text-[var(--greyscale-400)]">Hôm nay</span>
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">
                    Thêm Hình Ảnh Cho Blog Khách Sạn
                  </CardTitle>
                  <CardDescription className="text-sm text-[var(--base-text-paragraph)] leading-relaxed">
                    Blog về khách sạn được bổ sung 6 ảnh chất lượng cao từ Unsplash để tăng tính thẩm mỹ và thu hút người đọc.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link href="/resources/blog/5-loi-sai-khi-xay-dung-zalo-mini-app-cho-khach-san" className="text-[var(--base-primary)] hover:underline text-sm font-medium">
                    Xem bài blog →
                  </Link>
                </CardContent>
              </Card>

              {/* Update 3 */}
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[var(--palette-orange-badge-bg)] text-[var(--palette-orange-text)] px-3 py-1 rounded-full text-xs font-semibold">
                      Branding
                    </span>
                    <span className="text-sm text-[var(--greyscale-400)]">Hôm nay</span>
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">
                    Xóa Tên Cá Nhân Khỏi Website
                  </CardTitle>
                  <CardDescription className="text-sm text-[var(--base-text-paragraph)] leading-relaxed">
                    Đã xóa các tên cá nhân "Thắng" và "Nguyễn Minh Thắng" khỏi website để giữ tính chuyên nghiệp và khách quan.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-2 text-[var(--base-primary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--palette-green-text)]" />
                    <span className="text-sm font-semibold">Hoàn thành</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 bg-[var(--base-background)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sản Phẩm Chủ Lực
            </h2>
            <p className="text-[var(--base-text-paragraph)] max-w-2xl mx-auto">
              Giải pháp chuyên biệt cho từng ngành nghề, tối ưu hiệu quả.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product 1: Zimo Hotel */}
            <motion.div variants={zoomIn}>
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 border border-[var(--greyscale-100)]">
                <div className="h-2 w-full bg-[var(--palette-blue-bg)]"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-[var(--palette-blue-badge-bg)] rounded-full flex items-center justify-center">
                      <Headset className="w-6 h-6 text-[var(--palette-blue-text)]" />
                    </div>
                    <span className="bg-[var(--palette-blue-badge-bg)] text-[var(--palette-blue-text)] px-3 py-1 rounded-full text-sm font-medium">
                      Phổ biến
                    </span>
                  </div>
                  <CardTitle className="text-3xl font-bold mb-2 group-hover:text-[var(--base-primary)] transition-colors">
                    Zimo Hotel
                  </CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    Phần mềm quản lý khách sạn toàn diện với Zalo Mini App tích hợp sẵn. Đặt phòng, quản lý phòng, tích điểm - tất cả trong 1 nền tảng.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--palette-blue-text)] mt-1 flex-shrink-0" />
                      <span className="text-[var(--base-text-paragraph)]">Sơ đồ phòng trực quan (Room Plan)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--palette-blue-text)] mt-1 flex-shrink-0" />
                      <span className="text-[var(--base-text-paragraph)]">Đặt phòng & Check-in/out</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--palette-blue-text)] mt-1 flex-shrink-0" />
                      <span className="text-[var(--base-text-paragraph)]">Hệ thống tích điểm (Loyalty)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--palette-blue-text)] mt-1 flex-shrink-0" />
                      <span className="text-[var(--base-text-paragraph)]">Tích hợp PMS/POS phổ biến</span>
                    </li>
                  </ul>
                  <Link href="/products/zimo-hotel" className="w-full inline-flex justify-center items-center gap-2 bg-[var(--palette-blue-bg)] text-[var(--palette-blue-text)] py-3 rounded-xl font-bold hover:bg-[var(--palette-blue-text)] hover:text-white transition-all mt-4">
                    Xem chi tiết Zimo Hotel
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Product 2: Zimo Ecommerce */}
            <motion.div variants={zoomIn}>
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 border border-[var(--greyscale-100)]">
                <div className="h-2 w-full bg-[var(--palette-green-bg)]"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-[var(--palette-green-badge-bg)] rounded-full flex items-center justify-center">
                      <Package className="w-6 h-6 text-[var(--palette-green-text)]" />
                    </div>
                    <span className="bg-[var(--palette-green-badge-bg)] text-[var(--palette-green-text)] px-3 py-1 rounded-full text-sm font-medium">
                      Mới
                    </span>
                  </div>
                  <CardTitle className="text-3xl font-bold mb-2 group-hover:text-[var(--base-primary)] transition-colors">
                    Zimo Ecommerce
                  </CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    Tạo website bán hàng đa kênh với Zalo Mini App, CRM tích điểm và quản lý đơn hàng tự động. Tăng doanh thu 200%.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--palette-green-text)] mt-1 flex-shrink-0" />
                      <span className="text-[var(--base-text-paragraph)]">Website bán hàng đa kênh</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--palette-green-text)] mt-1 flex-shrink-0" />
                      <span className="text-[var(--base-text-paragraph)]">Zalo Mini App tích hợp</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--palette-green-text)] mt-1 flex-shrink-0" />
                      <span className="text-[var(--base-text-paragraph)]">CRM & ZNS tự động</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--palette-green-text)] mt-1 flex-shrink-0" />
                      <span className="text-[var(--base-text-paragraph)]">Loyalty & Tích điểm</span>
                    </li>
                  </ul>
                  <Link href="/products/zimo-ecommerce" className="w-full inline-flex justify-center items-center gap-2 bg-[var(--palette-green-bg)] text-[var(--palette-green-text)] py-3 rounded-xl font-bold hover:bg-[var(--palette-green-text)] hover:text-white transition-all mt-4">
                    Xem chi tiết Zimo Ecommerce
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Split Section */}
      <section id="tinh-nang" className="py-24 px-4 bg-[var(--greyscale-50)] text-[var(--greyscale-900)] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[var(--primary-100)] rounded-full opacity-40 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[var(--primary-50)] rounded-full opacity-40 filter blur-3xl"></div>

        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={zoomIn}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--greyscale-200)]">
              <img
                src="https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/DashboardLightmode.png"
                alt="Analytics Dashboard"
                className="w-full transform hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:w-1/2"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-extrabold mb-8 leading-tight">
              Tại sao chọn Zimo thay vì tự xây dựng App?
            </motion.h2>
            <div className="space-y-8">
              <motion.div variants={fadeInUp} className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[var(--primary-200)] shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <Zap className="text-[var(--base-primary)] h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-[var(--greyscale-900)]">Triển khai thần tốc (3-7 ngày)</h4>
                  <p className="text-[var(--base-text-paragraph)] text-lg leading-relaxed">Sử dụng kho giao diện mẫu có sẵn. Không cần chờ đợi 3-6 tháng như làm App truyền thống.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[var(--primary-200)] shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <MessageCircle className="text-[var(--base-primary)] h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-[var(--greyscale-900)]">Tích hợp sâu ZNS & OA</h4>
                  <p className="text-[var(--base-text-paragraph)] text-lg leading-relaxed">Gửi tin nhắn CSKH tự động với chi phí rẻ hơn 60% so với SMS Brandname. Tỷ lệ đọc tin trên 90%.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[var(--primary-200)] shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <Coins className="text-[var(--base-primary)] h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-[var(--greyscale-900)]">Tối ưu chi phí vận hành</h4>
                  <p className="text-[var(--base-text-paragraph)] text-lg leading-relaxed">Không cần đội ngũ IT riêng. Chi phí duy trì hàng năm cực thấp dành cho SME.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="bang-gia" className="py-24 bg-[var(--base-background)]">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-extrabold mb-16"
          >
            Bảng Giá Linh Hoạt
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Basic Package */}
            <motion.div variants={fadeInUp} className="bg-[var(--greyscale-0)] p-8 rounded-3xl shadow-sm border border-[var(--greyscale-200)] hover:shadow-xl transition duration-300 flex flex-col h-full">
              <h3 className="text-xl font-bold text-[var(--greyscale-500)] mb-4 uppercase tracking-wider">Gói Cơ Bản</h3>
              <div className="text-5xl font-extrabold text-[var(--greyscale-900)] mb-6">Liên hệ<span className="text-lg text-[var(--greyscale-400)] font-normal">/năm</span></div>
              <ul className="text-left space-y-4 mb-10 text-[var(--base-text-paragraph)] flex-1">
                <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Giao diện cơ bản</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Thông tin doanh nghiệp</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Tích hợp Zalo OA</li>
                <li className="flex items-center"><XCircle className="text-[var(--greyscale-400)] mr-3 h-5 w-5" /> Tích điểm Loyalty</li>
              </ul>
              <Button variant="outline" className="w-full border-[var(--base-primary)] text-[var(--base-primary)]" href="https://zalo.me/0899111195" target="_blank">Chọn gói này</Button>
            </motion.div>

            {/* Growth Package (Highlighted) */}
            <motion.div variants={fadeInUp} className="bg-[var(--greyscale-0)] p-8 rounded-3xl shadow-2xl border-2 border-[var(--base-primary)] relative transform md:-translate-y-6 z-10 flex flex-col h-full">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--base-primary)] text-white px-6 py-2 rounded-full text-sm font-bold uppercase shadow-md">Khuyên dùng</div>
              <h3 className="text-2xl font-bold text-[var(--base-primary)] mb-2 uppercase tracking-wider mt-6">Gói Tăng Trưởng</h3>
              <div className="text-5xl font-extrabold text-[var(--greyscale-900)] mb-6">Liên hệ<span className="text-lg text-[var(--greyscale-400)] font-normal">/năm</span></div>
              <ul className="text-left space-y-4 mb-10 text-[var(--base-text-paragraph)] flex-1">
                <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> <strong>Mọi tính năng Gói Cơ bản</strong></li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Tính năng Tích điểm (Loyalty)</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Gửi tin ZNS tự động</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Báo cáo thống kê cơ bản</li>
              </ul>
              <Button variant="primary" className="w-full" href="https://zalo.me/0899111195" target="_blank">Liên hệ báo giá ưu đãi</Button>
            </motion.div>

            {/* Enterprise Package */}
            <motion.div variants={fadeInUp} className="bg-[var(--greyscale-0)] p-8 rounded-3xl shadow-sm border border-[var(--greyscale-200)] hover:shadow-xl transition duration-300 flex flex-col h-full">
              <h3 className="text-xl font-bold text-[var(--greyscale-500)] mb-4 uppercase tracking-wider">Gói Doanh Nghiệp</h3>
              <div className="text-5xl font-extrabold text-[var(--greyscale-900)] mb-6">Liên hệ<span className="text-lg text-[var(--greyscale-400)] font-normal">/năm</span></div>
              <ul className="text-left space-y-4 mb-10 text-[var(--base-text-paragraph)] flex-1">
                <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> <strong>Thiết kế riêng (Tailor-made)</strong></li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Tích hợp CRM/ERP/POS</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Sync dữ liệu Real-time</li>
                <li className="flex items-center"><CheckCircle2 className="text-[var(--base-primary)] mr-3 h-5 w-5" /> Hỗ trợ kỹ thuật ưu tiên 24/7</li>
              </ul>
              <Button variant="outline" className="w-full border-[var(--greyscale-800)] text-[var(--greyscale-800)]" href="https://zalo.me/0899111195" target="_blank">Tư vấn chuyên sâu</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-[var(--greyscale-50)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Khách Hàng Nói Về Zimo
            </h2>
            <p className="text-[var(--base-text-paragraph)] max-w-2xl mx-auto">
              Hơn 50 doanh nghiệp SME đã tin tưởng và lựa chọn Zimo làm đối tác chuyển đổi số.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary-200)] to-[var(--primary-400)]"></div>
                      <div>
                        <div className="font-bold text-[var(--greyscale-900)]">Khách sạn {["A", "B", "C"][i]}</div>
                        <div className="text-sm text-[var(--greyscale-500)]">Chủ {["Luxury", "Boutique", "Business"][i]}</div>
                      </div>
                    </div>
                    <p className="text-[var(--base-text-paragraph)] mb-4 italic">
                      "{[
                        "Từ khi dùng Zimo, tỷ lệ đặt phòng qua Zalo tăng từ 5% lên 65%.",
                        "Giảm 70% thời gian lễ tân nhờ Room Plan trực quan.",
                        "Hệ thống tích điểm giúp khách quay lại 40% nhiều hơn.",
                      ][i]}"
                    </p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[var(--palette-yellow-500)]">
                          <path d="M12 2l3.09 6.26-5.47-1.3-2.18-3.63a1 1 0 0 1 .97-2.06L12 2zm1.41 13.97L4.66 5.56a1 1 0 0 1-.03-1.06l8.75 7.79a1 1 0 0 1-1.41 0L12 13.97z" />
                        </svg>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-[var(--base-primary)] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 border-4 border-white/20 rounded-full"></div>
          <div className="absolute top-20 right-20 w-32 h-32 border-4 border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 left-40 w-24 h-24 border-4 border-white/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Sẵn Sàng Chuyển Đổi Số?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
              Hãy bắt đầu ngay hôm nay để tăng doanh thu và tối ưu quy trình vận hành của doanh nghiệp bạn.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="primary"
                className="bg-white text-[var(--base-primary)] hover:bg-white/90 shadow-md"
                href="https://zalo.me/0899111195"
                target="_blank"
                leftIcon={<Zap className="w-5 h-5" />}
              >
                Tư vấn qua Zalo
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--base-primary)]"
                href="/products"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Xem giải pháp chi tiết
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
