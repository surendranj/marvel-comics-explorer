import fetchData from '../../src/utils/fetchData';
import List from '../../src/components/list';
import { listWithImagesOnly } from '../../src/utils/filterImages';

const ComicsList = ({ response }) => {
    const {
        data: { results },
    } = response;
    const comicsList = listWithImagesOnly(results);
    return <List list={comicsList} heading="Comics" />;
};

const fetchParams = { limit: 50, orderBy: 'title' };
export const getStaticProps = async () => {
    const response = await fetchData('/comics', fetchParams);
    return {
        props: {
            response,
        },
        revalidate: 86400,
    };
};
export default ComicsList;
