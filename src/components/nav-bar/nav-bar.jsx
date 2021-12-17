import Logo from './logo/logo';
import SearchBar from './search-bar/search-bar';
import BurgerIcon from './icons/burger-icon';
import MobileNavList from './nav-list/mobile-nav-list';
import NavList from './nav-list/nav-list';

const NavBar = () => {
    return (
        <nav className=" h-full flex justify-between items-center">
            <div className=" absolute z-10 top-0 w-full h-full bg-primary"></div>
            <Logo className=" z-50 px-1 mx-1 tracking-tighter bg-white text-primary rounded-sm  flex justify-center items-center md:mx-10" />
            <SearchBar className="z-20 flex-grow" />
            <BurgerIcon className="md:hidden  z-50 h-6 w-6 hover:cursor-pointer text-white mx-1" />
            <MobileNavList className="md:hidden absolute top-11 -z-10 flex flex-col items-center justify-center w-full bg-white text-primary divide-y-2 rounded-sm " />
            <NavList className="z-20 hidden mx-10 md:flex justify-between flex-grow-0.8 text-white" />
        </nav>
    );
};

export default NavBar;
