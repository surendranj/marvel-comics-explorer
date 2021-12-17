import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import List from './list';
import Footer from '../footer/footer';
import InfiniteScrollLoader from '../loaders/infinite-scroll-loader';
import EndMessage from '../end-message/end-message';
import { useContext, useEffect, useState, useRef } from 'react';
import { ComicsContext } from '../../../pages/comics';
import { CharactersContext } from '../../../pages/characters';
import { EventsContext } from '../../../pages/events';
import { SeriesContext } from '../../../pages/series';
import { RouteContext } from '../../../pages/_app';
import useHeight from '../../hooks/useHeight';
import useFlatData from '../../hooks/useFlatData';

const MarvelList = () => {
    const comics = useContext(ComicsContext);
    const characters = useContext(CharactersContext);
    const events = useContext(EventsContext);
    const series = useContext(SeriesContext);
    const isChangingRoute = useContext(RouteContext);
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, heading } =
        comics || characters || events || series;

    const [items, isNewPageEmpty] = useFlatData(data);
    const listRef = useRef();
    const height = useHeight(listRef, items);
    useEffect(() => {
        if (height?.isContentLess || isNewPageEmpty) {
            fetchNextPage();
        }
    });

    return (
        <>
            <div className={'flex-grow'}>
                <InfiniteScroll
                    dataLength={data.pages.length}
                    next={() => fetchNextPage()}
                    hasMore={hasNextPage && !isChangingRoute}
                    loader={isFetchingNextPage && <InfiniteScrollLoader />}
                    endMessage={<EndMessage />}
                >
                    <List listRef={listRef} list={items} heading={heading} />
                </InfiniteScroll>
            </div>
            <Footer />
        </>
    );
};

export default React.memo(MarvelList);
