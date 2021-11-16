import NavBar from './nav-bar';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';

const Layout = ({ children }) => {
    const router = useRouter();
    const { pathname } = router;
    return (
        <div className="background font-mouseMemoirs text-2xl min-h-screen">
            <Head>
                <title>Marvel Explorer</title>
                <link rel="icon" href="/images/ironman.png" />
            </Head>
            <div className="flex flex-col min-h-screen">
                <header className="sticky top-0 z-10 shadow-customBottom h-10 bg-primary ">
                    <NavBar />
                </header>
                <main>{children}</main>
                {pathname !== '/' && (
                    <footer className="mt-auto  text-white text-lg">
                        <span className="ml-4">Data provided by Marvel. &copy; 2014 Marvel</span>
                    </footer>
                )}
            </div>
        </div>
    );
};

export default Layout;
