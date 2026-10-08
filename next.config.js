/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  trailingSlash: false,
  async redirects() {
    // Removed city slugs → redirect to homepage
    const removedCities = [
      'jodhpur','udaipur','kota','ajmer','bikaner','alwar','bhilwara',
      'sikar','bharatpur','ganganagar','hanumangarh','chittorgarh',
      'jaisalmer','jhunjhunu','pali','tonk'
    ];
    const cityRedirects = removedCities.map((city) => ({
      source: `/${city}`,
      destination: '/',
      permanent: true,
    }));

    return [
      // Redirect all .html URLs to clean URLs (301 permanent)
      {
        source: '/:path((?!google|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}).+)\\.html',
        destination: '/:path*',
        permanent: true,
      },
      ...cityRedirects,
    ];
  },
};

module.exports = nextConfig;
