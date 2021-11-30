import { fetchData, fetchEvents } from '../../src/utils/helpers';
import MarvelList from '../../src/components/marvel-list';

const Events = props => (
    <MarvelList querykey={'events'} fetcher={fetchEvents} heading="Events" {...props} />
);

export const getStaticProps = async () => {
    const events = await fetchData('/events', { orderBy: 'name' });
    return { props: { events } };
};

export default Events;
