import NewsletterForm from '@/components/Forms/NewsletterForm';
import { Flex, Heading, Text, Box } from '@chakra-ui/react';
import Image from 'next/image';

const NewsletterPage = () => {
	return (
		<Flex
			flexDir={{ base: 'column', md: 'column', lg: 'row' }}
			padding='1em'
			align='center'
			mt='2em'>
			<Flex flexDir='column' w={{ base: '100%', md: '100%', lg: '60%' }}>
				<Box>
					<Heading as='h3' fontSize='3rem' color='#309695'>
						Subscribe Now
					</Heading>
					<Text fontSize='2rem' color='#3dccc7'>
						to Our Newsletter
					</Text>
				</Box>
				<Text color='#081c15'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with
				</Text>
				<NewsletterForm />
			</Flex>
			<Flex>
				<Image
					src='img/newsletter.svg'
					alt='newsletter image'
					width={600}
					height={200}
				/>
			</Flex>
		</Flex>
	);
};

export default NewsletterPage;
