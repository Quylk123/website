"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";

// Blog posts data with updated slugs
const blogPosts = [
    {
        id: 1,
        slug: "zalo-mini-app-la-gi",
        title: "Zalo Mini App là gì? Tại sao doanh nghiệp SME cần ngay?",
        excerpt: "Khám phá sức mạnh của Zalo Mini App - công cụ giúp doanh nghiệp SME tăng trưởng 200% trong 3 tháng với chi phí tối ưu.",
        category: "Chuyển đổi số",
        readTime: "8 phút",
        publishDate: "03/02/2026",
        featured: true,
    },
    {
        id: 2,
        slug: "5-loi-sai-khi-xay-dung-zalo-mini-app-cho-khach-san",
        title: "5 Lỗi Sai Khi Xây Dựng Zalo Mini App Cho Khách Sạn",
        excerpt: "Tránh những sai lầm tốn kém khi triển khai Zalo Mini App cho khách sạn. Học từ kinh nghiệm thực tế của 50+ khách hàng.",
        category: "Khách sạn",
        readTime: "7 phút",
        publishDate: "03/02/2026",
        featured: false,
    },
    {
        id: 3,
        slug: "tang-don-hang-ban-qua-zalo-voi-crm-loyalty-tich-diem",
        title: "Tăng Đơn Hàng Bán Qua Zalo Với CRM & Loyalty Tích Điểm",
        excerpt: "Chiến thuật CRM & Loyalty giúp tăng tỷ lệ đơn hàng lặp lên 40%. Đi kèm case study thực tế.",
        category: "Marketing",
        readTime: "6 phút",
        publishDate: "03/02/2026",
        featured: false,
    },
];

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
            staggerChildren: 0.15
        }
    }
};

export default function BlogPage() {
    return (
        <div className="flex flex-col bg-[var(--base-background)] text-[var(--greyscale-900)] font-sans min-h-screen">
            {/* Header Section */}
            <section className="pt-20 pb-16 bg-[var(--greyscale-50)]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="inline-block py-1.5 px-4 rounded-full bg-[var(--primary-50)] border border-[var(--primary-100)] text-[var(--base-primary)] text-sm font-semibold mb-6 shadow-sm">
                            📚 Kiến thức & Thủ thuật
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Blog & Kiến Thức Kinh Doanh
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl text-[var(--base-text-paragraph)] max-w-3xl">
                            Chia sẻ kinh nghiệm thực chiến về Zalo Mini App, chuyển đổi số và tăng trưởng doanh thu cho SME.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <Link href={`/resources/blog/${blogPosts[0].slug}`}>
                            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-[var(--base-primary)] group cursor-pointer">
                                <div className="bg-[var(--primary-50)] p-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="bg-[var(--base-primary)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            Nổi bật
                                        </span>
                                        <span className="text-[var(--base-primary)] text-sm font-medium">
                                            {blogPosts[0].category}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 group-hover:text-[var(--base-primary)] transition-colors">
                                        {blogPosts[0].title}
                                    </h2>
                                    <p className="text-lg text-[var(--base-text-paragraph)] mb-6 leading-relaxed">
                                        {blogPosts[0].excerpt}
                                    </p>
                                    <div className="flex items-center gap-6 text-[var(--greyscale-500)]">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4" />
                                            <span className="text-sm">{blogPosts[0].publishDate}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4" />
                                            <span className="text-sm">{blogPosts[0].readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 px-4 bg-[var(--base-background)]">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {blogPosts.slice(1).map((post) => (
                            <motion.div key={post.id} variants={fadeInUp}>
                                <Link href={`/resources/blog/${post.slug}`}>
                                    <Card className="h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-[var(--greyscale-100)] bg-[var(--greyscale-0)] group">
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="bg-[var(--palette-blue-badge-bg)] text-[var(--palette-blue-text)] px-3 py-1 rounded-full text-sm font-medium">
                                                {post.category}
                                            </span>
                                            <div className="flex items-center gap-3 text-[var(--greyscale-400)] text-xs">
                                                <span>{post.publishDate}</span>
                                                <span>•</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                        <CardTitle className="text-xl font-bold mb-3 group-hover:text-[var(--base-primary)] transition-colors line-clamp-2">
                                            {post.title}
                                        </CardTitle>
                                        <CardDescription className="text-[var(--base-text-paragraph)] leading-relaxed line-clamp-3">
                                            {post.excerpt}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center gap-2 text-[var(--base-primary)] font-semibold">
                                            Đọc thêm
                                            <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                    </motion.div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 px-4 bg-[var(--greyscale-50)]">
                <div className="container mx-auto max-w-3xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-[var(--primary-50)] rounded-3xl p-8 md:p-12 text-center"
                    >
                        <h3 className="text-3xl font-bold mb-4">
                            Đăng Ký Nhận Kiến Thức Mới
                        </h3>
                        <p className="text-[var(--base-text-paragraph)] mb-8">
                            Nhận bản tin hàng tuần với thủ thuật, case study và cập nhật mới nhất về Zalo Mini App.
                        </p>
                        <a
                            href="https://zalo.me/0899111195"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[var(--base-primary)] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            Đăng ký qua Zalo
                            <ArrowRight className="h-5 w-5" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
