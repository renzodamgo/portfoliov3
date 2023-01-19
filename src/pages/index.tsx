import type { NextPage } from 'next';
import Head from 'next/head';
import { Landing } from 'src/components/landing';
import { Welcome } from 'src/components/welcome';

const Home: NextPage = () => {
	const isWelcome = true;
	return (
		<div>
			<Head>
				<title>Renzo Damian - Desarrollador Fullstack</title>
			</Head>
			<div>{isWelcome ? <Welcome /> : <Landing />}</div>
		</div>
	);
};

export default Home;
