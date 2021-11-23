import NavBar from './nav-bar';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';

const Layout = ({ children }) => {
    const router = useRouter();
    const { pathname } = router;
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="bg-groot bg-cover bg-right-top bg-fixed bg-gray-50 bg-blend-luminosity font-mouseMemoirs text-2xl min-h-screen flex flex-col">
            <Head>
                <title>Marvel Explorer</title>
                <link rel="icon" href="/images/ironman.png" />
            </Head>
            <header className="sticky w-full top-0 z-50 shadow-customBottom h-10 bg-primary ">
                <NavBar />
            </header>
            <main className="relative z-40 flex flex-grow justify-center">{children}</main>
            {pathname !== '/' && pathname !== '/404' && (
                <footer className="mt-auto mx-4 text-tertiary text-lg">
                    <a href="https://www.marvel.com/">
                        Data provided by Marvel. &copy; {year} Marvel
                    </a>
                </footer>
            )}
        </div>
    );
};

export default Layout;
