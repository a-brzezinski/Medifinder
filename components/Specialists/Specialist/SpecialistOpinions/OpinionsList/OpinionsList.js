import { List, Text } from '@chakra-ui/react';
import OpinionItem from '../OpinionItem.js/OpinionItem';

const OpinionsList = props => {
	const opinions = props.opinions;

	return (
		<List mt='1em' gap={2} overflow='scroll' maxH='500px' overflowX='hidden'>
			{opinions.length === 0 && (
				<Text
					fontSize='1.6rem'
					textAlign='center'
					color='#1b3a4b'
					fontWeight='bold'>
					Be the first to add an opinion.
				</Text>
			)}
			{opinions.map(item => (
				<OpinionItem key={item.id} name={item.name} text={item.text} />
			))}
		</List>
	);
};

export default OpinionsList;
