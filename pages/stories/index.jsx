import fetchData from '../../src/utils/fetchData';
import List from '../../src/components/list';
import { listWithImagesOnly } from '../../src/utils/filterImages';

const StoriesList = ({ response }) => {
    const {
        data: { results },
    } = response;
    const storiesList = listWithImagesOnly(results);
    return <List list={storiesList} heading="Stories" />;
};

export const getStaticProps = async () => {
    const response = await fetchData('/stories', Date.now(), 10);
    return {
        props: {
            response,
        },
        revalidate: 86400,
    };
};
export default StoriesList;
