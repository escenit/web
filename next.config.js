/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {unoptimized: true},
    basePath: "/escenit/web",

    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
