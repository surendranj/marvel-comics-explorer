import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { NavBarContext } from '../../layout/layout';
import { motion } from 'framer-motion';

const MobileNavList = ({ className }) => {
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
    const { toggleNavList, setToggleNavList } = navBar;

    return (
        <motion.ul
            animate={{ translateY: toggleNavList ? '0%' : '-110%' }}
            initial={false}
            transition={{ type: 'spring', stiffness: 70 }}
            className={className}
        >
            {Object.entries(paths).map(path => (
                <li key={path[0]} onClick={() => setToggleNavList(false)}>
                    <Link href={path[1]}>{path[0]}</Link>
                </li>
            ))}
        </motion.ul>
    );
};

export default MobileNavList;
