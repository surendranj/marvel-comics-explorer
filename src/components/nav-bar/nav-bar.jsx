import React from 'react';
import SearchBar from './search/search-bar';
import Logo from './logo';
import NavList from './nav-list';
import BurgerIcon from './burger-icon';

const NavBar = () => {
    return (
        <nav className="h-full flex justify-between text-white mx-4 items-center">
            <div className="absolute bg-primary h-full left-0 w-full z-0 md:hidden"></div>
            <Logo />
            <SearchBar />
            <NavList />
            <BurgerIcon />
        </nav>
    );
};

export default React.memo(NavBar);
