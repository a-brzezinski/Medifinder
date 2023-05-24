import SpecialistsList from '@/components/Specialists/SpecialistsList/SpecialistsList';
import { connectMongo } from '@/helpers/mongodb';

const SpecialistsPage = props => {
	const { specialists } = props;

	return <SpecialistsList specialists={specialists} />;
};

export default SpecialistsPage;

export async function getStaticProps() {
	const client = await connectMongo();
	const db = client.db();
	const specialistsFromDb = await db.collection('specialists').find().toArray();
	const specialists = JSON.parse(JSON.stringify(specialistsFromDb));

	return {
		props: { specialists },
		revalidate: 30,
	};
}
