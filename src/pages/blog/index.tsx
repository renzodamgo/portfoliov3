import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type postType = {
	name: string;
	title: string;
};

const Blog = ({ allPosts }: { allPosts: postType[] }) => {
	const { locale, locales } = useRouter();
	const { head, title, description } =
		blogContent[
			locale != undefined ? (locale as keyof typeof locales) : 'en-US'
		];
	return (
		<section id="Renzo Damian Blog">
			<Head>
				<title>{head}</title>
			</Head>
			<div className="container mx-auto mt-10 px-10 ">
				<div className="hyphen grid  gap-5 text-center font-serif">
					<h1>
						👷
						<br />
						<p dangerouslySetInnerHTML={{ __html: title }}></p>
					</h1>
					<div className="hyphen text-justify text-sm">
						<p className="text-center">{description}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;

export const getStaticProps: GetServerSideProps = async () => {
	const allPosts = [
		{
			name: 'Renzo',
			title: 'Make of del protfolio',
		},
		{
			name: 'Renzo',
			title: 'Make of del protfolio2',
		},
		{
			name: 'Renzo',
			title: 'Make of del protfolio3',
		},
	];
	return {
		props: { allPosts },
	};
};

const blogContent = {
	'es-ES': {
		head: 'Renzo Damian - Desarrollador Fullstack',
		title: 'El blog está en <br/>construcción',
		description: 'Trato de hacer lo mejor posible así que tomará su tiempo.',
	},
	'en-US': {
		head: 'Renzo Damian - Fullstack Dev',
		title: 'Blog is under <br/>construction',
		description: 'I try to do my best so it will take some time.',
	},
};
