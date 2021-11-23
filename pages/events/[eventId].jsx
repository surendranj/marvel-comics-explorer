import { getPaths, getProps } from '../../src/utils/fetchData';
import Card from '../../src/components/card';

const EventDetails = ({ data }) => {
    return <Card {...data[0]} />;
};

//create paths from /events endpoint for pre-rendering
export const getStaticPaths = () => {
    return getPaths('/events', 'eventId');
};

// fetch data from /characaters/id endpoint
export const getStaticProps = ({ params }) => {
    return getProps(`/events/${params.eventId}`);
};

export default EventDetails;
