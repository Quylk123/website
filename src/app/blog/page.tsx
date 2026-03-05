'use client';

import { Card, CardContent, CardDescription, CardHeader, CardFooter } from "@/components/BlogCard";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags?: string;
}

// Tự động đọc tất cả file markdown từ posts/ directory
async function getBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [
    // Bài viết cũ (từ resources/blog)
    {
      slug: "5-loi-ai-khi-xay-dung-zalo-mini-app-cho-khach-san",
      title: "5 Lời AI Khi Xây Dùng Zalo Mini App Cho Khách Sạn",
      description: "Hướng dẫn 5 cách tích hợp AI vào Zalo Mini App để tự động hóa quy trình quản lý khách sạn.",
      date: "2026-02-01",
      category: "Tutorial",
      tags: "#zalo-mini-app #AI #quan-ly-khach-san #automation"
    },
    {
      slug: "cach-quan-ly-booking-khach-san-hieu-qua",
      title: "Cách Quan Lý Booking Khách Sân Hiệu Quả",
      description: "Hướng dẫn quy trình đặt phòng và quản lý khách sạn hiệu quả cho khách sạn nhỏ.",
      date: "2026-02-01",
      category: "Guide",
      tags: "#booking-engine #quan-ly-khach-san #hoa-hong"
    },
    {
      slug: "huong-dan-dang-ky-zalo-mini-app-a-z",
      title: "Hướng Dẫn Đăng Ký Zalo Mini App A Z",
      description: "Tải và cấu hình Zalo Mini App A Z để tối ưu quy trình quản lý và sử dụng.",
      date: "2026-02-01",
      category: "Tutorial",
      tags: "#zalo-mini-app #quan-ly-khach-san #zalo-oa"
    },
    {
      slug: "khi-nao-nen-dung-zalo-mini-app-checklist",
      title: "Khi Nào Không Nên Dùng Zalo Mini App Checklist",
      description: "Danh sách các trường hợp nên và không nên dùng Zalo Mini App để quản lý khách sạn.",
      date: "2026-02-01",
      category: "Educational",
      tags: "#zalo-mini-app #quan-ly-khach-san #checklist"
    },
    {
      slug: "so-sanh-web-truyen-thong-vs-mini-app-khach-san",
      title: "So Sánh Web Truyền Thống VS Mini App Khách Sạn",
      description: "So sánh hiệu quả của Web truyền thống và Zalo Mini App trong quản lý khách sạn.",
      date: "2026-02-02",
      category: "Comparison",
      tags: "#web #zalo-mini-app #quan-ly-khach-san #conversion-rate"
    },
    {
      slug: "so-sanh-zalo-mini-app-vs-zalo-oa",
      title: "So Sánh Zalo Mini App VS Zalo OA",
      description: "So sánh ưu nhược điểm của Zalo Mini App và Zalo OA trong quản lý khách sạn.",
      date: "2026-02-02",
      category: "Comparison",
      tags: "#zalo-mini-app #zalo-oa #quan-ly-khach-san"
    },
    {
      slug: "tang-don-hang-ban-qua-zalo-voi-crm-loyalty-tich-diem",
      title: "Tăng Đơn Hàng Bằng Zalo Voice & Zalo CRM",
      description: "Hướng dẫn tích hợp Zalo Voice Command và CRM để tăng trải nghiệm khách hàng.",
      date: "2026-02-03",
      category: "Integration",
      tags: "#zalo-mini-app #zalo-voice #CRM #loyalty #tich-diem"
    },
    {
      slug: "tich-hop-qr-code-zalo-mini-app",
      title: "Tích Hợp QR Code Zalo Mini App",
      description: "Hướng dẫn tích hợp QR Code để khách hàng có thể quét và truy cập thông tin booking, menu.",
      date: "2026-02-04",
      category: "Tutorial",
      tags: "#zalo-mini-app #QR-code #integration #automation"
    },
    {
      slug: "tich-hop-zalopay-zalo-mini-app",
      title: "Tích Hợp ZaloPay",
      description: "Hướng dẫn tích hợp ZaloPay để khách hàng thanh toán nhanh, tiện lợi.",
      date: "2026-02-04",
      category: "Integration",
      tags: "#zalo-mini-app #ZaloPay #thanh-toan #automation"
    },
    {
      slug: "lich-su-phat-trien-zalo-mini-app-2024-2026",
      title: "Lịch Sự Phát Triển Zalo Mini App 2024-2026",
      description: "Tổng hợp các tính năng và cập nhật Zalo Mini App từ 2024 đến 2026.",
      date: "2026-02-05",
      category: "Changelog",
      tags: "#zalo-mini-app #changelog #roadmap #update"
    },
    {
      slug: "so-sanh-zalo-mini-app-vs-website",
      title: "So Sánh Zalo Mini App VS Website",
      description: "So sánh ưu nhược điểm của Zalo Mini App và Website bán hàng.",
      date: "2026-02-02",
      category: "Comparison",
      tags: "#zalo-mini-app #website #comparison"
    },
    {
      slug: "so-sanh-zalo-mini-app-vs-bookingcom",
      title: "So Sánh Zalo Mini App VS Booking.com",
      description: "So sánh hiệu quả đặt phòng và quản lý khách sạn qua Zalo Mini App và Booking.com.",
      date: "2026-02-02",
      category: "Comparison",
      tags: "#zalo-mini-app #bookingcom-engine #conversion-rate"
    },

    // Bài viết mới (từ blog/posts)
    {
      slug: "5-phan-mem-quan-ly-khach-san-tot-nhat-2026",
      title: "5 Phần Mềm Quản Lý Khách Sạn Tốt Nhất 2026",
      description: "Tổng hợp và review chi tiết 5 phần mềm quản lý khách sạn hàng đầu Việt Nam năm 2026. So sánh tính năng, giá cả và ưu/nhược điểm.",
      date: "2026-02-02",
      category: "Educational",
      tags: "#quan-ly-khach-san #PMS #review #comparison"
    },
    {
      slug: "cach-quan-ly-booking-khach-san-hieu-qua",
      title: "Cách Quan Lý Booking Khách Sân Hiệu Quả",
      description: "Hướng dẫn quy trình đặt phòng và quản lý khách sạn hiệu quả cho khách sạn nhỏ.",
      date: "2026-02-02",
      category: "Guide",
      tags: "#booking-engine #quan-ly-khach-san #hoa-hong"
    },
    {
      slug: "sotel-phan-mem-quan-ly-khach-san-cao-cap-5-sao-2026",
      title: "SOTEL - Phần Mềm Quản Lý Khách Sạn Cao Cấp (5 Sao)",
      description: "SOTEL là phần mềm quản lý khách sạn cao cấp (5 sao) được thiết kế đặc biệt cho resort 4-5 sao và chuỗi khách sạn (chain hotels) tại Việt Nam.",
      date: "2026-02-05",
      category: "Review",
      tags: "#SOTEL #quan-ly-khach-san-5-sao #resort #review #comparison"
    },
    {
      slug: "sotel-phan-mem-quan-ly-khach-san-cao-cap-5-sao-2026",
      title: "SOTEL - Phần Mềm Quản Lý Khách Sạn Cao Cấp (5 Sao) 2026",
      description: "SOTEL là phần mềm quản lý khách sạn cao cấp (5 sao) được thiết kế đặc biệt cho resort 4-5 sao và chuỗi khách sạn (chain hotels) tại Việt Nam.",
      date: "2026-02-05",
      category: "Review",
      tags: "#SOTEL #quan-ly-khach-san-5-sao #resort #review #comparison"
    },
    {
      slug: "hosoxp-giai-phap-quan-ly-khach-san-cho-resort-4-5-sao",
      title: "HosoXP - Giải Pháp Quản Lý Khách Sạn Cho Resort 4-5 Sao",
      description: "HosoXP là phần mềm quản lý khách sạn chuyên nghiệp được thiết kế đặc biệt cho chuỗi khách sạn (chain hotels) tại Việt Nam.",
      date: "2026-02-05",
      category: "Review",
      tags: "#hosoxp #quan-ly-khach-san #resort-4-5-sao #multi-property #review #comparison"
    },
    {
      slug: "smarthotel-ai-cach-mang-trong-quan-ly-khach-san-2026",
      title: "SmartHotel - AI Revolution trong Quản Lý Khách Sạn 2026",
      description: "SmartHotel là PMS AI-powered đầu tiên tại Việt Nam, tích hợp đầy đủ các tính năng quản lý khách sạn với machine learning.",
      date: "2026-02-05",
      category: "Educational",
      tags: "#smart-hotel #AI #quan-ly-khach-san #dynamic-pricing #auto-booking"
    },
    {
      slug: "bookingcom-engine-ota-toi-uu-voi-zns",
      title: "Booking.com Engine - OTA Tối Ưu với ZNS",
      description: "Booking.com Engine là nền tảng OTA lớn nhất thế giới với 15-25% phí hoa hồng. Review chi tiết cách Zalo Mini App và các PMS Việt Nam có thể tận dụng ZNS để tối ưu lợi nhuận từ Booking.com Engine.",
      date: "2026-02-05",
      category: "Educational",
      tags: "#bookingcom-engine #OTA #ZNS #zalo-mini-app #conversion-rate-roi"
    },
  ];

  return posts;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 opacity-10 blur-3xl"></div>
          <div className="bg-white/50 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="text-base sm:text-2xl font-bold text-gray-900 mb-4">
            📝 Blog Zimo Hotel - Tất cả bài viết về Quản lý Khách sạn
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Tìm hiểu về phần mềm quản lý khách sạn, so sánh tính năng và chọn giải pháp phù hợp nhất.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">16</div>
              <div className="text-sm text-gray-600">Bài viết</div>
              <div className="text-xs text-gray-500">Tất cả chủ đề</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
              <div className="text-sm text-gray-600">So sánh</div>
              <div className="text-xs text-gray-500">So sánh phần mềm</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">4</div>
              <div className="text-sm text-gray-600">Tutorials</div>
              <div className="text-xs text-gray-500">Hướng dẫn & tích hợp</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            ⭐ Bài viết nổi bật
          </h2>
          
          {/* SOTEL - Featured */}
          <Card
            slug="sotel-phan-mem-quan-ly-khach-san-cao-cap-5-sao-2026"
            title="SOTEL - Phần Mềm Quản Lý Khách Sạn Cao Cấp (5 Sao)"
            description="SOTEL là phần mềm quản lý khách sạn cao cấp (5 sao) được thiết kế đặc biệt cho resort 4-5 sao và chuỗi khách sạn (chain hotels) tại Việt Nam."
            featured={true}
          />
          
          {/* HosoXP - Featured */}
          <Card
            slug="hosoxp-giai-phap-quan-ly-khach-san-cho-resort-4-5-sao"
            title="HosoXP - Giải Pháp Quản Lý Khách Sạn Cho Resort 4-5 Sao"
            description="HosoXP là phần mềm quản lý khách sạn chuyên nghiệp được thiết kế đặc biệt cho chuỗi khách sạn (chain hotels) tại Việt Nam."
            featured={true}
          />
          
          {/* SmartHotel - Featured */}
          <Card
            slug="smarthotel-ai-cach-mang-trong-quan-ly-khach-san-2026"
            title="SmartHotel - AI Revolution trong Quản Lý Khách Sạn 2026"
            description="SmartHotel là PMS AI-powered đầu tiên tại Việt Nam, tích hợp đầy đủ các tính năng quản lý khách sạn với machine learning."
            featured={true}
          />
          
          {/* Booking.com Engine - Featured */}
          <Card
            slug="bookingcom-engine-ota-toi-uu-voi-zns"
            title="Booking.com Engine - OTA Tối Ưu với ZNS"
            description="Booking.com Engine là nền tảng OTA lớn nhất thế giới với 15-25% phí hoa hồng. Review chi tiết cách Zalo Mini App và các PMS Việt Nam có thể tận dụng ZNS để tối ưu lợi nhuận từ Booking.com Engine."
            featured={true}
          />
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            📋 Tất cả bài viết
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
              Tất cả
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all">
              Reviews
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all">
              Tutorials
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all">
              So sánh
            </button>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card
                key={post.slug}
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                category={post.category}
                tags={post.tags}
                featured={false}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
