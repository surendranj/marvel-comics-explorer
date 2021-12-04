import { getListProps } from '../../src/utils/fetchData';
import useList from '../../src/hooks/useList';
import useInfiniteData from '../../src/hooks/useInfiniteData';
import MarvelList from '../../src/components/marvel-list';
import { createContext } from 'react';

const endPoint = '/series';
const fetchParams = { orderBy: 'title' };
const queryKey = ['series', endPoint, fetchParams];
const infiniteQueryKey = ['series-infinite', endPoint, fetchParams];

export const SeriesContext = createContext();

export const getStaticProps = async () => await getListProps(queryKey);

const Series = () => {
    const initialStaticData = useList(queryKey);
    const { data, fetchNextPage, hasNextPage } = useInfiniteData(
        infiniteQueryKey,
        initialStaticData
    );

    return (
        <SeriesContext.Provider value={{ data, fetchNextPage, hasNextPage, heading: 'Series' }}>
            <MarvelList />
        </SeriesContext.Provider>
    );
};

export default Series;
