import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, User, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)] py-16 text-sm transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Image
                                src="/zimo-logo.png"
                                alt="Zimo Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                            <span className="text-2xl font-extrabold text-[var(--footer-title)] tracking-tight">
                                ZIMO.VN
                            </span>
                        </Link>
                        <p className="mb-6 text-[var(--footer-text)] text-lg leading-relaxed pr-8">
                            Đối tác tin cậy giúp doanh nghiệp SME chuyển đổi số, tối ưu quy trình
                            chăm sóc khách hàng và gia tăng doanh số bền vững trên nền tảng Zalo.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-[var(--greyscale-200)] text-[var(--greyscale-600)] flex items-center justify-center hover:bg-[var(--base-primary)] hover:text-white transition"
                            >
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-[var(--greyscale-200)] text-[var(--greyscale-600)] flex items-center justify-center hover:bg-[var(--base-primary)] hover:text-white transition"
                            >
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[var(--footer-title)] font-bold text-lg mb-6 uppercase tracking-wider">
                            Liên Hệ Hỗ Trợ
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:0899111195"
                                    className="flex items-center hover:text-[var(--base-primary)] transition font-semibold"
                                >
                                    <Phone className="mr-3 w-5 h-5" /> 0899.111.195
                                </a>
                            </li>
                            <li className="flex items-center hover:text-[var(--base-primary)] transition">
                                <Mail className="mr-3 w-5 h-5" /> contact@zimo.vn
                            </li>
                            <li className="flex items-start hover:text-[var(--base-primary)] transition">
                                <MapPin className="mr-3 w-5 h-5 mt-1" /> TP. Hồ Chí Minh, Việt Nam
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[var(--footer-title)] font-bold text-lg mb-6 uppercase tracking-wider">
                            Giải Pháp
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/products/zimo-ecommerce"
                                    className="hover:text-[var(--base-primary)] transition flex items-center"
                                >
                                    <ChevronRight className="h-3 w-3 mr-2" /> Zimo Ecommerce
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products/zimo-hotel"
                                    className="hover:text-[var(--base-primary)] transition flex items-center"
                                >
                                    <ChevronRight className="h-3 w-3 mr-2" /> Zimo Hotel
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/features/mini-game"
                                    className="hover:text-[var(--base-primary)] transition flex items-center"
                                >
                                    <ChevronRight className="h-3 w-3 mr-2" /> Zimo Gamification
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/features/loyalty-membership"
                                    className="hover:text-[var(--base-primary)] transition flex items-center"
                                >
                                    <ChevronRight className="h-3 w-3 mr-2" /> Loyalty System
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pricing"
                                    className="hover:text-[var(--base-primary)] transition flex items-center"
                                >
                                    <ChevronRight className="h-3 w-3 mr-2" /> Bảng giá dịch vụ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div >

                <div className="border-t border-[var(--greyscale-200)] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[var(--greyscale-500)]">
                    <p>&copy; 2026 Zimo.vn. Bảo lưu mọi quyền.</p>
                    <p>
                        Phát triển bởi{" "}
                        <span className="text-[var(--base-primary)] font-semibold">
                            Zimo Team
                        </span>
                    </p>
                </div>
            </div >
        </footer >
    );
}
