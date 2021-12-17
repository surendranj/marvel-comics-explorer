import { useRouter } from 'next/router';
import Link from 'next/link';
import { useContext } from 'react';
import { NavBarContext } from '../../layout/layout';

const NavList = ({ className }) => {
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
    const { setToggleNavList } = navBar;
    return (
        <ul className={className}>
            {Object.entries(paths).map(path => (
                <li key={path[0]} onClick={() => setToggleNavList(false)}>
                    <Link href={path[1]}>{path[0]}</Link>
                </li>
            ))}
        </ul>
    );
};

export default NavList;
