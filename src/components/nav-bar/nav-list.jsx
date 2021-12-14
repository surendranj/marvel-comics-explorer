import Link from 'next/link';
import { useContext } from 'react';
import { NavBarContext } from '../layout';
import { useRouter } from 'next/router';

const NavList = () => {
    const router = useRouter();
    const { pathname } = router;
    const paths = {
        Home: '/',
        Comics: '/comics',
        Characters: '/characters',
        Events: '/events',
        Series: '/series',
    };

    const navBar = useContext(NavBarContext);
    const { translate, toggleNavBar } = navBar;

    return (
        <ul className={`mobile-navbar ${translate} large-screen-navbar`}>
            {Object.entries(paths).map(path => (
                <li
                    key={path[0]}
                    onClick={toggleNavBar}
                    className={`border-b border-primary last:border-0 md:border-0  ${
                        pathname === path[1] && 'text-tertiary'
                    }`}
                >
                    <Link href={path[1]}>{path[0]}</Link>
                </li>
            ))}
        </ul>
    );
};

export default NavList;
