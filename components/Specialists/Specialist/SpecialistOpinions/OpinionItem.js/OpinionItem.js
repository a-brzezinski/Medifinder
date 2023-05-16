import { Avatar, Divider, Flex, Text } from '@chakra-ui/react';

const OpinionItem = props => {
	return (
		<Flex
			flexDir='column'
			border='1px solid gray'
			borderRadius='8px'
			p='0.5em'
			mt='1em'>
			<Flex align='center'>
				<Avatar name={props.name} bg='teal' color='white' />
				<Text ml='0.2em' fontWeight='bold' fontSize='1.5rem'>
					{props.name}
				</Text>
			</Flex>
			<Divider mt='0.5em' />
			<Text mt='0.5em' fontSize='1.3rem'>
				{props.text}
			</Text>
		</Flex>
	);
};

export default OpinionItem;
