import List from '../../src/components/list';
import { getProps } from '../../src/utils/fetchData';

const EventsList = ({ data: eventsList }) => {
    return <List list={eventsList} heading="Events" />;
};

export const getStaticProps = () => {
    return getProps('/events');
};
export default EventsList;
