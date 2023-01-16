import { GetServerSideProps } from 'next';

type postType = {
	name: string;
	title: string;
};

const Blog = ({ allPosts }: { allPosts: postType[] }) => {
	return (
		<div>
			{allPosts.map((post) => (
				<h1 key={post.name}>
					{post.name} - {post.title}
				</h1>
			))}
		</div>
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
