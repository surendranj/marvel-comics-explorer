import { useContext } from 'react';
import { NavBarContext } from '../../layout/layout';

const BurgerIcon = ({ className }) => {
    const navBar = useContext(NavBarContext);
    const { toggleNavList, setToggleNavList } = navBar;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setToggleNavList(!toggleNavList)}
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
