import { Flex } from '@chakra-ui/react';
import Navigation from './Navigation';
import { useRouter } from 'next/router';

const Layout = props => {
	const router = useRouter();

	return (
		<Flex flexDir='column' maxW='1400px' m='auto'>
			{router.pathname === '/login' || router.pathname === '/panel' ? null : (
				<Navigation />
			)}
			<main>{props.children}</main>
		</Flex>
	);
};

export default Layout;
