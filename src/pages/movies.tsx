import findMovies from 'lib/movieslib';
import { GetStaticProps } from 'next';
import { MovieRes } from 'types/movies';

export default function Movies({ movies }: { movies: MovieRes[] }) {
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
	const res = await findMovies();
	const movies: MovieRes[] = JSON.parse(res);

	return {
		props: { movies },
	};
};
