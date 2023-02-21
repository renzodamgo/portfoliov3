import Link from 'next/link';

const Projects = () => {
	return (
		<section id="Renzo Damian - Projects">
			<div className="grid gap-5 font-serif ch:grid ch:gap-2">
				<div>
					<Link href="https://www.dnt.pe/" target="_blank">
						<h1>DNT.pe</h1>
					</Link>
					<p>
						Landing page for a Marketing Agency showcasing their services with different and complex animations to express creativity.
					</p>
					<div className="flex gap-3">
						<span>Next.js </span>
						<span>Framer Motion</span>
						<span>Tailwind</span>
					</div>
				</div>
				<div>
					<Link href="https://lumiorb.vercel.app/" target="_blank">
						<h1>LumiOrb</h1>
					</Link>
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
		</section>
	);
};

export default Projects;
