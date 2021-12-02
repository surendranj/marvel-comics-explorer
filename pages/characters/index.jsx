import { fetchData } from '../../src/utils/fetchData';
import MarvelList from '../../src/components/marvel-list';

const Characters = props => {
    const fetchCharacters = async ({ pageParam = 0 }) => {
        const data = await fetchData('/characters', { offset: pageParam, orderBy: 'name' });
        return data;
    };

    return (
        <MarvelList
            querykey={'characters'}
            fetcher={fetchCharacters}
            heading="Characters"
            {...props}
        />
    );
};

export const getStaticProps = async () => {
    const characters = await fetchData('/characters', { orderBy: 'name' });
    return { props: { characters } };
};

export default Characters;
