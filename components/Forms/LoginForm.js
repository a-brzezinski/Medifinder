import { loginActions } from '@/store/login-slice';
import { AtSignIcon, LockIcon } from '@chakra-ui/icons';
import {
	Button,
	Flex,
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
	Box,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = props => {
	const { user } = props;

	const dispatch = useDispatch();
	const router = useRouter();
	const isValid = useSelector(state => state.login.isValid);

	const loginInputRef = useRef();
	const passwordInputRef = useRef();

	const loginHandler = e => {
		e.preventDefault();

		const loginData = {
			login: loginInputRef.current.value,
			password: passwordInputRef.current.value,
		};

		if (
			loginData.password === user.login &&
			loginData.login === user.password
		) {
			dispatch(loginActions.login());
			dispatch(loginActions.setIsValid(true));
			router.push('/panel');
			return;
		} else {
			dispatch(loginActions.setIsValid(false));
		}
	};

	return (
		<Flex flexDir='column' h='40%'>
			<Text
				textAlign='center'
				fontSize='3rem'
				fontWeight='bold'
				color='#006d77'>
				Login
			</Text>
			<Box>
				<form onSubmit={loginHandler}>
					<FormControl mt='1em'>
						<InputGroup>
							<InputLeftElement children={<AtSignIcon />} />
							<Input placeholder='Login' required ref={loginInputRef} />
						</InputGroup>
					</FormControl>
					<FormControl mt='1em'>
						<InputGroup>
							<InputLeftElement children={<LockIcon />} />
							<Input
								placeholder='Password'
								required
								type='password'
								ref={passwordInputRef}
							/>
						</InputGroup>
					</FormControl>
					{!isValid && (
						<Text mt='1em' textAlign='center' color='tomato'>
							Invalid password or login
						</Text>
					)}
					<Button w='100%' type='submit' colorScheme='teal' mt='1em'>
						Login
					</Button>
				</form>
			</Box>
		</Flex>
	);
};

export default LoginForm;
