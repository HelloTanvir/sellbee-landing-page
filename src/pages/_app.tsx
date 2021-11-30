import countApi from 'countapi-js';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactGa from 'react-ga';
import '../styles/globals.css';

ReactGa.initialize('UA-213823790-1');

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const countVisitors = async () => {
            await countApi.hit('sellbeez.com', 'visits');
        };

        countVisitors();
    }, []);

    useEffect(() => {
        console.log('in ga');

        ReactGa.pageview(window.location.pathname + window.location.search);
    }, [router.pathname]);

    return <Component {...pageProps} />;
}
export default MyApp;
