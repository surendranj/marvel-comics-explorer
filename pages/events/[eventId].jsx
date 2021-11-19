import { useRouter } from 'next/router';
import { getPaths, getProps } from '../../src/utils/getDetails';

const EventDetails = ({ response }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }
    const {
        data: { results },
    } = response;
    const { title, description } = results[0];
    return (
        <main>
            <h1>{title}</h1>
            <p>{description}</p>
        </main>
    );
};

export const getStaticPaths = () => {
    return getPaths('/events', 'eventId');
};

export const getStaticProps = ({ params }) => {
    return getProps(params, '/events', 'eventId');
};

export default EventDetails;
