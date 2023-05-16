import AddOpinionForm from '@/components/Forms/AddOpinionForm';
import { Flex } from '@chakra-ui/react';
import  OpinionsList  from './OpinionsList/OpinionsList';

const SpecialistOpinions = props => {
	return (
		<Flex
			p='0.5em'
			bg='#f8f9fa'
			flexDir='column'
			w={{ base: '100%', md: '100%', lg: '50%' }}>
			<AddOpinionForm id={props.specialist._id} />
			<OpinionsList opinions={props.specialist.opinions} />
		</Flex>
	);
};

export default SpecialistOpinions;
