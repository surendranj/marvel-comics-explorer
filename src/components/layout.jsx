import NavBar from './nav-bar/nav-bar';
import Head from 'next/head';
import FullScreenLoader from './loader';
import { createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import { RouteContext } from '../../pages/_app';
import useToggleNavBar from '../hooks/useToggleNavBar';
import useInputChange from '../hooks/useInputChange';

export const NavBarContext = createContext();

const Layout = ({ children }) => {
    const router = useRouter();
    const { pathname } = router;
    const isChangingRoute = useContext(RouteContext);
    const [translate, closeNavBar, toggleNavBar] = useToggleNavBar();

    const [searchInputVal, setSearchInputVal, handleSearchInputChange] = useInputChange();

    const closeSearchList = () => setSearchInputVal('');

    const indexOfSecondSlash = pathname.indexOf('/', 1);
    const placeholder =
        router.pathname !== '/' &&
        (indexOfSecondSlash > 0
            ? `${pathname[1].toUpperCase() + pathname.slice(2, indexOfSecondSlash)}`
            : `${pathname[1].toUpperCase() + pathname.slice(2)}`);

    const searchEndPoint =
        router.pathname !== '/' &&
        (indexOfSecondSlash === -1
            ? router.pathname
            : router.pathname.slice(0, indexOfSecondSlash));
    return (
        <div className="font-mouseMemoirs text-2xl min-h-screen flex flex-col">
            <Head>
                <title>Marvel Explorer</title>
                <link rel="icon" href="/images/logos/ironman.png" />
            </Head>
            {router.pathname !== '/' && (
                <header className="sticky w-full top-0 z-50 shadow-customBottom h-10 bg-primary ">
                    <NavBarContext.Provider
                        value={{
                            translate,
                            toggleNavBar,
                            searchInputVal,
                            handleSearchInputChange,
                            closeSearchList,
                            placeholder,
                            searchEndPoint,
                        }}
                    >
                        <NavBar />
                    </NavBarContext.Provider>
                </header>
            )}
            <main
                onClick={() => {
                    closeNavBar();
                    closeSearchList();
                }}
                className="relative z-40 flex flex-grow flex-col justify-center bg-gray-100"
            >
                {children}
            </main>
            {isChangingRoute && <FullScreenLoader />}
        </div>
    );
};

export default Layout;
