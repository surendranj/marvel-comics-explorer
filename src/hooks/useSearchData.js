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
        enabled: !!debouncedSearchVal,
        // onErrror: error => console.log(error),
        // onSuccess: data => console.log(data),
    };
    return useInfiniteData(queryKey, queryOptions);
};
export default useSearchData;
