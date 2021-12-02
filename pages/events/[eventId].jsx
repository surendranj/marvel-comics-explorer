import { useRouter } from 'next/router';
import { fetchData, getDetailsProps, getDetailsPaths } from '../../src/utils/fetchData';
import MarvelDetails from '../../src/components/details/marvel-details';

const EventDetails = ({ initialData }) => {
    const router = useRouter();
    const { eventId } = router.query;
    const queryKey = ['events', { eventId }];
    const fetchEventDetails = async () => {
        const eventDetails = fetchData(`/events/${eventId}`);
        return eventDetails;
    };
    return (
        <MarvelDetails initialData={initialData} queryKey={queryKey} fetcher={fetchEventDetails} />
    );
};

export const getStaticPaths = async () => {
    const paths = await getDetailsPaths('/events', 'eventId', { orderBy: 'name', limit: 3 });
    return paths;
};

export const getStaticProps = async ({ params }) => {
    const endPoint = `/events/${params.eventId}`;
    const initialData = await getDetailsProps(endPoint);
    return initialData;
};

export default EventDetails;
