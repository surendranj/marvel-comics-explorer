import useInfiniteData from './useInfiniteData';
import useSearchKey from './useSearchKey';
import useInputDebounce from './useInputDebounce';

const useSearchData = (searchInputVal, endPoint) => {
    const debouncedSearchVal = useInputDebounce(searchInputVal);
    const [searchKey] = useSearchKey(endPoint);
    const queryKey = [
        'search',
        endPoint,
        {
            [searchKey]: debouncedSearchVal,
        },
    ];

    const queryOptions = {
        enabled: !!queryKey && !!searchInputVal && !!debouncedSearchVal,
    };

    return [useInfiniteData(queryKey, queryOptions), queryKey];
};
export default useSearchData;
