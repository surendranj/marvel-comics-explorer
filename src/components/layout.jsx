import NavBar from './nav-bar';
import Head from 'next/head';
import FullScreenLoader from './loader';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
    const router = useRouter();
    const [isChangingRoute, setIsChangingRoute] = useState(false);
    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            setIsChangingRoute(true);
        });
        router.events.on('routeChangeComplete', () => {
            setIsChangingRoute(false);
        });
    }, [router.events]);
    return (
        <div className="bg-groot bg-cover bg-right-top bg-fixed bg-gray-50 bg-blend-luminosity font-mouseMemoirs text-2xl min-h-screen flex flex-col">
            <Head>
                <title>Marvel Explorer</title>
                <link rel="icon" href="/images/logos/ironman.png" />
            </Head>
            <header className="sticky w-full top-0 z-50 shadow-customBottom h-10 bg-primary ">
                <NavBar />
            </header>
            <main className="relative z-40 flex flex-grow flex-col justify-center">{children}</main>
            {isChangingRoute && (
                <FullScreenLoader className="fixed z-40 w-full h-full flex justify-center bg-white opacity-75" />
            )}
        </div>
    );
};

export default Layout;
