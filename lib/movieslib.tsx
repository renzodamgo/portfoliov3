import clientPromise from 'lib/mongodb';

const findMovies = async (): Promise<string> => {
	try {
		const client = await clientPromise;
		const db = client.db('sample_mflix');

		const movies = await db
			.collection('movies')
			.find({})
			.sort({ metacritic: -1 })
			.limit(30)
			.toArray();

		return JSON.stringify(movies);
	} catch (e) {
		console.error(e);
		return '';
	}
};

export default findMovies;
