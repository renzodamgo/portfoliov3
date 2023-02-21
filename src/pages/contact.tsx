import Head from 'next/head';
import Link from 'next/link';

export const Contact = () => {
	return (
		<div>
			<Head>
				<title>Renzo Damian - Fullstack Dev</title>
			</Head>
			<div className="container mx-auto mt-10 px-10 text-center font-serif grid gap-2">
				<h1>Renzo Damian Gomez</h1>
				<h2>Fullstack Dev</h2>
				<a href="mailto:renzo.damian.go@gmail.com">renzo.damian.go@gmail.com</a>
				<ul className='grid gap-2'>
					<li>
						<Link
							href={'https://www.linkedin.com/in/renzo-damian/'}
							target="_blank"
						>
							Linkedin
						</Link>
					</li>
					<li>
						<Link href={'https://github.com/renzodamgo'} target="_blank">
							Github
						</Link>
					</li>
					<li>
						<Link
							href={'/resources/Renzo_Damian_-_Full_Stack_Developer.pdf'}
							target="_blank"
						>
							CV
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Contact;
