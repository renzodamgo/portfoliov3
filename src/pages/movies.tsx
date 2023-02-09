import { GetStaticProps } from 'next';
import { MovieRes } from 'types/movies';

export default function Movies({ movies }: { movies: MovieRes[] }) {
	console.log(movies);
	return (
		<div>
			<h1>Top 20 Movies of All Time</h1>
			<p>
				<small>(According to Metacritic)</small>
			</p>
			<ul className="grid gap-5">
				{movies.map((movie) => (
					<li key={movie._id}>
						<h2>{movie.title}</h2>
						<h3>{movie.metacritic}</h3>
						<p>{movie.plot}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch('http://localhost:3000/api/movies');
	const movies: MovieRes[] = await res.json();
	console.log({ movies });

	return {
		props: { movies },
	};
};
