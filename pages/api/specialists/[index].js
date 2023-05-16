import { connectMongo } from '@/helpers/mongodb';

const handler = async (req, res) => {
	const client = await connectMongo();
	const database = client.db();

	if (req.method === 'POST') {
		const specialistData = req.body;

		try {
			await database.collection('specialists').insertOne(specialistData);

			res.status(201).json({ message: 'Specialist Created!' });
		} catch (error) {
			res.status(500).json({ message: 'Cant create a specialist' });
		}
	}

	if (req.method === 'DELETE') {
		const id = req.query.index;

		try {
			const ObjectId = require('mongodb').ObjectId;
			const convertedObjectId = new ObjectId(id);

			await database
				.collection('specialists')
				.deleteOne({ _id: convertedObjectId });

			res.status(201).json({ message: 'Specialist Deleted!' });
		} catch (error) {
			res.status(500).json({ message: 'Failed to delete specialist' });
		}
	}

	if (req.method === 'PUT') {
		const id = req.query.index;
		const opinion = req.body;

		try {
			const ObjectId = require('mongodb').ObjectId;
			const convertedObjectId = new ObjectId(id);

			await database
				.collection('specialists')
				.findOneAndUpdate(
					{ _id: convertedObjectId },
					{ $push: { opinions: opinion } }
				);

			res.status(201).json({ message: 'Opinion Added!' });
		} catch (error) {
			res.status(500).json({ message: 'Failed to add opinion' });
		}
	}
};

export default handler;
