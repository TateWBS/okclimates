import { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
    return [
        {
            url: 'https://www.okclimates.com',
            lastModified: new Date(),
        }
    ];
}

export default sitemap;