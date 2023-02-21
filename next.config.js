/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		// locales: ['es-ES', 'en-US'],
		locales: ['en-US'],
		defaultLocale: 'en-US',
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/projects',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
