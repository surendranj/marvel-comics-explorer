import { fetchData, fetchComics } from '../../src/utils/helpers';
import MarvelList from '../../src/components/marvel-list';

const Comics = props => (
    <MarvelList querykey={'comics'} fetcher={fetchComics} heading="Comics" {...props} />
);

export const getStaticProps = async () => {
    const comics = await fetchData('/comics', { orderBy: 'issueNumber' });
    return { props: { comics } };
};

export default Comics;
