import InfiniteScroll from 'react-infinite-scroll-component';
import List from './list';
import Footer from './footer';
import { InfiniteScrollLoader } from './loader';
import EndMessage from './end-message';
import { useContext } from 'react';
import { ComicsContext } from '../../pages/comics';

const MarvelList = () => {
    const { data, fetchNextPage, hasNextPage } = useContext(ComicsContext);
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

export default MarvelList;
