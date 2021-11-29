import countApi from 'countapi-js';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import ReactGa from 'react-ga';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const countVisitors = async () => {
            await countApi.hit('sellbeez.com', 'visits');
        };

        countVisitors();
    }, []);

    useEffect(() => {
        ReactGa.initialize('G-MT27R677RQ');

        ReactGa.pageview(window.location.pathname + window.location.search);
    }, []);

    return <Component {...pageProps} />;
}
export default MyApp;
