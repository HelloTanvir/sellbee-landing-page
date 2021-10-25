import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Home: NextPage = () => (
    <div>
        <Head>
            <title>Sell Bee | Pre-Registration</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <div className="flex justify-center mt-32">
            <iframe
                title="pre-reg-form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfIEaA9o-X1RT0PTpKJtK3ibcSA9_y-KJwBNTp2O1k42hjMZw/viewform?embedded=true"
                width="740"
                height="1029"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
            >
                Loading…
            </iframe>
        </div>

        <Footer />
    </div>
);

export default Home;
