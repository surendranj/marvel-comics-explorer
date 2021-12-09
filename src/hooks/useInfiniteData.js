import { useInfiniteQuery } from 'react-query';
import { cleanPage, filterDuplicates, sortData } from '../utils/helpers';
import { fetchData } from '../utils/fetchData';

const useInfiniteData = (queryKey, initialStaticData) => {
    const [_key, endPoint, fetchParams] = queryKey;
    return useInfiniteQuery(
        [...queryKey],
        ({ pageParam = 0 }) => fetchData(endPoint, { ...fetchParams, offset: pageParam }),
        {
            initialData: { pages: [initialStaticData], pageParams: [0] },
            staleTime: 86400 * 1000,
            getNextPageParam: (lastPage, _pages) => {
                return (
                    lastPage.data.count === lastPage.data.limit &&
                    lastPage.data.offset + lastPage.data.limit
                );
            },
            select: data => {
                const pages = data.pages.map(page => cleanPage(page.data.results));
                return { ...data, pages, pageParams: data.pageParams };
            },
        }
    );
};
export default useInfiniteData;
