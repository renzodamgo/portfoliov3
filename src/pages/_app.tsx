import { Inter, Lora } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Layout from 'src/components/layout';
import 'styles/globals.scss';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-inter',
});

const lora = Lora({
	subsets: ['latin'],
	weight: ['400', '500'],
	style: ['normal', 'italic'],
	variable: '--font-lora',
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<main className={`${inter.variable} ${lora.variable} font-sans`}>
				<Component {...pageProps} />
			</main>
			<Analytics />
		</Layout>
	);
}

export default MyApp;
