import { getListProps } from '../../src/utils/fetchData';
import useList from '../../src/hooks/useList';
import useInfiniteData from '../../src/hooks/useInfiniteData';
import MarvelList from '../../src/components/marvel-list/marvel-list';

import { createContext } from 'react';

const endPoint = '/characters';
const fetchParams = { orderBy: 'name' };
const queryKey = ['characters', endPoint, fetchParams];
const infiniteQueryKey = ['characters-infinite', endPoint, fetchParams];

export const CharactersContext = createContext();

export const getStaticProps = async () => await getListProps(queryKey);

const Characters = () => {
    const initialStaticData = useList(queryKey);
    const queryOptions = { initialData: { pages: [initialStaticData], pageParams: [0] } };
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteData(
        infiniteQueryKey,
        queryOptions
    );
    return (
        <CharactersContext.Provider
            value={{ data, fetchNextPage, hasNextPage, isFetchingNextPage, heading: 'Characters' }}
        >
            <MarvelList />
        </CharactersContext.Provider>
    );
};

export default Characters;
