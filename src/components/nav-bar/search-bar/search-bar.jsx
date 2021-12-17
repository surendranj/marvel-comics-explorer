import useSearchData from '../../../hooks/useSearchData';
import useFlatData from '../../../hooks/useFlatData';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import { useEffect, useContext, useState } from 'react';
import SearchList from './search-list';
import SearchInput from './search-input';
import { NavBarContext } from '../../layout/layout';
import { useQueryClient } from 'react-query';

const SearchBar = ({ className }) => {
    const navBar = useContext(NavBarContext);
    const { searchInputVal, searchEndPoint, setToggleSearchList, setToggleNavList } = navBar;
    const [{ data, fetchNextPage, ...searchReturns }, queryKey] = useSearchData(
        searchInputVal,
        searchEndPoint
    );
    const [items, _isNewPageEmpty] = useFlatData(data);
    const [setRootElement, setWatchElement, isIntersecting] = useInfiniteScroll();
    const [inputFocused, setInputFocused] = useState(false);

    const queryClient = useQueryClient();

    useEffect(() => {
        if (searchInputVal && items && inputFocused) {
            setToggleSearchList(true);
        } else {
            setToggleSearchList(false);
        }
    });

    useEffect(() => {
        if (isIntersecting) fetchNextPage();
    });

    useEffect(() => {
        if (searchInputVal === '') {
            queryClient.cancelQueries(queryKey);
        }
    });

    return (
        <div onClick={() => setToggleNavList(false)} className={className}>
            <SearchInput setInputFocused={setInputFocused} />
            <div className="absolute top-0 left-0 z-0 w-full h-full bg-primary "></div>

            {data && (
                <SearchList
                    items={items}
                    setRootElement={setRootElement}
                    setWatchElement={setWatchElement}
                    {...searchReturns}
                />
            )}
        </div>
    );
};

export default SearchBar;
