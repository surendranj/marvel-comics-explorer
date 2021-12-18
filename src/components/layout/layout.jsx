import Head from 'next/head';
import FullScreenLoader from '../loaders/full-screen-loader';
import NavBar from '../nav-bar/nav-bar';
import { createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import { RouteContext } from '../../../pages/_app';
import useToggleNavList from '../../hooks/useToggleNavList';
import useToggleSearchList from '../../hooks/useToggleSearchList';
import useInputChange from '../../hooks/useInputChange';
import { useEffect, useState } from 'react';

export const NavBarContext = createContext();

const Layout = ({ children }) => {
    const router = useRouter();
    const { pathname } = router;
    const isChangingRoute = useContext(RouteContext);
    const [toggleNavList, setToggleNavList] = useToggleNavList();
    const [toggleSearchList, setToggleSearchList] = useToggleSearchList();
    const [searchInputVal, setSearchInputVal, handleSearchInputChange] = useInputChange();

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

    const [is404, setIs404] = useState();

    useEffect(() => {
        if ('/404' in router.components) {
            setIs404(true);
        } else {
            setIs404(false);
        }
    }, [router.components]);

    return (
        <div className="font-mouseMemoirs text-2xl min-h-screen flex flex-col">
            <Head>
                <title>Marvel Explorer</title>
                <link rel="icon" href="/images/logos/ironman.png" />
            </Head>
            {router.pathname !== '/' && !router.pathname.includes('/404') && !is404 && (
                <header className="sticky w-full top-0 z-50 shadow-customBottom h-10 bg-primary ">
                    <NavBarContext.Provider
                        value={{
                            toggleNavList,
                            setToggleNavList,
                            toggleSearchList,
                            setToggleSearchList,
                            searchInputVal,
                            handleSearchInputChange,
                            placeholder,
                            searchEndPoint,
                        }}
                    >
                        <NavBar />
                    </NavBarContext.Provider>
                </header>
            )}
            <main
                onClick={() => setToggleNavList(false)}
                className="relative z-40 flex flex-grow flex-col justify-center bg-gray-100"
            >
                {children}
            </main>
            {isChangingRoute && <FullScreenLoader />}
        </div>
    );
};

export default Layout;
