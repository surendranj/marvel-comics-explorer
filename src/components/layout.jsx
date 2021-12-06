import NavBar from './nav-bar';
import Head from 'next/head';
import FullScreenLoader from './loader';
import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { RouteContext } from '../../pages/_app';

const Layout = ({ children }) => {
    const router = useRouter();
    const isChangingRoute = useContext(RouteContext);

    const [navBarDropDown, setnavBarDropDown] = useState(false);
    const [translate, setTranslate] = useState('-top-40');
    const closeNavBar = () => {
        setnavBarDropDown(false);
    };
    const toggleNavBar = () => {
        setnavBarDropDown(navBarDropDown => !navBarDropDown);
    };
    useEffect(() => {
        if (navBarDropDown) {
            setTranslate('top-full');
        } else if (!navBarDropDown) {
            setTranslate('-top-40');
        }
    }, [navBarDropDown]);
    return (
        <div className="font-mouseMemoirs text-2xl min-h-screen flex flex-col">
            <Head>
                <title>Marvel Explorer</title>
                <link rel="icon" href="/images/logos/ironman.png" />
            </Head>
            {router.pathname !== '/' && (
                <header className="sticky w-full top-0 z-50 shadow-customBottom h-10 bg-primary ">
                    <NavBar toggleNavBar={toggleNavBar} translate={translate} />
                </header>
            )}
            <main
                onClick={closeNavBar}
                className="relative z-40 flex flex-grow flex-col justify-center bg-gray-100"
            >
                {children}
            </main>
            {isChangingRoute && (
                <FullScreenLoader className="fixed z-40 w-full h-full flex justify-center bg-white opacity-75" />
            )}
        </div>
    );
};

export default Layout;
