import Card from './card';
import Footer from './footer';
import { useRouter } from 'next/router';

const RenderDetailsPage = ({ data }) => {
    const router = useRouter();
    //if details page is not pre-rendered by static paths fallback page is served.
    //else details page is served.
    if (router.isFallback) {
        return <h1>Loading..</h1>;
    }
    return (
        <div>
            <Card {...data[0]} />
            <Footer />
        </div>
    );
};

export default RenderDetailsPage;
