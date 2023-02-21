import clientPromise from 'lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

const findMovies = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const client = await clientPromise;
		const db = client.db('sample_mflix');

		const movies = await db
			.collection('movies')
			.find({})
			.sort({ metacritic: -1 })
			.limit(30)
			.toArray();

		res.status(200).json(movies);
	} catch (e) {
		console.error(e);
	}
};

export default findMovies;
