import { fetchData } from '../../src/utils/fetchData';
import MarvelList from '../../src/components/marvel-list';

const Events = props => {
    const fetchEvents = async ({ pageParam = 0 }) => {
        const data = await fetchData('/events', { offset: pageParam, orderBy: 'name' });
        return data;
    };
    return <MarvelList querykey={'events'} fetcher={fetchEvents} heading="Events" {...props} />;
};

export const getStaticProps = async () => {
    const events = await fetchData('/events', { orderBy: 'name' });
    return { props: { events } };
};

export default Events;
