import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import AllSpecialists from '../AllSpecialists.js/AllSpecialists';

import CreateSpecialistForm from '@/components/Forms/CreateSpecialistForm';

const AdminControl = () => {
	return (
		<Tabs isFitted colorScheme='teal'>
			<TabList>
				<Tab fontSize='1.5em'>All Specialists</Tab>
				<Tab fontSize='1.5em'>Add Specialist</Tab>
			</TabList>
			<TabPanels>
				<TabPanel maxW='1200px'>
					<AllSpecialists />
				</TabPanel>
				<TabPanel display='flex' justifyContent='center'>
					<CreateSpecialistForm />
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default AdminControl;
