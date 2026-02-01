"use client";

import Image from "next/image";
import {
    ArrowRight, CheckCircle2, LayoutDashboard, CalendarRange,
    BedDouble, Settings2, ShoppingBag, Moon, Sun,
    BarChart3, ShieldCheck, Zap, Smartphone, QrCode
} from "lucide-react";
import Button from "@/components/Button";
import { useState } from "react";
import ImagePreview from "@/components/ImagePreview";

// --- DATA: IMAGES ---
const IMAGES = {
    dashboard: {
        dark: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/DashboardDarkmode.png",
        light: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/DashboardLightmode.png"
    },
    bookings: {
        dark: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/Bookings-Darkmode.png",
        light: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/Bookings-lightmode.png"
    },
    roomAssignments: {
        darkTimeline: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/room-assignments-khachvanglai-Darkmode-timeline.png",
        lightTimeline: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/room-assignments-khachvanglai-Lightmode-timeline.png",
    },
    rooms: {
        dark: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/RoomsDarkMode.png",
        light: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/RoomsLightMode.png"
    },
    pricing: {
        dark: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/pricing-config-darkmode.png",
        light: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/pricing-config-lightmode.png"
    },
    products: {
        dark: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/Product-Darkmode.png",
        light: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/Product-Lightmode.png"
    }
};

const MOBILE_APPS = [
    {
        title: "Trang chủ",
        desc: "Tổng quan & Tìm kiếm",
        light: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/mobiletrangchulightmode.png",
        dark: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/mobiletrangchudarkmode.png"
    },
    {
        title: "Chi tiết phòng",
        desc: "Hình ảnh & Tiện nghi",
        light: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/mobilechitietphonglightmode.png",
        dark: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/mobilechitietphongdarkmode.png"
    },
    {
        title: "Đặt phòng",
        desc: "Thông tin Booking",
        light: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/mobilechitietdatphonglightmode.png",
        dark: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/mobilechitietdatphongdarkmode.png"
    },
    {
        title: "Dịch vụ",
        desc: "Menu & Minibar",
        light: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/mobiledichvulightmode.png",
        dark: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/mobiledichvudarkmode.png"
    },
    {
        title: "Cá nhân",
        desc: "Lịch sử & Ví Zimo",
        light: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/mobilecanhanlightmode.png",
        dark: "https://rblawnlhkgwmdbstkhxp.supabase.co/storage/v1/object/public/PublicImage/websiteimg/mobilecanhandarkmode.png"
    }
];

// --- COMPONENT: BADGE ---
const Badge = ({ children, icon: Icon, color = "blue" }: { children: React.ReactNode, icon?: any, color?: "blue" | "green" | "purple" }) => {
    const colorClasses = {
        blue: "bg-[var(--palette-blue-bg)] text-[var(--palette-blue-text)] border-[var(--palette-blue-border)]",
        green: "bg-[var(--palette-green-bg)] text-[var(--palette-green-text)] border-[var(--palette-green-border)]",
        purple: "bg-[var(--palette-purple-bg)] text-[var(--palette-purple-text)] border-[var(--palette-purple-border)]",
    };

    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${colorClasses[color]} text-xs font-bold uppercase tracking-wider shadow-sm`}>
            {Icon && <Icon className="w-3.5 h-3.5" />}
            {children}
        </div>
    );
};

// --- COMPONENT: BENTO CARD ---
const BentoCard = ({ title, description, imageDark, imageLight, icon: Icon, iconColor = "blue", className = "", onImageClick }: any) => {
    const iconBgClasses: any = {
        blue: "bg-[var(--palette-blue-bg)] text-[var(--palette-blue-text)]",
        orange: "bg-[var(--palette-orange-bg)] text-[var(--palette-orange-text)]",
        green: "bg-[var(--palette-green-bg)] text-[var(--palette-green-text)]",
        purple: "bg-[var(--palette-purple-bg)] text-[var(--palette-purple-text)]",
    };

    return (
        <div className={`group relative overflow-hidden rounded-3xl border border-[var(--greyscale-200)] bg-[var(--greyscale-0)] shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
            <div className="p-8 pb-0 flex flex-col h-full">
                <div className={`mb-4 w-12 h-12 rounded-2xl flex items-center justify-center ${iconBgClasses[iconColor] || iconBgClasses.blue} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--greyscale-900)] mb-3">{title}</h3>
                <p className="text-[var(--greyscale-500)] mb-8 leading-relaxed">{description}</p>
                <div
                    className="mt-auto relative w-full rounded-t-xl overflow-hidden shadow-2xl border-t border-l border-r border-[var(--greyscale-200)] translate-y-2 group-hover:translate-y-0 transition-transform duration-500 bg-[var(--greyscale-50)] cursor-zoom-in"
                    onClick={onImageClick}
                >
                    <div className="block dark:hidden">
                        <Image src={imageLight} alt={title} width={600} height={400} className="w-full h-auto object-cover object-top" />
                    </div>
                    <div className="hidden dark:block">
                        <Image src={imageDark} alt={title} width={600} height={400} className="w-full h-auto object-cover object-top" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- COMPONENT: PHONE MOCKUP ---
// Frame điện thoại CSS thuần để hiển thị ảnh dọc
const PhoneMockup = ({ lightSrc, darkSrc, title, desc, onPreview }: any) => {
    return (
        <div
            className="flex flex-col items-center gap-4 group cursor-pointer"
            onClick={onPreview}
        >
            {/* OUTER FRAME (stroke outside) */}
            <div className="relative w-[430px] h-[932px] origin-top group-hover:-translate-y-2 transition-transform duration-300">
                {/* Phone border */}
                <div className="absolute inset-0 rounded-[1.7rem] border-[4px] border-[var(--greyscale-800)] pointer-events-none" />

                {/* PHONE BODY — đổi sang flex centering cho parent */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[420px] h-[920px] rounded-[1.5rem] bg-[var(--greyscale-900)] overflow-hidden shadow-2xl">

                        {/* Dynamic Island */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[var(--greyscale-800)] rounded-b-xl z-20" />

                        {/* Screen */}
                        <div className="relative w-full h-full bg-[var(--greyscale-50)]">
                            <div className="block dark:hidden w-full h-full">
                                <Image src={lightSrc} alt={title} fill className="object-contain" />
                            </div>
                            <div className="hidden dark:block w-full h-full">
                                <Image src={darkSrc} alt={title} fill className="object-contain" />
                            </div>
                        </div>

                        {/* Reflection */}
                        <div className="absolute inset-0 rounded-[1.5rem] shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] pointer-events-none z-10" />
                    </div>
                </div>
            </div>

            {/* Text */}
            <div className="text-center">
                <h4 className="text-lg font-bold text-[var(--greyscale-900)]">{title}</h4>
                <p className="text-sm text-[var(--greyscale-500)]">{desc}</p>
            </div>
        </div>
    )
}


export default function ClientPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Helper since we are using CSS classes for dark/light visibility
    const openPreview = (src: string) => setSelectedImage(src);

    const handleMobilePreview = (light: string, dark: string) => {
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            openPreview(dark);
        } else {
            openPreview(light);
        }
    }

    return (
        <div className="bg-[var(--base-background)] text-[var(--greyscale-900)] font-sans selection:bg-[var(--primary-100)] selection:text-[var(--base-primary)]">

            {/* --- HERO SECTION --- */}
            <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,var(--greyscale-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--greyscale-200)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 dark:opacity-5"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[var(--base-primary)]/10 blur-[120px] rounded-full -z-10" />

                <div className="container mx-auto px-4 text-center max-w-6xl relative z-10">
                    <Badge icon={Zap} color="blue">Phiên bản mới 2.0</Badge>

                    <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--greyscale-900)] leading-[1.1]">
                        Quản lý khách sạn <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--base-primary)] to-[var(--palette-teal-text)]">
                            Chưa bao giờ dễ thế
                        </span>
                    </h1>

                    <p className="mt-6 text-lg sm:text-xl md:text-2xl text-[var(--greyscale-500)] max-w-3xl mx-auto leading-relaxed">
                        Tất cả trong một: Booking, Housekeeping, Minibar & Báo cáo.
                        Giao diện chuẩn UX/UI giúp nhân viên thành thạo chỉ sau 15 phút.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            variant="primary"
                            size="large"
                            href="http://dashboard.zimo.vn"
                            target="_blank"
                            className="w-full sm:w-auto px-10 py-4 text-lg shadow-lg shadow-[var(--primary-200)]"
                            rightIcon={<ArrowRight className="w-5 h-5" />}
                        >
                            Dùng thử miễn phí
                        </Button>
                        <Button
                            variant="outline"
                            size="large"
                            href="https://zalo.me/0899111195"
                            target="_blank"
                            className="w-full sm:w-auto px-10 py-4 text-lg border-[var(--greyscale-200)] text-[var(--greyscale-900)] hover:bg-[var(--greyscale-50)]"
                        >
                            Xem Demo
                        </Button>
                    </div>
                </div>

                <div className="mt-20 relative mx-auto w-full max-w-5xl group cursor-zoom-in" >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[var(--base-primary)] to-[var(--palette-teal-text)] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--greyscale-200)] bg-[var(--greyscale-0)]">
                        <div className="h-8 bg-[var(--greyscale-50)] border-b border-[var(--greyscale-200)] flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-[var(--palette-red-bg)] border border-[var(--palette-red-border)]"></div>
                            <div className="w-3 h-3 rounded-full bg-[var(--palette-yellow-bg)] border border-[var(--palette-yellow-border)]"></div>
                            <div className="w-3 h-3 rounded-full bg-[var(--palette-green-bg)] border border-[var(--palette-green-border)]"></div>
                        </div>
                        <div className="block dark:hidden" onClick={() => openPreview(IMAGES.dashboard.light)}>
                            <Image src={IMAGES.dashboard.light} alt="Dashboard" width={1400} height={900} priority className="w-full h-auto" />
                        </div>
                        <div className="hidden dark:block" onClick={() => openPreview(IMAGES.dashboard.dark)}>
                            <Image src={IMAGES.dashboard.dark} alt="Dashboard" width={1400} height={900} priority className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION: BENTO GRID FEATURES --- */}
            <section className="py-24 bg-[var(--greyscale-50)]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--greyscale-900)] tracking-tight">
                            Mọi tính năng bạn cần. <br />
                            <span className="text-[var(--greyscale-400)]">Không có sự phức tạp.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[500px]">
                        {/* 1. ROOM ASSIGNMENT */}
                        <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-[var(--greyscale-200)] bg-[var(--greyscale-0)] shadow-lg hover:shadow-xl transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--palette-blue-bg)]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="p-10 h-full flex flex-col">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-[var(--palette-blue-bg)] text-[var(--palette-blue-text)]">
                                        <CalendarRange className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--greyscale-900)]">Timeline Xếp phòng thông minh</h3>
                                </div>
                                <p className="text-[var(--greyscale-500)] max-w-md mb-8">Kéo thả để xếp phòng. Nhìn thấy ngay khoảng trống để lấp đầy khách vãng lai. Tối ưu công suất phòng lên đến 100%.</p>
                                <div className="flex-1 relative w-full rounded-tl-2xl overflow-hidden shadow-2xl border-t border-l border-[var(--greyscale-200)] cursor-zoom-in">
                                    <div className="block dark:hidden h-full" onClick={() => openPreview(IMAGES.roomAssignments.lightTimeline)}>
                                        <Image src={IMAGES.roomAssignments.lightTimeline} alt="Timeline" fill className="object-cover object-left-top" />
                                    </div>
                                    <div className="hidden dark:block h-full" onClick={() => openPreview(IMAGES.roomAssignments.darkTimeline)}>
                                        <Image src={IMAGES.roomAssignments.darkTimeline} alt="Timeline" fill className="object-cover object-left-top" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. BOOKINGS */}
                        <BentoCard
                            title="Quản lý Booking"
                            description="Theo dõi trạng thái: Đặt cọc, Check-in, Check-out, Hủy, No-show."
                            imageLight={IMAGES.bookings.light}
                            imageDark={IMAGES.bookings.dark}
                            icon={ShieldCheck}
                            iconColor="green"
                            className="md:col-span-1"
                            onImageClick={() => handleMobilePreview(IMAGES.bookings.light, IMAGES.bookings.dark)}
                        />

                        {/* 3. PRICING */}
                        <BentoCard
                            title="Cấu hình giá"
                            description="Linh hoạt tận cùng: Giá giờ, qua đêm, lễ tết. Tự động tính tiền."
                            imageLight={IMAGES.pricing.light}
                            imageDark={IMAGES.pricing.dark}
                            icon={Settings2}
                            iconColor="purple"
                            className="md:col-span-1"
                            onImageClick={() => handleMobilePreview(IMAGES.pricing.light, IMAGES.pricing.dark)}
                        />

                        {/* 4. PRODUCTS & ROOMS */}
                        <div className="md:col-span-2 flex flex-col md:flex-row gap-6">
                            <div className="flex-1 rounded-3xl border border-[var(--greyscale-200)] bg-[var(--greyscale-0)] p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-4"><ShoppingBag className="w-10 h-10 text-[var(--palette-orange-text)]" /></div>
                                <h3 className="text-xl font-bold mb-2 text-[var(--greyscale-900)]">Bán hàng & Minibar</h3>
                                <p className="text-sm text-[var(--greyscale-500)] mb-4">Quản lý kho nước ngọt, mì ly, dịch vụ giặt ủi chặt chẽ.</p>
                                <div className="rounded-lg overflow-hidden border border-[var(--greyscale-100)] aspect-video relative cursor-zoom-in">
                                    <div className="block dark:hidden h-full relative" onClick={() => openPreview(IMAGES.products.light)}><Image src={IMAGES.products.light} alt="Products" fill className="object-cover" /></div>
                                    <div className="hidden dark:block h-full relative" onClick={() => openPreview(IMAGES.products.dark)}><Image src={IMAGES.products.dark} alt="Products" fill className="object-cover" /></div>
                                </div>
                            </div>

                            <div className="flex-1 rounded-3xl border border-[var(--greyscale-200)] bg-[var(--greyscale-0)] p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-4"><BedDouble className="w-10 h-10 text-[var(--palette-teal-text)]" /></div>
                                <h3 className="text-xl font-bold mb-2 text-[var(--greyscale-900)]">Quản lý buồng phòng</h3>
                                <p className="text-sm text-[var(--greyscale-500)] mb-4">Trạng thái sạch/bẩn, đang sửa chữa. Phân công dọn dẹp.</p>
                                <div className="rounded-lg overflow-hidden border border-[var(--greyscale-100)] aspect-video relative cursor-zoom-in">
                                    <div className="block dark:hidden h-full relative" onClick={() => openPreview(IMAGES.rooms.light)}><Image src={IMAGES.rooms.light} alt="Rooms" fill className="object-cover" /></div>
                                    <div className="hidden dark:block h-full relative" onClick={() => openPreview(IMAGES.rooms.dark)}><Image src={IMAGES.rooms.dark} alt="Rooms" fill className="object-cover" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION: MINI APP MOBILE --- */}
            <section className="py-24 bg-[var(--base-background)] relative overflow-hidden border-t border-[var(--greyscale-100)]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <Badge icon={Smartphone} color="purple">Zalo Mini App</Badge>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--greyscale-900)] tracking-tight">
                                Trải nghiệm hoàn hảo <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                                    ngay trên di động
                                </span>
                            </h2>
                            <p className="text-lg text-[var(--greyscale-500)]">
                                Không cần cài đặt. Khách hàng và Nhân viên có thể truy cập đặt phòng, gọi dịch vụ, xem lịch sử ngay trên Zalo.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Button
                                variant="outline"
                                className="border-[var(--greyscale-200)]"
                                leftIcon={<QrCode className="w-4 h-4" />}
                            >
                                Quét mã trải nghiệm
                            </Button>
                        </div>
                    </div>

                    {/* Horizontal Scroll for Mobile Screens */}
                    <div className="flex gap-8 overflow-x-auto pb-12 pt-4 px-4 -mx-4 snap-x snap-mandatory scrollbar-hide justify-start lg:justify-center">
                        {MOBILE_APPS.map((app, index) => (
                            <div key={index} className="snap-center shrink-0">
                                <PhoneMockup
                                    lightSrc={app.light}
                                    darkSrc={app.dark}
                                    title={app.title}
                                    desc={app.desc}
                                    onPreview={() => handleMobilePreview(app.light, app.dark)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION: DARK/LIGHT MODE --- */}
            <section className="py-24 bg-[var(--greyscale-100)] relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--greyscale-0)] border border-[var(--greyscale-200)] text-[var(--greyscale-900)] text-sm font-medium mb-8">
                        <Moon className="w-4 h-4" /> Vận hành xuyên đêm 24/7
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[var(--greyscale-900)] tracking-tight">
                        Giao diện <span className="text-[var(--base-primary)]">Dark Mode</span> <br />
                        chuẩn mực & dịu mắt
                    </h2>
                    <p className="text-xl text-[var(--greyscale-500)] mb-12 max-w-2xl mx-auto">
                        Chúng tôi thiết kế riêng chế độ tối để bảo vệ mắt lễ tân khi làm việc ca đêm.
                    </p>
                    <div className="relative max-w-5xl mx-auto cursor-zoom-in" onClick={() => openPreview(IMAGES.dashboard.dark)}>
                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 p-4 bg-[var(--greyscale-0)]/80 backdrop-blur-md rounded-2xl border border-[var(--greyscale-200)] shadow-xl hidden lg:block animate-bounce duration-[3000ms]">
                            <Sun className="w-8 h-8 text-[var(--palette-yellow-text)]" />
                        </div>
                        <div className="absolute -right-12 top-1/2 -translate-y-1/2 p-4 bg-[var(--greyscale-0)]/80 backdrop-blur-md rounded-2xl border border-[var(--greyscale-200)] shadow-xl hidden lg:block animate-bounce duration-[3000ms] delay-700">
                            <Moon className="w-8 h-8 text-[var(--palette-blue-text)]" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[var(--base-primary)]/10 border border-[var(--greyscale-200)]">
                            <Image src={IMAGES.dashboard.dark} alt="Dark Mode UI" width={1200} height={800} className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-32 bg-[var(--greyscale-0)] relative border-t border-[var(--greyscale-100)]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--greyscale-900)]">
                        Sẵn sàng bùng nổ doanh thu?
                    </h2>
                    <div className="flex justify-center gap-4">
                        <Button
                            variant="primary"
                            size="large"
                            href="http://dashboard.zimo.vn"
                            target="_blank"
                            className="px-10 py-4 text-lg shadow-lg shadow-[var(--primary-200)]"
                            rightIcon={<ArrowRight className="w-5 h-5" />}
                        >
                            Tạo tài khoản Zimo
                        </Button>
                    </div>
                    <p className="mt-6 text-[var(--greyscale-500)] text-sm">
                        Không cần thẻ tín dụng. Miễn phí trọn đời gói Starter.
                    </p>
                </div>
            </section>

            {/* LIGHTBOX PREVIEW */}
            <ImagePreview
                isOpen={!!selectedImage}
                imageSrc={selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </div>
    );
}