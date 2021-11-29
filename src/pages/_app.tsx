import countApi from 'countapi-js';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const countVisitors = async () => {
            await countApi.hit('sellbeez.com', 'visits');
        };

        countVisitors();
    }, []);

    return <Component {...pageProps} />;
}
export default MyApp;
