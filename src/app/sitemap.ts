import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://zimo.vn'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/products/zimo-ecommerce`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/products/zimo-hotel`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/features/mini-game`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/features/loyalty-membership`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/features/voucher-management`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/sotel-phan-mem-quan-ly-khach-san-cao-cap-5-sao-2026`,
            lastModified: new Date('2026-02-02'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog/sotel-phan-mem-quan-ly-khach-san-cao-cap-5-sao-2026`,
            lastModified: new Date('2026-02-02'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog/hosoxp-giai-phap-quan-ly-khach-san-cho-resort-4-5-sao`,
            lastModified: new Date('2026-02-05'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog/smarthotel-ai-cach-mang-trong-quan-ly-khach-san-2026`,
            lastModified: new Date('2026-02-05'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog/bookingcom-engine-ota-toi-uu-voi-zns`,
            lastModified: new Date('2026-02-05'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/resources/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/resources/blog/zalo-mini-app-la-gi`,
            lastModified: new Date('2026-02-03'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/5-loi-ai-khi-xay-dung-zalo-mini-app-cho-khach-san`,
            lastModified: new Date('2026-02-03'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/cach-quan-ly-booking-khach-san-hieu-qua`,
            lastModified: new Date('2026-02-01'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/huong-dan-dang-ky-zalo-mini-app-a-z`,
            lastModified: new Date('2026-02-01'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/khi-nao-nen-dung-zalo-mini-app-checklist`,
            lastModified: new Date('2026-02-07'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/so-sanh-web-truyen-thong-vs-mini-app-khach-san`,
            lastModified: new Date('2026-02-04'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/so-sanh-zalo-mini-app-vs-zalo-oa`,
            lastModified: new Date('2026-02-07'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/tang-don-hang-ban-qua-zalo-voi-crm-loyalty-tich-diem`,
            lastModified: new Date('2026-02-03'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/tich-hop-qr-code-zalo-mini-app`,
            lastModified: new Date('2026-02-04'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/tich-hop-zalopay-zalo-mini-app`,
            lastModified: new Date('2026-02-04'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/lich-su-phat-trien-zalo-mini-app-2024-2026`,
            lastModified: new Date('2026-02-05'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/tuoi-lai-zalo-mini-app-2026-2030`,
            lastModified: new Date('2026-02-07'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/tich-hop-qr-code-zalo-mini-app`,
            lastModified: new Date('2026-02-04'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/tich-hop-zalopay-zalo-mini-app`,
            lastModified: new Date('2026-02-04'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/zalo-mini-app-cho-khach-san`,
            lastModified: new Date('2026-02-10'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/zalo-mini-app-cho-nha-hang`,
            lastModified: new Date('2026-02-10'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/zalo-mini-app-cho-khach-san`,
            lastModified: new Date('2026-02-10'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/so-sanh-zalo-mini-app-vs-website`,
            lastModified: new Date('2026-02-10'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/tang-don-hang-ban-qua-zalo-voi-crm-loyalty-tich-diem`,
            lastModified: new Date('2026-02-03'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/help-center`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/resources/showcase`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
    ]
}
