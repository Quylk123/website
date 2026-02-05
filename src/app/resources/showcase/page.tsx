import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Khách Hàng Tiêu Biểu - Showcase",
    description: "Các dự án tiêu biểu đã triển khai thành công cùng Zimo.",
};

interface Customer {
    name: string;
    logo: string;
    link: string;
    category?: string;
}

const customers: Customer[] = [
    {
        name: "Hoi An Old Town Table",
        logo: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/611961366_122100944403200485_2579998591705457452_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Wjhr6AwfN-EQ7kNvwHNLm1x&_nc_oc=AdnSxItWGT5BBaz1SfODBVVjxv2u_JQjTR17fRsJs-rrJEd3hdD5tezZg7TWpE4EuRI&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=Yx6IJXCr31eFhv22CLwt7A&oh=00_AfusjbN7NxJ9M7sFliyZOcot-arWVHHWG1EawUHOyaqHPA&oe=698A00A1",
        link: "https://zalo.me/s/2989613852543518022/",
        category: "FnB"
    },
    {
        name: "Hotel TAP",
        logo: "https://photo-logo-mapps.zadn.vn/b58bbb6b1c2ef570ac3f.jpg",
        link: "https://zalo.me/s/2301532726399393201/",
        category: "Hotel"
    },
];

export default function ShowcasePage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-7xl">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--greyscale-900)] mb-4">
                    Khách Hàng Tiêu Biểu
                </h1>
                <p className="text-lg text-[var(--greyscale-500)] max-w-2xl mx-auto">
                    Các dự án tiêu biểu đã triển khai thành công cùng Zimo
                </p>
            </div>

            {/* Customers Grid */}
            {customers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {customers.map((customer, index) => (
                        <a
                            key={index}
                            href={customer.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[var(--greyscale-100)] hover:border-[var(--primary-100)]"
                        >
                            {/* Category Badge */}
                            {customer.category && (
                                <div className="absolute top-4 right-4">
                                    <span className="bg-[var(--primary-50)] text-[var(--base-primary)] px-3 py-1 rounded-full text-xs font-medium">
                                        {customer.category}
                                    </span>
                                </div>
                            )}

                            {/* Logo */}
                            <div className="flex items-center justify-center mb-6 h-32">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <img
                                        src={customer.logo}
                                        alt={`${customer.name} logo`}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            </div>

                            {/* Name */}
                            <h3 className="text-xl font-semibold text-[var(--greyscale-900)] text-center group-hover:text-[var(--base-primary)] transition-colors">
                                {customer.name}
                            </h3>

                            {/* View Project */}
                            <div className="mt-4 flex items-center justify-center text-sm text-[var(--greyscale-500)] group-hover:text-[var(--base-primary)] transition-colors">
                                <span>Xem dự án</span>
                                <svg
                                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-lg text-[var(--greyscale-500)]">
                        Danh sách khách hàng đang được cập nhật...
                    </p>
                </div>
            )}

            {/* Call to Action */}
            <div className="mt-20 text-center">
                <div className="bg-gradient-to-r from-[var(--primary-50)] to-[var(--primary-100)] rounded-2xl p-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--greyscale-900)] mb-4">
                        Muốn trở thành khách hàng tiếp theo?
                    </h2>
                    <p className="text-[var(--greyscale-500)] mb-6 max-w-xl mx-auto">
                        Hãy để chúng tôi giúp bạn xây dựng giải pháp số hiệu quả cho doanh nghiệp của bạn
                    </p>
                    <a
                        href="https://zalo.me/0899111195"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-[var(--base-primary)] text-white px-8 py-3 rounded-lg font-medium hover:bg-[var(--primary-300)] transition-colors"
                    >
                        Liên hệ ngay
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
