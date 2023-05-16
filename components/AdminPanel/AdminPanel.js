import { loginActions } from '@/store/login-slice';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import AdminControl from './AdminControl/AdminControl';

const AdminPanel = () => {
	const dispatch = useDispatch();

	const logoutHandler = e => {
		e.preventDefault();

		dispatch(loginActions.logout());
	};

	return (
		<>
			<Flex padding='1em' justifyContent='center' align='center' maxW='1200px'>
				<Heading mr='1em'>Admin Panel</Heading>
				<Button colorScheme='teal' onClick={logoutHandler}>
					Logout
				</Button>
			</Flex>
			<AdminControl />
		</>
	);
};

export default AdminPanel;
