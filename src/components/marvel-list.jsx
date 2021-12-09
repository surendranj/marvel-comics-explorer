import InfiniteScroll from 'react-infinite-scroll-component';
import List from './list';
import Footer from './footer';
import { InfiniteScrollLoader } from './loader';
import EndMessage from './end-message';
import { useContext, useEffect, useState, useRef } from 'react';
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
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, heading } =
        comics || characters || events || series;

    const [items, setItems] = useState(null);
    const [isNewPageEmpty, setIsNewPageEmpty] = useState(false);

    useEffect(() => {
        setItems([
            ...data.pages
                .flat()
                .reduce((map, obj) => map.set(obj.id, obj), new Map())
                .values(),
        ]);
    }, [data.pages]);

    useEffect(() => {
        if (data.pages.slice(-1)[0].length === 0) {
            setIsNewPageEmpty(true);
        } else {
            setIsNewPageEmpty(false);
        }
    }, [data.pages]);

    return (
        <>
            <div className={'flex-grow'}>
                <InfiniteScroll
                    dataLength={data.pages.length}
                    next={() => fetchNextPage()}
                    hasMore={isChangingRoute ? !hasNextPage : isNewPageEmpty || hasNextPage}
                    loader={isFetchingNextPage && <InfiniteScrollLoader />}
                    endMessage={<EndMessage />}
                >
                    <List list={items} heading={heading} />
                </InfiniteScroll>
            </div>
            <Footer />
        </>
    );
};

export default MarvelList;
