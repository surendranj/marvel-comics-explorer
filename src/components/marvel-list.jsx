import InfiniteScroll from 'react-infinite-scroll-component';
import List from './list';
import useInfiniteData from '../hooks/useInfiniteData';

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
            loader={'Loading...'}
            endMessage={'Yay! You have seen it all'}
            scrollThreshold={0.5}
        >
            <List list={data.pages.flat()} heading={heading} />
        </InfiniteScroll>
    );
};

export default MarvelList;
