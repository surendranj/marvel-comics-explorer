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
    console.log(Object.entries(paths));
    return (
        <nav className="bg-primary ">
            <ul className="flex flex-row justify-between">
                <ul className="ml-4">
                    <li className="flex">
                        <Image src={marvelLogo} alt="Marvel Logo" width="100" height="50" />
                    </li>
                </ul>
                <ul className="mr-4 flex flex-row flex-grow justify-around items-center text-white">
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
