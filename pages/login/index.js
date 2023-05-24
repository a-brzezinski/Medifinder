import LoginForm from '@/components/Forms/LoginForm';
import { connectMongo } from '@/helpers/mongodb';
import { Flex } from '@chakra-ui/react';

const LoginPage = props => {
	const { user } = props;
	return (
		<Flex w='100%' h='100vh' justify='center' align='center'>
			<LoginForm user={user} />
		</Flex>
	);
};

export default LoginPage;

export async function getStaticProps() {
	const client = await connectMongo();

	const database = client.db();

	const userFromDb = await database.collection('admins').findOne();

	const user = JSON.parse(JSON.stringify(userFromDb));
	return {
		props: { user },
	};
}
