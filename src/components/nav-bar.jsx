import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const NavBar = () => {
    const router = useRouter();
    const { pathname } = router;
    const paths = {
        Home: '/',
        Comics: '/comics',
        Characters: '/characters',
        Events: '/events',
        Series: '/series',
    };
    const [navBarDropDown, setnavBarDropDown] = useState(false);
    const [translate, setTranslate] = useState('-top-40');
    const handleClick = () => {
        setnavBarDropDown(!navBarDropDown);
    };
    useEffect(() => {
        if (navBarDropDown) {
            setTranslate('top-full');
        } else if (!navBarDropDown) {
            setTranslate('-top-40');
        }
    }, [navBarDropDown]);

    return (
        <nav className="h-full flex justify-between text-white mx-4 items-center">
            <div className="absolute bg-primary h-full left-0 w-full z-0 md:hidden"></div>
            <div className="px-1 tracking-tighter text-3xl bg-white text-primary rounded-sm p-0.5 h-9 flex justify-center items-center z-0">
                <Link href="/" passHref>
                    MARVEL EXPLORER
                </Link>
            </div>

            <ul className={`mobile-navbar ${translate} large-screen-navbar`}>
                {Object.entries(paths).map(path => (
                    <li
                        key={path[0]}
                        onClick={handleClick}
                        className={`border-b border-primary last:border-0 md:border-0  ${
                            pathname === path[1] && 'text-tertiary'
                        }`}
                    >
                        <Link href={path[1]}>{path[0]}</Link>
                    </li>
                ))}
            </ul>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 z-0 hover:cursor-pointer md:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={handleClick}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </nav>
    );
};

export default NavBar;
