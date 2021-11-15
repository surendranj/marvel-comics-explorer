import NavBar from './nav-bar';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Marvel Explorer</title>
            </Head>
            <div style={{ minHeight: '100vh' }} className={styles.background}>
                <header>
                    <NavBar />
                </header>
                <main>{children}</main>
            </div>
        </>
    );
};

export default Layout;
