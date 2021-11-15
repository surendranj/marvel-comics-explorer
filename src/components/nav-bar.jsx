import Link from 'next/link';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/comics">Comics</Link>
                </li>
                <li>
                    <Link href="/characters">Characters</Link>
                </li>
                <li>
                    <Link href="/events">Events</Link>
                </li>
                <li>
                    <Link href="/stories">Stories</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
