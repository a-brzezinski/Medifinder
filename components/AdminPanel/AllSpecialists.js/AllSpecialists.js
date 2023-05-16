import DummySpecialistItem from '@/components/Specialists/DummySpecialistItem/DummySpecialistItem';
import { List } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const AllSpecialists = () => {
	const [specialists, setSpecialists] = useState();

	useEffect(() => {
		fetch('/api/panel')
			.then(response => response.json())
			.then(data => setSpecialists(data.specialists));
	}, []);

	return (
		<List
			display='flex'
			flexWrap='wrap'
			flexDir={{ base: 'column', md: 'column', lg: 'row' }}
			gap={5}
			justifyContent='center'
			alignItems='center'>
			{specialists?.map(spec => (
				<DummySpecialistItem
					firstName={spec.firstName}
					lastName={spec.lastName}
					specialization={spec.specialization}
					localization={spec.localization}
					key={spec._id}
					id={spec._id}
				/>
			))}
		</List>
	);
};

export default AllSpecialists;
