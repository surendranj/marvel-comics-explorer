import { getListProps } from '../../src/utils/fetchData';
import useList from '../../src/hooks/useList';
import useInfiniteData from '../../src/hooks/useInfiniteData';
import MarvelList from '../../src/components/marvel-list';
import { createContext } from 'react';

const endPoint = '/events';
const fetchParams = { orderBy: 'name' };
const queryKey = ['events', endPoint, fetchParams];
const infiniteQueryKey = ['events-infinite', endPoint, fetchParams];

export const EventsContext = createContext();

export const getStaticProps = async () => await getListProps(queryKey);

const Events = () => {
    const initialStaticData = useList(queryKey);
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteData(
        infiniteQueryKey,
        initialStaticData
    );

    return (
        <EventsContext.Provider
            value={{ data, fetchNextPage, hasNextPage, isFetchingNextPage, heading: 'Events' }}
        >
            <MarvelList />
        </EventsContext.Provider>
    );
};

export default Events;
