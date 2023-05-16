import { List } from '@chakra-ui/react';
import SpecialistsItem from '../SpecialistsItem/SpecialistsItem';

const SpecialistsList = props => {
	const { specialists } = props;

	return (
		<List
			display='flex'
			flexDir='column'
			alignItems='center'
			justifyContent='center'
			gap={5}>
			{specialists.map(specialist => (
				<SpecialistsItem
					key={specialist._id}
					firstName={specialist.firstName}
					lastName={specialist.lastName}
					localization={specialist.localization}
					specialization={specialist.specialization}
					path={specialist.path}
				/>
			))}
		</List>
	);
};

export default SpecialistsList;
