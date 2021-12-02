import { fetchData } from '../../src/utils/fetchData';
import MarvelList from '../../src/components/marvel-list';

const Series = props => {
    const fetchSeries = async ({ pageParam = 0 }) => {
        const data = await fetchData('/series', { offset: pageParam, orderBy: 'title' });
        return data;
    };
    return <MarvelList querykey={'series'} fetcher={fetchSeries} heading="Series" {...props} />;
};

export const getStaticProps = async () => {
    const series = await fetchData('/series', { orderBy: 'title' });
    return { props: { series } };
};

export default Series;
