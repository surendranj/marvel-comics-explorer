import { getPaths, getProps } from '../../src/utils/fetchData';
import Details from '../../src/components/details';
import { useRouter } from 'next/router';

const EventDetails = ({ data }) => {
    const router = useRouter();
    //if details page is not pre-rendered by static paths fallback page is served.
    //else details page is served.
    if (router.isFallback) {
        return <h1>Loading..</h1>;
    }
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
