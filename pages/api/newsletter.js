import { connectMongo } from '@/helpers/mongodb';

const handler = async (req, res) => {
	let client;

	if (req.method === 'POST') {
		const newNewsletterClient = req.body;

		try {
			client = await connectMongo();

			const database = client.db();

			const existingEmail = await database
				.collection('newsletter')
				.findOne({ email: newNewsletterClient.email });

			if (existingEmail) {
				res
					.status(400)
					.json({ message: 'Email is already signed to newsletter' });
				return;
			}

			await database.collection('newsletter').insertOne(newNewsletterClient);

			res.status(201).json({ message: 'Signed up!' });
		} catch (error) {
			throw new Error(error);
		}
	}
};

export default handler;
