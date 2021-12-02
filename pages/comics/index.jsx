import { fetchData } from '../../src/utils/fetchData';
import MarvelList from '../../src/components/marvel-list';

const Comics = props => {
    const fetchComics = async ({ pageParam = 0 }) => {
        const data = await fetchData('/comics', { offset: pageParam, orderBy: 'issueNumber' });
        return data;
    };
    return <MarvelList querykey={'comics'} fetcher={fetchComics} heading="Comics" {...props} />;
};

export const getStaticProps = async () => {
    const comics = await fetchData('/comics', { orderBy: 'issueNumber' });
    return { props: { comics } };
};

export default Comics;
