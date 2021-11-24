import Card from './card';
import { useRouter } from 'next/router';

const RenderDetailsPage = ({ data }) => {
    const router = useRouter();
    //if details page is not pre-rendered by static paths fallback page is served.
    //else details page is served.
    if (router.isFallback) {
        return <h1>Loading..</h1>;
    }
    return <Card {...data[0]} />;
};

export default RenderDetailsPage;
