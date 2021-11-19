import NavBar from './nav-bar';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';

const Layout = ({ children }) => {
    const router = useRouter();
    const { pathname } = router;
    return (
        <div className="bg-groot bg-cover bg-center bg-fixed bg-gray-50 bg-blend-luminosity font-mouseMemoirs text-2xl min-h-screen flex flex-col">
            <Head>
                <title>Marvel Explorer</title>
                <link rel="icon" href="/images/ironman.png" />
            </Head>
            <header className="sticky w-full top-0 z-10 shadow-customBottom h-10 bg-primary ">
                <NavBar />
            </header>
            <main>{children}</main>
            {pathname !== '/' && (
                <footer className="mt-auto  text-white text-lg">
                    <span className="ml-4">Data provided by Marvel. &copy; 2014 Marvel</span>
                </footer>
            )}
        </div>
    );
};

export default Layout;
