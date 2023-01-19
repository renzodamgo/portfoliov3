import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="es">
			<Head>
				<title>Renzo Damian - Desarrollador Fullstack</title>
				<meta
					name="description"
					content="Mi experiencia laboral se centra en el uso de Java y React
						para desarrollar aplicaciones web y móviles. Me gusta estar al día
						con las últimas tendencias en tecnología y siempre estoy buscando
						nuevos desafíos para seguir creciendo como desarrollador."
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Lora:ital@0;1&family=Roboto+Slab:wght@300&display=swap"
					rel="stylesheet"
				/>

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f5f3ec" />
				<meta name="theme-color" content="#F5F3EC" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
