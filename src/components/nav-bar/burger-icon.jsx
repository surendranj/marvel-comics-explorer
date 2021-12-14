import { NavBarContext } from '../layout';
import { useContext } from 'react';

const BurgerIcon = () => {
    const navBar = useContext(NavBarContext);
    const { toggleNavBar, closeSearchList } = navBar;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 z-0 hover:cursor-pointer md:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
                closeSearchList();
                toggleNavBar();
            }}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    );
};

export default BurgerIcon;
