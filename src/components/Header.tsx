"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Phone, ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import Button from "@/components/Button";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        {
            label: "Sản phẩm",
            path: "/products",
            children: [
                { label: "Zimo Ecommerce", path: "/products/zimo-ecommerce", desc: "Tạo web bán hàng, Zalo Mini App" },
                { label: "Zimo Hotel", path: "/products/zimo-hotel", desc: "Phần mềm quản lý khách sạn" },
            ],
        },
        {
            label: "Tính năng",
            path: "/features",
            children: [
                { label: "Loyalty & Membership", path: "/features/loyalty-membership", desc: "Hệ thống tích điểm, thành viên" },
                { label: "Mini Game", path: "/features/mini-game", desc: "Tạo game trúng thưởng thu hút khách" },
                { label: "Voucher điện tử", path: "/features/voucher-management", desc: "Quản lý mã giảm giá, khuyến mãi" },
            ],
        },
        { label: "Bảng giá", path: "/pricing" },
        {
            label: "Tài nguyên",
            path: "/resources",
            children: [
                { label: "Blog", path: "/resources/blog", desc: "Kiến thức kinh doanh" },
                { label: "Hướng dẫn", path: "/resources/help-center", desc: "Tài liệu sử dụng phần mềm" },
                { label: "Showcase", path: "/resources/showcase", desc: "Khách hàng tiêu biểu" },
            ],
        },
        { label: "Liên hệ", path: "/contact" },
    ];

    return (
        <header
            className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled
                ? "border-[var(--greyscale-100)] bg-[var(--base-background)]/90 backdrop-blur-md"
                : "border-transparent bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 h-20 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/zimo-logo.png"
                        alt="Zimo Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                    <span className="text-2xl font-extrabold text-[var(--greyscale-900)] tracking-tight">
                        ZIMO.VN
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-8 font-medium text-[var(--greyscale-500)]">
                    {navLinks.map((item, i) => (
                        <div key={i} className="relative group">
                            <Link
                                href={item.children ? "#" : item.path}
                                className={`flex items-center gap-1 hover:text-[var(--base-primary)] transition py-2 ${pathname === item.path ? "text-[var(--base-primary)]" : ""
                                    }`}
                            >
                                {item.label}
                                {item.children && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                            </Link>

                            {/* Dropdown Menu */}
                            {item.children && (
                                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-64">
                                    <div className="bg-white rounded-xl shadow-xl border border-[var(--greyscale-100)] p-2 overflow-hidden">
                                        {item.children.map((child, j) => (
                                            <Link
                                                key={j}
                                                href={child.path}
                                                className="block p-3 rounded-lg hover:bg-[var(--greyscale-50)] transition group/item"
                                            >
                                                <div className="text-[var(--greyscale-900)] font-semibold group-hover/item:text-[var(--base-primary)] transition">
                                                    {child.label}
                                                </div>
                                                {child.desc && (
                                                    <div className="text-xs text-[var(--greyscale-500)] mt-1">
                                                        {child.desc}
                                                    </div>
                                                )}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="flex gap-3 items-center">

                    <Button
                        variant="outline"
                        className="hidden xl:inline-flex border-[var(--primary-100)] text-[var(--base-primary)] hover:bg-[var(--primary-50)]"
                        href="https://zalo.me/0899111195"
                        target="_blank"
                        leftIcon={<Phone className="h-4 w-4 animate-pulse" />}
                    >
                        0899.111.195
                    </Button>
                    <Button
                        variant="primary"
                        className="hidden lg:inline-flex shadow-md shadow-[var(--primary-200)]"
                        href="http://dashboard.zimo.vn"
                        target="_blank"
                        rightIcon={<ArrowRight className="h-4 w-4" />}
                    >
                        Dùng thử miễn phí
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-[var(--greyscale-900)]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-[var(--base-background)] border-b border-[var(--greyscale-100)] shadow-lg py-4 px-4 h-[calc(100vh-80px)] overflow-y-auto">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((item, i) => (
                            <div key={i} className="border-b border-[var(--greyscale-100)] pb-2 last:border-0">
                                {item.children ? (
                                    <div className="space-y-2">
                                        <div className="font-semibold text-[var(--greyscale-900)] py-2">{item.label}</div>
                                        <div className="pl-4 space-y-2 border-l-2 border-[var(--greyscale-100)]">
                                            {item.children.map((child, j) => (
                                                <Link
                                                    key={j}
                                                    href={child.path}
                                                    className="block py-2 text-[var(--greyscale-600)]"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.path}
                                        className="block py-2 font-medium text-[var(--greyscale-900)]"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="mt-4 flex flex-col gap-3">
                            <Button
                                variant="outline"
                                className="w-full justify-center"
                                href="https://zalo.me/0899111195"
                                target="_blank"
                                leftIcon={<Phone className="h-4 w-4" />}
                            >
                                Tư vấn: 0899.111.195
                            </Button>
                            <Button
                                variant="primary"
                                className="w-full justify-center"
                                href="http://dashboard.zimo.vn"
                                target="_blank"
                                rightIcon={<ArrowRight className="h-4 w-4" />}
                            >
                                Đăng ký dùng thử
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
