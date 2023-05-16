import { Avatar, Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

const SpecialistItem = props => {
	const { specialist } = props;

	return (
		<Box
			w={{ base: '100%', md: '100%', lg: '50%' }}
			borderLeftRadius='10px'
			p='1em'
			bg='#f8f9fa'
			boxShadow='base'>
			<Flex flexDir='column'>
				<Avatar alignSelf='center' size='xl' boxShadow='2xl' />
				<Heading color='#081c15' textAlign='center' fontSize='3rem'>
					{specialist.firstName} {specialist.lastName}
				</Heading>
				<Flex
					fontWeight='bold'
					textAlign='center'
					mt='1.5em'
					color='#065a60'
					fontSize='1.8rem'
					justifyContent='space-around'>
					<Text>{specialist.localization}</Text>
					<Text>{specialist.specialization}</Text>
					<Text>
						Opinions:
						<Text as='span' color='#212f45'>
							{' '}
							{specialist.opinions.length}
						</Text>
					</Text>
				</Flex>
				<Text mt='2em' p='1em' textAlign='justify' fontSize='1.4rem'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</Text>
				<Button colorScheme='teal'>Contact</Button>
			</Flex>
		</Box>
	);
};

export default SpecialistItem;
