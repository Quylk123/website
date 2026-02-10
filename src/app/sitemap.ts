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
            url: `${baseUrl}/resources/blog/5-loi-sai-khi-xay-dung-zalo-mini-app-cho-khach-san`,
            lastModified: new Date('2026-02-03'),
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
            url: `${baseUrl}/resources/blog/cach-trien-khai-mini-app-khach-san-hieu-qua`,
            lastModified: new Date('2026-02-04'),
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
            url: `${baseUrl}/resources/blog/lich-su-phat-trien-zalo-mini-app-2024-2026`,
            lastModified: new Date('2026-02-07'),
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
            url: `${baseUrl}/resources/blog/khi-nao-nen-dung-zalo-mini-app-checklist`,
            lastModified: new Date('2026-02-07'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/tuong-lai-zalo-mini-app-2026-2030`,
            lastModified: new Date('2026-02-07'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/tang-doanh-so-voi-zalo-mini-app-5-chien-luoc`,
            lastModified: new Date('2026-02-07'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/huong-dan-dang-ky-zalo-mini-app-a-z`,
            lastModified: new Date('2026-02-10'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/tich-hop-qr-code-zalo-mini-app`,
            lastModified: new Date('2026-02-10'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/blog/toi-uu-zns-zalo-mini-app`,
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
            url: `${baseUrl}/resources/help-center`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/resources/showcase`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
    ]
}
