import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const NavLink = props => {
	if (props.desktop) {
		return (
			<Link
				as={NextLink}
				marginRight={props.mgRight}
				background='#309695'
				padding='0.5em 1em'
				fontSize='1.5rem'
				borderRadius='30px'
				color='white'
				marginTop={props.mgTop}
				href={props.href}
				_hover={{
					background: '#3dccc7',
				}}>
				{props.children}
			</Link>
		);
	}

	if (props.mobile) {
		return (
			<Link
				as={NextLink}
				padding='0.5em 1em'
				fontSize='1.5rem'
				color='#309695'
				onClick={props.onClick}
				href={props.href}
				_hover={{
					color: '#95d5b2',
				}}>
				{props.children}
			</Link>
		);
	}
};

export default NavLink;
