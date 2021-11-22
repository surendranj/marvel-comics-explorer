import List from '../../src/components/list';
import { getProps } from '../../src/utils/fetchData';

const EventsList = ({ data: eventsList }) => {
    return <List list={eventsList} heading="Events" />;
};

const destructureFn = ({ id, title, thumbnail }) => {
    return { id, title, thumbnail };
};
export const getStaticProps = () => {
    return getProps('/events', destructureFn);
};
export default EventsList;
