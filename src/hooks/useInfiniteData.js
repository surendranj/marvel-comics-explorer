import { useInfiniteQuery } from 'react-query';
import { filterImages, removeDuplicates } from '../utils/helpers';

const useInfiniteData = (queryKey, fetcher, props) =>
    useInfiniteQuery(queryKey, fetcher, {
        initialData: { pages: [props[queryKey]], pageParams: [0] },
        select: data => {
            const pages = data.pages.map(page => page.data.results);
            const pagesWithImages = pages.map(page => filterImages(page));
            const uniquePages = removeDuplicates(pagesWithImages);
            return { pages: uniquePages, pageParams: data.pageParams };
        },
        staleTime: 86400 * 1000,
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.data.count < lastPage.data.limit) {
                return;
            }
            return lastPage.data.offset + lastPage.data.limit;
        },
    });

export default useInfiniteData;
