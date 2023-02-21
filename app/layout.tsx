'use client';
import { Inter, Lora } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/ui/navbar';
import '/styles/globals.scss';

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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body className={`${inter.variable} ${lora.variable} font-sans`}>
				<Navbar />
				<main className="container mx-auto mt-10 px-10">{children}</main>
			</body>
			<Analytics />
		</html>
	);
}