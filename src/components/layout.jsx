import NavBar from './nav-bar';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';

const Layout = ({ children }) => {
    const router = useRouter();
    const { pathname } = router;
    return (
        <div className="font-mouseMemoirs text-2xl bg-groot bg-cover bg-center bg-fixed bg-gray-600 bg-blend-multiply">
            {/* <div className="font-mouseMemoirs text-2xl"> */}
            <Head>
                <title>Marvel Explorer</title>
                {/* <link rel="icon" href="/images/captain-america-shield-icon-16.jpg" /> */}
                <link rel="icon" href="/images/ironman.png" />
            </Head>
            <div className="min-h-screen">
                <header className="sticky top-0 z-10 shadow-customBottom">
                    <NavBar />
                </header>
                <main className="relative min-h-screen">{children}</main>
                <footer className={`${pathname === '/' && 'hidden'} bg-primary text-white `}>
                    Copy
                </footer>
            </div>
        </div>
    );
};

export default Layout;
