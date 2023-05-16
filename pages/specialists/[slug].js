import SpecialistItem from '@/components/Specialists/Specialist/SpecialistItem/SpecialistItem';
import SpecialistOpinions from '@/components/Specialists/Specialist/SpecialistOpinions/SpecialistOpinions';
import { connectMongo } from '@/helpers/mongodb';
import { Flex, Spinner } from '@chakra-ui/react';

const SpecialistPage = props => {
	const { specialist } = props;

	if (!specialist) {
		return <Spinner />;
	}

	return (
		<Flex mt='2em' flexDir={{ base: 'column', md: 'column', lg: 'row' }}>
			<SpecialistItem specialist={specialist} />
			<SpecialistOpinions specialist={specialist} />
		</Flex>
	);
};

export default SpecialistPage;

export async function getServerSideProps(context) {
	const id = context.params.slug;
	const client = await connectMongo();

	const database = client.db();

	const specialist = await database
		.collection('specialists')
		.findOne({ path: id });

	return {
		props: {
			specialist: JSON.parse(JSON.stringify(specialist)),
		},
	};
}
