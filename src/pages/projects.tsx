import Head from 'next/head';
import Link from 'next/link';

export const Projects = () => {
	return (
		<div>
			<Head>
				<title>Renzo Damian - Fullstack Dev</title>
			</Head>
			<div className="container mx-auto mt-10 grid gap-5 px-10 font-serif ch:grid ch:gap-2">
				<div>
					<h1>
						<a href="https://www.dnt.pe/" target="_blank" rel="noreferrer">
							DNT.pe
						</a>
					</h1>
					<p>
						Landing page for a Marketing Agency showcasing their services with
						the focus of creativity and movement.
					</p>
					<div className="flex gap-3">
						<span>Next.js </span>
						<span>Framer Motion</span>
						<span>Tailwind</span>
					</div>
				</div>
				<div>
					<h1>
						<Link href="https://lumiorb.vercel.app/" target="_blank">
							LumiOrb
						</Link>
					</h1>
					<p>
						I needed good lighting for a video call and saw that the{' '}
						<Link
							className="italic underline"
							href="https://www.razer.com/gaming-software/razer-virtual-ring-light/RZ11-15000-0001"
							target="_blank"
						>
							{' '}
							virtual ring light from razer was 5${' '}
						</Link>
						so I created one for myself for free.
					</p>
					<div className="flex gap-3">
						<span>Next.js</span>
						<span>Typescript</span>
						<span>Vercel</span>
					</div>
				</div>
				<div>
					<Link href="https://geocursos.com.pe/" target="_blank">
						<h1>Geocursos</h1>
					</Link>
					<p>
						E-learning platform specifically designed for geologists, created to
						automatically recieve paymanets and manage courses. Made to be
						modular and easy to expand using UI Components made with Tailwind.
						It has a payment system, assistance system and an admin dashboard to
						manage courses and users.
					</p>
					<div className="flex gap-3">
						<span>Next.js</span>
						<span>Vercel</span>
						<span>Tailwind</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
