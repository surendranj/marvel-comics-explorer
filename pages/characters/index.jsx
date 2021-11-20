import fetchData from '../../src/utils/fetchData';
import List from '../../src/components/list';
import { listWithImagesOnly } from '../../src/utils/filterImages';

const CharacterList = ({ response }) => {
    const {
        data: { results },
    } = response;
    const charactersList = listWithImagesOnly(results);
    return <List list={charactersList} heading="Characters" />;
};

export const getStaticProps = async () => {
    const response = await fetchData('/characters', Date.now(), 10);
    return {
        props: {
            response,
        },
        revalidate: 86400,
    };
};
export default CharacterList;
