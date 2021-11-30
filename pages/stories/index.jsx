import { fetchData, fetchStories } from '../../src/utils/helpers';
import MarvelList from '../../src/components/marvel-list';

const Stories = props => (
    <MarvelList querykey={'stories'} fetcher={fetchStories} heading="Stories" {...props} />
);

export const getStaticProps = async () => {
    const stories = await fetchData('/stories', { orderBy: 'id' });
    return { props: { stories } };
};

export default Stories;
