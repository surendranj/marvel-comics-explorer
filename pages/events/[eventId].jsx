import { getPaths, getProps } from '../../src/utils/fetchData';
import Details from '../../src/components/details';

const EventDetails = ({ data }) => {
    return <Details data={data} />;
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
