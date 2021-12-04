import { fetchData } from '../../src/utils/fetchData';
import MarvelList from '../../src/components/marvel-list';
import List from '../../src/components/list';
import { dehydrate, QueryClient, useQuery, useInfiniteQuery } from 'react-query';
import { filterDesc, filterImages, removeDuplicates } from '../../src/utils/helpers';
import InfiniteScroll from 'react-infinite-scroll-component';
import { InfiniteScrollLoader } from '../../src/components/loader';
import EndMessage from '../../src/components/end-message';
import Footer from '../../src/components/footer';

const endPoint = '/comics';
const fetchParams = { limit: 10, orderBy: 'title' };

export const getStaticProps = async () => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(['comics', endPoint, fetchParams], () =>
        fetchData(endPoint, fetchParams)
    );
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};

const Comics = () => {
    const { data: initialStaticData } = useQuery(
        ['comics', endPoint, fetchParams],
        () => fetchData(endPoint, fetchParams),
        {
            staleTime: 86400 * 1000,
        }
    );
    const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
        useInfiniteQuery(
            ['comics-infinite', endPoint, fetchParams],
            ({ pageParam = 0 }) =>
                fetchData(endPoint, { offset: pageParam, orderBy: 'title', limit: 10 }),
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
                    const pages = data.pages.map(page => page.data.results);
                    const pagesWithDescription = pages.map(page => filterDesc(page));
                    const pagesWithImages = pagesWithDescription.map(page => filterImages(page));
                    const uniquePages = removeDuplicates(pagesWithImages);
                    return { ...data, pages: uniquePages, pageParams: data.pageParams };
                },
                onSuccess: data => console.log('SUCCESS:', data),
                onError: error => console.log('ERROR from useInfiniteQuery:', error),
            }
        );
    return (
        <>
            <InfiniteScroll
                dataLength={data.pages.length}
                next={() => fetchNextPage()}
                hasMore={hasNextPage}
                loader={<InfiniteScrollLoader className="flex justify-center mt-1" />}
                endMessage={<EndMessage />}
            >
                <List list={data.pages.flat()} heading="Comics" />
            </InfiniteScroll>
            <Footer />
        </>
    );
};

export default Comics;
