import InfiniteScroll from 'react-infinite-scroll-component';
import List from './list';
import Footer from './footer';
import { InfiniteScrollLoader } from './loader';
import EndMessage from './end-message';
import { useContext, useEffect } from 'react';
import { ComicsContext } from '../../pages/comics';
import { CharactersContext } from '../../pages/characters';
import { EventsContext } from '../../pages/events';
import { SeriesContext } from '../../pages/series';
import { RouteContext } from '../../pages/_app';

const MarvelList = () => {
    const comics = useContext(ComicsContext);
    const characters = useContext(CharactersContext);
    const events = useContext(EventsContext);
    const series = useContext(SeriesContext);
    const isChangingRoute = useContext(RouteContext);
    const { data, fetchNextPage, hasNextPage, heading } = comics || characters || events || series;

    return (
        <>
            <div className={'flex-grow'}>
                <InfiniteScroll
                    dataLength={data.pages.length}
                    next={() => fetchNextPage()}
                    hasMore={isChangingRoute ? !hasNextPage : hasNextPage}
                    loader={<InfiniteScrollLoader className="flex justify-center mt-1" />}
                    endMessage={<EndMessage />}
                >
                    <List list={data.pages.flat()} heading={heading} />
                </InfiniteScroll>
            </div>
            <Footer />
        </>
    );
};

export default MarvelList;
