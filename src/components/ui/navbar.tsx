import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navbar = () => {
	const router = useRouter();
	return (
		<nav className="container mx-auto max-w-[800px] px-10 py-6 font-serif">
			<ul className="grid grid-cols-3 ch:flex ch:items-center ch:justify-center">
				<li>
					<Link href={'/blog'} legacyBehavior>
						<a className={router.pathname == '/blog' ? 'active' : ''}>Blog</a>
					</Link>
				</li>
				<li>
					<Link href={'/about'} legacyBehavior>
						<img
							src="/imgs/logo.svg"
							alt="Logo Renzo Damian"
							height={60}
							width={60}
						/>
					</Link>
				</li>
				<li>
					<Link href={'/about'} legacyBehavior>
						<a className={router.pathname == '/about' ? 'active' : ''}>
							Acerca
						</a>
					</Link>
				</li>
				{/* <li></li> */}
			</ul>
		</nav>
	);
};
