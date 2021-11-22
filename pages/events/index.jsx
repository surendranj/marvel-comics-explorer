import fetchData from '../../src/utils/fetchData';
import List from '../../src/components/list';
import { listWithImagesOnly } from '../../src/utils/filterImages';

const EventsList = ({ response }) => {
    const {
        data: { results },
    } = response;
    const eventsList = listWithImagesOnly(results);
    return <List list={eventsList} heading="Events" />;
};
const fetchParams = { limit: 10 };
export const getStaticProps = async () => {
    const response = await fetchData('/events', fetchParams);
    return {
        props: {
            response,
        },
        revalidate: 86400,
    };
};
export default EventsList;
