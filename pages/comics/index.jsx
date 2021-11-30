import List from '../../src/components/list';
import { fetchData, fetchComics } from '../../src/utils/helpers';
import InfiniteScroll from 'react-infinite-scroll-component';
import useInfiniteData from '../../src/hooks/useInfiniteData';

const Comics = props => {
    const { data, fetchNextPage, hasNextPage, isLoading, isError, error } = useInfiniteData(
        'comics',
        fetchComics,
        props
    );
    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>{error.message}</h1>;
    const ComicsList = data.pages.flat();
    return (
        <InfiniteScroll
            dataLength={data.pages.length}
            next={() => fetchNextPage()}
            hasMore={hasNextPage}
            loader={'Loading...'}
            endMessage={'Yay! You have seen it all'}
            scrollThreshold={0.5}
        >
            <List list={ComicsList} heading="Comics" />
        </InfiniteScroll>
    );
};
export const getStaticProps = async () => {
    const comics = await fetchData('/comics', { orderBy: 'title' });
    return { props: { comics } };
};

export default Comics;
