import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Renzo Damian - React Developer</title>
				<meta name="description" content="Generated by create next app" />
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏽‍💻</text></svg>"
				/>
			</Head>
			<div className="main ">
				<div className="container">
					<div className="flex justify-center items-center h-screen w-screen flex-col gap-4 px-6 overflow-hidden relative">
						<h1 className=" text-4xl md:text-6xl md:w-[600px] text-center  animate-appear z-10">
							<span className="flex justify-center items-center gap-2 md:gap-3">
								Hola{' '}
								<img
									className=" h-[40px] md:h-[60px] md:w-[60px] animate-wiggle"
									src="/imgs/waving_hand.png"
									height={40}
									width={40}
									alt="Hola"
								/>
							</span>
							Estoy creando un portfolio{' '}
							<span className="font-semibold">Next Gen</span>.
						</h1>
						<p className=" animate-appear z-10">
							Puede visitar la{' '}
							<a
								className=" underline"
								href="https://www.renzodamian.space"
								target={'blank'}
							>
								<span className=" font-semibold">v1</span> aquí
							</a>
							.
						</p>
						<div className="absolute top-0 left-0 text-4xl md:text-7xl font-bold opacity-10 text-justify h-screen w-screen overflow-hidden z-1 select-none">
							Hola Hello 你好 Salut Привет Halo こんにちは Ciao Hola Hello 你好
							Salut Привет Halo こんにちは Ciao Olá Hola Hello 你好 Salut Привет
							Halo こんにちは Ciao Hola Hello 你好 Salut Привет Halo こんにちは
							Ciao Olá Hola Hello 你好 Salut Привет Halo こんにちは Ciao Hola
							Hello 你好 Salut Привет Halo こんにちは Ciao Olá Hola Hello 你好
							Salut Привет Halo こんにちは Ciao Hola Hello 你好 Salut Привет
							Halo こんにちは Ciao Olá Hola Hello 你好 Salut Привет Halo
							こんにちは Ciao Hola Hello 你好 Salut Привет Halo こんにちは Ciao
							Olá
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
