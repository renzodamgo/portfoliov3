import clientPromise from 'lib/mongodb';

const addPost = async (): Promise<string> => {
	try {
		const client = await clientPromise;
		const db = client.db('damiandb');

		const post = await db.collection('posts').insertOne({
			title: 'My first post',
		});

		return 'Post added';
	} catch (e) {
		console.error(e);
		return '';
	}
};

export default addPost;
