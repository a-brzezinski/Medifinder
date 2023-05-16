import { MongoClient } from 'mongodb';

export const connectMongo = async () => {
	const client = await MongoClient.connect(
		`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@medifinder.0ecc6bj.mongodb.net/data?retryWrites=true&w=majority`
	);

	return client;
};
