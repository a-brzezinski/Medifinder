const { connectMongo } = require('@/helpers/mongodb');

const handler = async (req, res) => {
	const client = await connectMongo();
	const database = client.db();

	if (req.method === 'GET') {
		try {
			const specialists = await database
				.collection('specialists')
				.find()
				.toArray();

			res.status(200).json({ specialists });
		} catch (error) {
			res.status(500).json({ message: 'Failed fetch specialists' });
		}
	}

  if (req.method === 'POST') {
		const specialistData = req.body;

		try {
			await database.collection('specialists').insertOne(specialistData);

			res.status(201).json({ message: 'Specialist Created!' });
		} catch (error) {
			res.status(500).json({ message: 'Cant create a specialist' });
		}
	}

};

export default handler