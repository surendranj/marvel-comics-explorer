import fetchData from '../../src/utils/fetchData';
import List from '../../src/components/list';
import { listWithImagesOnly } from '../../src/utils/filterImages';

const SeriesList = ({ response }) => {
    const {
        data: { results },
    } = response;
    const seriesList = listWithImagesOnly(results);
    return <List list={seriesList} heading="Series" />;
};

export const getStaticProps = async () => {
    const response = await fetchData('/series', Date.now(), 10);
    return {
        props: {
            response,
        },
        revalidate: 86400,
    };
};
export default SeriesList;
