import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navbar = () => {
	const router = useRouter();
	const { locale, locales } = useRouter();
	const { blog, about, projects, contact } =
		navLinks[locale != undefined ? (locale as keyof typeof locales) : 'en-US'];
	return (
		<nav className="container mx-auto max-w-[800px] px-10 py-6 font-serif">
			<ul className="grid grid-cols-5 gap-4 ch:flex ch:items-center ch:justify-center md:gap-0">
				<li>
					<Link href={'/blog'} locale={locale} legacyBehavior>
						<a className={router.pathname == '/blog' ? 'active' : ''}>{blog}</a>
					</Link>
				</li>
				<li>
					<Link href={'/projects'} locale={locale} legacyBehavior>
						<a className={router.pathname == '/projects' ? 'active' : ''}>
							{projects}
						</a>
					</Link>
				</li>
				<li>
					<Link href={'/about'} locale={locale} legacyBehavior>
						<img
							src="/imgs/logo.svg"
							alt="Logo Renzo Damian"
							height={60}
							width={60}
						/>
					</Link>
				</li>
				<li>
					<Link href={'/about'} locale={locale} legacyBehavior>
						<a className={router.pathname == '/about' ? 'active' : ''}>
							{about}
						</a>
					</Link>
				</li>
				<li>
					<Link href={'/contact'} locale={locale} legacyBehavior>
						<a className={router.pathname == '/contact' ? 'active' : ''}>
							{contact}
						</a>
					</Link>
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
