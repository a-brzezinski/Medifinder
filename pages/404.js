import NavLink from '@/components/UI/NavLink';
import { Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';

const NotFoundPage = () => {
	return (
		<Flex
			flexDir='column'
			justifyContent='center'
			alignItems='center'
			p='0.5em'>
			<Heading as='h2' mb='1em' textAlign='center'>
				The page you were looking for does not exist.
			</Heading>
			<Image src='/img/404.svg' width={1200} height={1200} />
			<NavLink desktop href='/' mgTop='1em'>
				Home
			</NavLink>
		</Flex>
	);
};
export default NotFoundPage;
