import AdminPanel from '@/components/AdminPanel/AdminPanel';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const PanelPage = () => {
	const router = useRouter();
	const isAuth = useSelector(state => state.login.isAuth);

	useEffect(() => {
		if (!isAuth) {
			router.push('/login');
			return;
		}
	}, [isAuth]);

	return <AdminPanel />;
};

export default PanelPage;
