import { getListProps } from '../../src/utils/fetchData';
import useList from '../../src/hooks/useList';
import useInfiniteData from '../../src/hooks/useInfiniteData';
import MarvelList from '../../src/components/marvel-list';
import { createContext } from 'react';

const endPoint = '/comics';
const fetchParams = { orderBy: 'title' };
const queryKey = ['comics', endPoint, fetchParams];
const infiniteQueryKey = ['comics-infinite', endPoint, fetchParams];

export const ComicsContext = createContext();

export const getStaticProps = async () => await getListProps(queryKey);

const Comics = () => {
    const initialStaticData = useList(queryKey);
    const queryOptions = { initialData: { pages: [initialStaticData], pageParams: [0] } };
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteData(
        infiniteQueryKey,
        queryOptions
    );

    return (
        <ComicsContext.Provider
            value={{ data, fetchNextPage, hasNextPage, isFetchingNextPage, heading: 'Comics' }}
        >
            <MarvelList />
        </ComicsContext.Provider>
    );
};

export default Comics;
