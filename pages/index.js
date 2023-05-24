import { Flex, Heading, Box, Text, ScaleFade } from '@chakra-ui/react';
import Image from 'next/image';
import NavLink from '@/components/UI/NavLink';

export default function Home(props) {
	return (
		<ScaleFade in='true'>
			<Flex flexDir='column' align='center' mt='2em'>
				<Box margin='2em'>
					<Heading color='#319795'>Welcome to MediFinder! {props.test}</Heading>
					<Text color='#081c15' fontSize='2rem'>
						With us you will find the best specialists!
					</Text>
				</Box>
				<Image
					alt='Two doctors'
					src='/img/medicine.svg'
					width={1000}
					height={200}
				/>
				<Flex flexDir='column' align='center' mt='2em'>
					<Text fontSize='1.6rem' color='#081c15' textAlign='center'>
						Do you want to surround yourself with the best specialists ?
					</Text>
					<NavLink desktop mgTop='1em' href='/specialists'>
						Meet them!
					</NavLink>
				</Flex>
			</Flex>
		</ScaleFade>
	);
}

