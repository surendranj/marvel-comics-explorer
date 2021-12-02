import { useRouter } from 'next/router';
import { fetchData, getDetailsProps, getDetailsPaths } from '../../src/utils/fetchData';
import MarvelDetails from '../../src/components/details/marvel-details';

const SeriesDetails = ({ initialData }) => {
    const router = useRouter();
    const { seriesId } = router.query;
    const queryKey = ['series', { seriesId }];
    const fetchSeriesDetails = async () => {
        const seriesDetails = fetchData(`/series/${seriesId}`);
        return seriesDetails;
    };
    return (
        <MarvelDetails initialData={initialData} queryKey={queryKey} fetcher={fetchSeriesDetails} />
    );
};

export const getStaticPaths = async () => {
    const paths = await getDetailsPaths('/series', 'seriesId', { orderBy: 'title', limit: 3 });
    return paths;
};

export const getStaticProps = async ({ params }) => {
    const endPoint = `/series/${params.seriesId}`;
    const initialData = await getDetailsProps(endPoint);
    return initialData;
};

export default SeriesDetails;
