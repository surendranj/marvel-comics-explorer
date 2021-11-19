import fetchData from '../../src/utils/fetchData';
import Link from 'next/link';
import List from '../../src/components/list';

const EventsList = ({ response }) => {
    console.log(response);

    const {
        data: { results: eventList },
    } = response;

    return <List list={eventList} heading="Events" />;
};

export const getStaticProps = async () => {
    const response = await fetchData('/events', Date.now(), 10);
    return {
        props: {
            response,
        },
        revalidate: 86400,
    };
};
export default EventsList;
