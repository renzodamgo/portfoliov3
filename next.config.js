/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['es-ES', 'en-US'],
		defaultLocale: 'en-US',
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/about',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
