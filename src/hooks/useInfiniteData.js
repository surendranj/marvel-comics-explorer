import { useInfiniteQuery } from 'react-query';
import { cleanPage } from '../utils/helpers';
import { fetchData } from '../utils/fetchData';

const useInfiniteData = (queryKey, queryOptions) => {
    const [_key, endPoint, fetchParams] = queryKey;
    return useInfiniteQuery(
        [...queryKey],
        ({ pageParam = 0 }) => fetchData(endPoint, { ...fetchParams, offset: pageParam }),
        {
            ...queryOptions,
            staleTime: 86400 * 1000,
            getNextPageParam: (lastPage, _pages) => {
                return (
                    lastPage.data.count !== lastPage.data.total &&
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
