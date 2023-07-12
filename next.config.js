/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    // images: {
    //     unoptimized: true,
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: '**.tatewbs.com',
    //         },
    //     ],
    // },
    // env: {
    //     NEXT_PUBLIC_API: `${apiAddress}`,
    //     NEXT_PUBLIC_ADMIN_API: `${apiAddress}/admin`,
    // }
}

module.exports = nextConfig;
