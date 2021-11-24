import { getPaths, getProps } from '../../src/utils/fetchData';
import Details from '../../src/components/details';
import { useRouter } from 'next/router';

const ComicDetails = ({ data }) => {
    const router = useRouter();
    //if details page is not pre-rendered by static paths fallback page is served.
    //else details page is served.
    if (router.isFallback) {
        return <h1>Loading..</h1>;
    }
    return <Details data={data} />;
};

//create paths from /comics endpoint for pre-rendering
export const getStaticPaths = () => {
    return getPaths('/comics', 'comicId');
};

// fetch data from /characaters/id endpoint
export const getStaticProps = ({ params }) => {
    return getProps(`/comics/${params.comicId}`);
};
export default ComicDetails;
