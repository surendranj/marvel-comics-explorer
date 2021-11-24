import NavBar from './nav-bar';
import Head from 'next/head';

const Layout = ({ children }) => {
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
        </div>
    );
};

export default Layout;
