import {
	Box,
	Button,
	Flex,
	FormControl,
	Input,
	Spinner,
	Text,
	Textarea,
	useToast,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

const AddOpinionForm = props => {
	const nameInputRef = useRef();
	const opinionInputRef = useRef();
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const toast = useToast();

	const formSubmitHandler = async e => {
		e.preventDefault();
		setIsLoading(true);

		const opinion = {
			name: nameInputRef.current.value,
			text: opinionInputRef.current.value,
			id: Date.now(),
		};

		try {
			const response = await fetch(`/api/specialists/${props.id}`, {
				method: 'PUT',
				body: JSON.stringify(opinion),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error('Failed to add opinion');
			}

			nameInputRef.current.value = '';
			opinionInputRef.current.value = '';
			setError(null);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
			toast({
				title:
					'Opinion has been added, change will be visible up to a few minutes',
				status: 'success',
				duration: 3000,
			});
		}
	};

	return (
		<Flex flexDir='column'>
			<Text
				fontSize='2rem'
				fontWeight='bold'
				textAlign='center'
				color='#1b3a4b'>
				Share your opinion
			</Text>
			<form onSubmit={formSubmitHandler}>
				<FormControl mt='1em'>
					<Input
						fontSize='1.2rem'
						focusBorderColor='gray.400'
						placeholder='Your Name'
						required
						ref={nameInputRef}
					/>
				</FormControl>
				<FormControl mt='1em'>
					<Textarea
						focusBorderColor='gray.400'
						fontSize='1.2rem'
						placeholder='Enter your opinion'
						required
						ref={opinionInputRef}></Textarea>
				</FormControl>
				{error && (
					<Text
						mt='1em'
						color='red'
						fontWeight='bold
				'>
						{error}
					</Text>
				)}
				{isLoading ? (
					<Flex mt='1em' justify='center'>
						<Spinner
							thickness='4px'
							speed='0.65s'
							emptyColor='gray.200'
							color='teal'
							size='xl'
						/>
					</Flex>
				) : (
					<Button mt='1em' w='100%' type='submit' colorScheme='teal'>
						Add Opinion
					</Button>
				)}
			</form>
		</Flex>
	);
};

export default AddOpinionForm;
