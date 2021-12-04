import InfiniteScroll from 'react-infinite-scroll-component';
import List from './list';
import Footer from './footer';
import { InfiniteScrollLoader } from './loader';
import EndMessage from './end-message';
import { useContext } from 'react';
import { ComicsContext } from '../../pages/comics';
import { CharactersContext } from '../../pages/characters';
import { EventsContext } from '../../pages/events';
import { SeriesContext } from '../../pages/series';

const MarvelList = () => {
    const comics = useContext(ComicsContext);
    const characters = useContext(CharactersContext);
    const events = useContext(EventsContext);
    const series = useContext(SeriesContext);
    const { data, fetchNextPage, hasNextPage, heading } = comics || characters || events || series;
    return (
        <>
            <InfiniteScroll
                dataLength={data.pages.length}
                next={() => fetchNextPage()}
                hasMore={hasNextPage}
                loader={<InfiniteScrollLoader className="flex justify-center mt-1" />}
                endMessage={<EndMessage />}
            >
                <List list={data.pages.flat()} heading={heading} />
            </InfiniteScroll>
            <Footer />
        </>
    );
};

export default MarvelList;
