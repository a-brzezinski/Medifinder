import NavLink from '@/components/UI/NavLink';
import {
	Box,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Flex,
	Heading,
	Spacer,
	Text,
} from '@chakra-ui/react';

const ContactPage = () => {
	return (
		<Flex flexDir='column'>
			<Box textAlign='center'>
				<Heading mt='1em' fontSize='2.5rem'>
					Contact Us
				</Heading>
				<Text mt='1em' fontSize='1.5rem'>
					Need help or want to work with us?
				</Text>
			</Box>
			<Flex
				flexDir={{ base: 'column', sm: 'column', lg: 'row' }}
				alignItems='center'
				h={{ base: '70vh', sm: '70vh', lg: 'auto' }}
				// justifyContent='space-between'
				justifyContent={{
					base: 'space-between',
					md: 'space-around',
					xl: 'space-around',
				}}
				mt='3em'>
				<Card
					align='center'
					maxW='350px'
					borderTop='8px'
					borderColor='#b7e4c7'
					boxShadow='lg'>
					<CardHeader>
						<Heading size='xl'>Help & Support</Heading>
					</CardHeader>
					<CardBody>
						<Text fontSize='1.2rem' color='gray'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.
						</Text>
					</CardBody>
					<CardFooter>
						<NavLink desktop href=''>
							View Support Page
						</NavLink>
					</CardFooter>
				</Card>
				<Card
					mt='2em'
					align='center'
					maxW='350px'
					borderTop='8px'
					borderColor='#74c69d'
					boxShadow='lg'>
					<CardHeader>
						<Heading size='xl'>Partnership</Heading>
					</CardHeader>
					<CardBody>
						<Text fontSize='1.2rem' color='gray'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.
						</Text>
					</CardBody>
					<CardFooter>
						<NavLink desktop href=''>
							Partnership Contact
						</NavLink>
					</CardFooter>
				</Card>
			</Flex>
		</Flex>
	);
};

export default ContactPage;
