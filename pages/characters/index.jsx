import { fetchData, fetchCharacters } from '../../src/utils/helpers';
import MarvelList from '../../src/components/marvel-list';

const Characters = props => (
    <MarvelList querykey={'characters'} fetcher={fetchCharacters} heading="Characters" {...props} />
);

export const getStaticProps = async () => {
    const characters = await fetchData('/characters', { orderBy: 'name' });
    return { props: { characters } };
};

export default Characters;
