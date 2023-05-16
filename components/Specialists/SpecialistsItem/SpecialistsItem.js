import NavLink from '@/components/UI/NavLink';
import { Flex, Heading, Text, Icon, Avatar, Spacer } from '@chakra-ui/react';
import { GrLocation } from 'react-icons/gr';

const SpecialistsItem = props => (
	<Flex
		w='95%'
		p='0.5em'
		boxShadow='xl'
		borderRadius='10px'
		border='2px'
		borderColor='teal.500'>
		<Avatar alignSelf='center' mr='0.5em' size={{ base: 'lg', md: '2xl' }} />
		<Flex flexDir='column' w='100%'>
			<Heading as='h3' fontSize='2rem'>
				{props.firstName} {props.lastName}
			</Heading>
			<Text fontSize='1.6rem'>{props.specialization}</Text>
			<Spacer />
			<Flex w='100%' justifyContent='space-between'>
				<Flex alignItems='center'>
					<Icon boxSize={7} as={GrLocation} />
					<Text fontSize='1.4rem'>{props.localization}</Text>
				</Flex>
				<NavLink fontSize='2rem' desktop href={`specialists/${props.path}`}>
					View
				</NavLink>
			</Flex>
		</Flex>
	</Flex>
);

export default SpecialistsItem;
