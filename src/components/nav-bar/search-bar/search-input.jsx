import { useContext, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { NavBarContext } from '../../layout/layout';

const SearchInput = ({ setInputFocused }) => {
    const navBar = useContext(NavBarContext);
    const { searchInputVal, handleSearchInputChange, placeholder } = navBar;

    return (
        <input
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            type="text"
            className="relative z-10 w-full text-primary rounded-sm px-1 focus:outline-none placeholder-primary placeholder-opacity-50"
            placeholder={`Search ${placeholder}...`}
            value={searchInputVal}
            onChange={handleSearchInputChange}
        />
    );
};

export default SearchInput;
