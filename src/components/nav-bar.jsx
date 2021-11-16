import Link from 'next/link';
import Image from 'next/image';
import marvelLogo from '../../public/images/Marvel_Logo.svg';

const NavBar = () => {
    const paths = {
        Home: '/',
        Comics: '/comics',
        Characters: '/characters',
        Events: '/events',
        Series: '/series',
        Stories: '/stories',
    };
    return (
        <nav className="h-full">
            <ul className="flex flex-row justify-between h-full">
                <ul className="ml-4 w-20 flex">
                    <li className="flex">
                        <a href="https://www.marvel.com/" className="flex">
                            <Image src={marvelLogo} alt="Marvel Logo" layout="intrinsic" />
                        </a>
                    </li>
                </ul>
                <ul className="mr-4 flex flex-row flex-grow-0.9 justify-around items-center text-white">
                    {Object.entries(paths).map(path => (
                        <li key={path[0]}>
                            <Link href={path[1]}>{path[0]}</Link>
                        </li>
                    ))}
                </ul>
            </ul>
        </nav>
    );
};

export default NavBar;
