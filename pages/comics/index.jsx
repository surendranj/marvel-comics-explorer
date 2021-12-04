import { getListProps } from '../../src/utils/fetchData';
import useList from '../../src/hooks/useList';
import useInfiniteData from '../../src/hooks/useInfiniteData';
import MarvelList from '../../src/components/marvel-list';
import { createContext } from 'react';

const endPoint = '/comics';
const fetchParams = { limit: 10, orderBy: 'title' };
const queryKey = ['comics', endPoint, fetchParams];
const infiniteQueryKey = ['comics-infinite', endPoint, fetchParams];

export const ComicsContext = createContext();

export const getStaticProps = () => getListProps(queryKey);

const Comics = () => {
    const initialStaticData = useList(queryKey);
    const { data, fetchNextPage, hasNextPage } = useInfiniteData(
        infiniteQueryKey,
        initialStaticData
    );

    return (
        <ComicsContext.Provider value={{ data, fetchNextPage, hasNextPage }}>
            <MarvelList />
        </ComicsContext.Provider>
    );
};

export default Comics;
