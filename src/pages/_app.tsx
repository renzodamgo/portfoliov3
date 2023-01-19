import type { AppProps } from 'next/app';
import Layout from 'src/components/layout';
import 'styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
