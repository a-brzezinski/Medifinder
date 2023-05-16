import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useRef } from 'react';

const NewsletterForm = () => {
	const nameInputRef = useRef();
	const emailInputRef = useRef();

	const formSubmitHandler = async e => {
		e.preventDefault();

		const newsletterData = {
			name: nameInputRef.current.value,
			email: emailInputRef.current.value,
		};

		try {
			const response = await fetch('/api/newsletter', {
				method: 'POST',
				body: JSON.stringify(newsletterData),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) return;
		} catch (error) {
			throw new Error('Something went wrong')
		} finally {
			nameInputRef.current.value = '';
			emailInputRef.current.value = '';
		}
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<FormControl id='name' w={{ base: '100%', md: '100%', lg: '60%' }}>
				<FormLabel>Name</FormLabel>
				<Input focusBorderColor='green.400' required ref={nameInputRef} />
			</FormControl>
			<FormControl id='email' w={{ base: '100%', md: '100%', lg: '60%' }}>
				<FormLabel>Email</FormLabel>
				<Input
					type='email'
					focusBorderColor='green.400'
					required
					ref={emailInputRef}
				/>
			</FormControl>

			<Button
				mt='1em'
				fontSize='1.5rem'
				padding='1em 2em'
				colorScheme='teal'
				type='submit'>
				Sign up
			</Button>
		</form>
	);
};

export default NewsletterForm;
