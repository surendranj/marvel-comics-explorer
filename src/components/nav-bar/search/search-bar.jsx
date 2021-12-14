import useSearchData from '../../../hooks/useSearchData';
import useFlatData from '../../../hooks/useFlatData';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import { useEffect, useContext } from 'react';
import SearchList from './search-list';
import { NavBarContext } from '../../layout';

const SearchBar = () => {
    const navBar = useContext(NavBarContext);
    const { searchInputVal, handleSearchInputChange, placeholder, searchEndPoint } = navBar;
    const { data, fetchNextPage, hasNextPage } = useSearchData(searchInputVal, searchEndPoint);
    const [items, _isNewPageEmpty] = useFlatData(data);
    const [setRootElement, setWatchElement, isIntersecting] = useInfiniteScroll();

    useEffect(() => {
        if (isIntersecting) fetchNextPage();
    });

    return (
        <div className=" z-0 flex-grow-0.4 md:mx-2">
            <input
                type="text"
                className="w-full text-primary rounded-sm px-1 focus:outline-none placeholder-primary placeholder-opacity-50"
                placeholder={`Search ${placeholder}...`}
                value={searchInputVal}
                onChange={handleSearchInputChange}
            />
            {data && (
                <SearchList
                    items={items}
                    setRootElement={setRootElement}
                    setWatchElement={setWatchElement}
                    hasNextPage={hasNextPage}
                />
            )}
        </div>
    );
};

export default SearchBar;
