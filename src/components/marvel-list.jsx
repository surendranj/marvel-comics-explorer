import InfiniteScroll from 'react-infinite-scroll-component';
import List from './list';
import useInfiniteData from '../hooks/useInfiniteData';
import { InfiniteScrollLoader } from './loader';
import EndMessage from './end-message';
import Footer from './footer';

const MarvelList = ({ querykey, fetcher, heading, ...props }) => {
    const { data, fetchNextPage, hasNextPage, isLoading, isError, error } = useInfiniteData(
        querykey,
        fetcher,
        props
    );
    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>{error.message}</h1>;
    return (
        <>
            <InfiniteScroll
                dataLength={data.pages.length}
                next={() => fetchNextPage()}
                hasMore={hasNextPage}
                loader={<InfiniteScrollLoader className="flex justify-center mt-1" />}
                endMessage={<EndMessage />}
                scrollThreshold={0.7}
            >
                <List list={data.pages.flat()} heading={heading} />
            </InfiniteScroll>
            <Footer />
        </>
    );
};

export default MarvelList;
