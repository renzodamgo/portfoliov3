import clientPromise from 'lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

const addPost = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		try {
			const client = await clientPromise;
			const db = client.db('damiandb');

			const resPost = await db.collection('posts').findOne({
				title: '2',
			});

			return res.status(200).json(resPost);
		} catch (e) {
			return res.status(500).json({ message: 'Error' });
		}
	}
	if (req.method === 'POST') {
		try {
			console.log(req.body);
			const client = await clientPromise;
			const db = client.db('damiandb');

			const resPost = await db.collection('posts').insertOne({
				title: '2',
				content: req.body,
			});

			return res.status(200).json(resPost);
		} catch (e) {
			return res.status(500).json({ message: 'Error' });
		}
	}
};

const getPost = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		try {
			const client = await clientPromise;
			const db = client.db('damiandb');

			const resPost = await db.collection('posts').find({
				title: '2',
			});

			return res.status(200).json(resPost);
		} catch (e) {
			return res.status(500).json({ message: 'Error' });
		}
	}
};

export default addPost;
