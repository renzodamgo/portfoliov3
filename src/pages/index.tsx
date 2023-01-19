import type { NextPage } from 'next';
import Head from 'next/head';
import { Landing } from 'src/components/landing';
import { Welcome } from 'src/components/welcome';

const Home: NextPage = () => {
	const isWelcome = false;
	return (
		<div>
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
			<div className="main ">{isWelcome ? <Welcome /> : <Landing />}</div>
		</div>
	);
};

export default Home;
