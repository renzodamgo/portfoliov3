import type { NextPage } from 'next';
import Head from 'next/head';
import { Landing } from 'src/components/landing';
import { Welcome } from 'src/components/welcome';

const Home: NextPage = () => {
	const isWelcome = false;
	return (
		<div>
			<Head>
				<title></title>
				<meta name="description" content="Hola soy Renzo damian" />
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏽‍💻</text></svg>"
				/>
			</Head>
			<div className="main ">{isWelcome ? <Welcome /> : <Landing />}</div>
		</div>
	);
};

export default Home;
