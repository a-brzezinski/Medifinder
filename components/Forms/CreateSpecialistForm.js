import { specializations } from '@/helpers/specializations';
import {
	Button,
	Flex,
	Heading,
	Input,
	Select,
	Textarea,
	useToast,
} from '@chakra-ui/react';
import { useRef } from 'react';

const CreateSpecialistForm = () => {
	const specializationsArray = specializations;

	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const localizationRef = useRef();
	const specializationRef = useRef();
	const aboutRef = useRef();
	const toast = useToast();

	const formSubmitHandler = async e => {
		e.preventDefault();

		const firstNameValue = firstNameRef.current.value;
		const lastNameValue = lastNameRef.current.value;
		const buildPath = `${firstNameValue.toLowerCase()}-${lastNameValue.toLowerCase()}`;

		const specialistData = {
			firstName: firstNameValue,
			lastName: lastNameValue,
			localization: localizationRef.current.value,
			specialization: specializationRef.current.value,
			about: aboutRef.current.value,
			path: buildPath,
			opinions: [],
		};

		try {
			const response = await fetch('/api/panel', {
				method: 'POST',
				body: JSON.stringify(specialistData),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				toast({
					title: 'Something went wrong',
					status: 'error',
					duration: 3000,
				});
				return;
			}

			toast({
				title:
					'Specialist has been added, change will be visible up to a few minutes',
				status: 'success',
				duration: 3000,
			});
		} catch (error) {
		} finally {
			firstNameRef.current.value = '';
			lastNameRef.current.value = '';
			localizationRef.current.value = '';
			specializationRef.current.value = '';
			aboutRef.current.value = '';
		}
	};

	return (
		<Flex
			minH='350px'
			maxW='400px'
			justifyContent='center'
			align='center'
			flexDir='column'
			border='1px'
			borderColor='gray.200'
			borderRadius='8px'
			boxShadow='2xl'
			p='1em'>
			<Heading color='#065a60'>Create Specialist</Heading>
			<form onSubmit={formSubmitHandler}>
				<Flex mt='1em' gap={2}>
					<Input
						focusBorderColor='gray.400'
						placeholder='First Name'
						required
						ref={firstNameRef}
					/>
					<Input
						focusBorderColor='gray.400'
						placeholder='Last Name'
						required
						ref={lastNameRef}
					/>
				</Flex>
				<Flex mt='1em' gap={2}>
					<Input
						focusBorderColor='gray.400'
						w='50%'
						placeholder='Localization'
						required
						ref={localizationRef}
					/>
					<Select
						focusBorderColor='gray.400'
						w='50%'
						required
						placeholder='Specialization'
						ref={specializationRef}>
						{specializationsArray.map(spec => (
							<option value={spec}>{spec}</option>
						))}
					</Select>
				</Flex>
				<Textarea
					focusBorderColor='gray.400'
					mt='1em'
					placeholder='About Specialist'
					required
					ref={aboutRef}
				/>
				<Button
					type='submit'
					letterSpacing='1px'
					mt='1em'
					w='100%'
					colorScheme='teal'>
					Create Specialist
				</Button>
			</form>
		</Flex>
	);
};

export default CreateSpecialistForm;
