import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react';

const DummySpecialistItem = props => {

	const toast = useToast()

	const deleteHandler = async () => {
		const response = await fetch(`/api/specialists/${props.id}`, {
			method: 'DELETE',
		});

		toast({
			title:
				'Specialist has been successfully deleted.',
			status: 'success',
			duration: 3000,
		});

		if (!response.ok) {
			toast({
				title:
					'Something went wrong',
				status: 'Error',
				duration: 3000,
			});
			return
		};
	};

	return (
		<Flex
			flexDir='column'
			minW='300px'
			border='1px'
			borderColor='gray.200'
			padding='1em'
			borderRadius='8px'
			boxShadow='dark-lg'>
			<Box margin='1em'>
				<Text fontWeight='bold' fontSize='1.6rem'>
					{props.firstName}-{props.lastName}
				</Text>
				<Text fontSize='1.4rem'>{props.specialization}</Text>
				<Text fontSize='1.4rem'>{props.localization}</Text>
			</Box>
			<Button onClick={deleteHandler} colorScheme='red'>
				DELETE
			</Button>
		</Flex>
	);
};

export default DummySpecialistItem;
