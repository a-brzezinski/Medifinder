import { Flex, IconButton, Link, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import NavLink from './NavLink';

const Navigation = () => {
	const [display, setDisplay] = useState('none');

	return (
		<>
			<Flex
				display={{ base: 'none', md: 'none', lg: 'flex' }}
				bg='white'
				pos='sticky'
				zIndex={20}
				w='100%'>
				<Flex align='center' w='100%' p='1em'>
					<Link
						href='/'
						fontFamily='heading'
						as={NextLink}
						fontSize='3rem'
						color='#309695'
						_hover={{
							color: '#3dccc7',
						}}>
						MediFinder
					</Link>
					<Spacer />
					<NavLink desktop mgRight='1em' href='/specialists'>
						Our Specialists
					</NavLink>
					<NavLink desktop mgRight='1em' href='/contact'>
						Contact
					</NavLink>
					<NavLink desktop href='/newsletter'>
						Newsletter
					</NavLink>
				</Flex>
			</Flex>
			<Flex
				display={{ base: 'flex', md: 'flex', lg: 'none' }}
				padding='0.5em'
				pos='relative'
				w='100%'>
				<Flex alignItems='center'>
					<Link
						href='/'
						fontFamily='heading'
						as={NextLink}
						fontSize='3rem'
						color='#309695'
						_hover={{
							color: '#3dccc7',
						}}>
						MediFinder
					</Link>
					{display === 'none' ? (
						<IconButton
							pos='absolute'
							right='1em'
							colorScheme='teal'
							variant='ghost'
							size='lg'
							onClick={() => setDisplay('flex')}
							icon={<HamburgerIcon fontSize='3rem' />}
						/>
					) : (
						<IconButton
							pos='absolute'
							right='1em'
							colorScheme='teal'
							variant='ghost'
							size='lg'
							onClick={() => setDisplay('none')}
							icon={<CloseIcon fontSize='2rem' />}
						/>
					)}
				</Flex>
			</Flex>
			<Flex
				display={display}
				flexDir='column'
				align='center'
				w='100vw'
				bg='#f1faee'>
				<NavLink mobile href='/specialists' onClick={() => setDisplay('none')}>
					Our Specialists
				</NavLink>
				<NavLink mobile href='/contact' onClick={() => setDisplay('none')}>
					Contact
				</NavLink>
				<NavLink mobile href='/newsletter' onClick={() => setDisplay('none')}>
					Newsletter
				</NavLink>
			</Flex>
		</>
	);
};

export default Navigation;
