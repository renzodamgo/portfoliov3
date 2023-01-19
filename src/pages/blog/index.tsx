import { GetServerSideProps } from 'next';

type postType = {
	name: string;
	title: string;
};

const Blog = ({ allPosts }: { allPosts: postType[] }) => {
	return (
		<section id="Renzo Damian Blog">
			<div className="container mx-auto mt-10 px-10 ">
				<div className="hyphen grid  gap-5 text-center font-serif">
					<h1>
						👷
						<br />
						El blog está en <br />
						construcción
					</h1>
					<p></p>
					<div className="hyphen text-justify text-sm">
						<p className="text-center">
							Trato de hacer lo mejor posible así que tomará su tiempo.
						</p>
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
