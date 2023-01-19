import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="es">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Lora:ital@0;1&family=Roboto+Slab:wght@300&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
