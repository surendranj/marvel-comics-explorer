import { fetchData, fetchSeries } from '../../src/utils/helpers';
import MarvelList from '../../src/components/marvel-list';

const Series = props => (
    <MarvelList querykey={'series'} fetcher={fetchSeries} heading="Series" {...props} />
);

export const getStaticProps = async () => {
    const series = await fetchData('/series', { orderBy: 'title' });
    return { props: { series } };
};

export default Series;
