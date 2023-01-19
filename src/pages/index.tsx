import type { NextPage } from 'next';
import Head from 'next/head';
import { Landing } from 'src/components/landing';
import { Welcome } from 'src/components/welcome';

const Home: NextPage = () => {
	const isWelcome = false;
	return (
		<div>
			<Head>


			</Head>
			<div className="main ">{isWelcome ? <Welcome /> : <Landing />}</div>
		</div>
	);
};

export default Home;
