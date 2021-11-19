import Link from 'next/link';
import Image from 'next/image';
import marvelLogo from '../../public/images/Marvel_Logo.svg';
import { useState, useEffect, useRef } from 'react';

const NavBar = () => {
    const paths = {
        Home: '/',
        Comics: '/comics',
        Characters: '/characters',
        Events: '/events',
        Series: '/series',
        Stories: '/stories',
    };
    const [navBarDropDown, setnavBarDropDown] = useState(false);
    const [translate, setTranslate] = useState('-translate-y-full');
    const handleClick = () => {
        setnavBarDropDown(!navBarDropDown);
    };
    useEffect(() => {
        if (navBarDropDown) {
            setTranslate('-translate-y-0');
        } else if (!navBarDropDown) {
            setTranslate('-translate-y-full');
        }
    }, [navBarDropDown]);

    return (
        <nav className="h-full flex justify-between text-white mx-4 items-center">
            <div className="absolute bg-primary h-full left-0 w-full z-0 md:hidden"></div>
            <div className="w-20 z-0">
                <a href="https://www.marvel.com/" className="flex">
                    <Image src={marvelLogo} alt="Marvel Logo" layout="intrinsic" />
                </a>
            </div>
            <ul className={`mobile-navbar ${translate} large-screen-navbar`}>
                {Object.entries(paths).map(path => (
                    <li
                        key={path[0]}
                        onClick={handleClick}
                        className="border-b border-primary last:border-0 md:border-0"
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
