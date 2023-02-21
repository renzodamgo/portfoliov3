import Link from 'next/link';

export const Navbar = () => {
	const { blog, about, projects, contact } = navLinks['en-US'];
	return (
		<nav className="container mx-auto max-w-[800px] px-10 py-6 font-serif">
			<ul className="grid grid-cols-5 gap-4 ch:flex ch:items-center ch:justify-center md:gap-0">
				<li>
					<Link href={'/blog'}>{blog}</Link>
				</li>
				<li>
					<Link href={'/projects'}>{projects}</Link>
				</li>
				<li>
					<Link href={'/about'}>
						<img
							src="/imgs/logo.svg"
							alt="Logo Renzo Damian"
							height={60}
							width={60}
						/>
					</Link>
				</li>
				<li>
					<Link href={'/about'}>{about}</Link>
				</li>
				<li>
					<Link href={'/contact'}>{contact}</Link>
				</li>
			</ul>
		</nav>
	);
};

const navLinks = {
	'es-ES': {
		blog: 'Blog',
		about: 'Acerca',
		projects: 'Proyectos',
		contact: 'Contacto',
	},
	'en-US': {
		blog: 'Blog',
		about: 'About',
		projects: 'Projects',
		contact: 'Contact',
	},
};
