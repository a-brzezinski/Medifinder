import Layout from '@/components/UI/Layout';
import store from '@/store';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Provider store={store}>
				<Layout>
					<Head>
						<title>MediFinder</title>
						<meta
							name='viewport'
							content='width=device-width, initial-scale=1.0'
						/>
					</Head>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</ChakraProvider>
	);
}
