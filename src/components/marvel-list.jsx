import InfiniteScroll from 'react-infinite-scroll-component';
import List from './list';
import useInfiniteData from '../hooks/useInfiniteData';
import Loader from './loader';
import EndMessage from './end-message';

const MarvelList = ({ querykey, fetcher, heading, ...props }) => {
    const { data, fetchNextPage, hasNextPage, isLoading, isError, error } = useInfiniteData(
        querykey,
        fetcher,
        props
    );
    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>{error.message}</h1>;

    return (
        <InfiniteScroll
            dataLength={data.pages.length}
            next={() => fetchNextPage()}
            hasMore={hasNextPage}
            loader={<Loader />}
            endMessage={<EndMessage />}
            // endMessage={<Loader />}
            scrollThreshold={1}
        >
            <List list={data.pages.flat()} heading={heading} />
        </InfiniteScroll>
    );
};

export default MarvelList;
