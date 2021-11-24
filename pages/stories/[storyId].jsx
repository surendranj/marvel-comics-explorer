import { getPaths, getProps } from '../../src/utils/fetchData';
import Details from '../../src/components/details';
import { useRouter } from 'next/router';

const StoryDetails = ({ data }) => {
    const router = useRouter();
    //if details page is not pre-rendered by static paths fallback page is served.
    //else details page is served.
    if (router.isFallback) {
        return <h1>Loading..</h1>;
    }
    return <Details data={data} />;
};

//create paths from /stories endpoint for pre-rendering
export const getStaticPaths = () => {
    return getPaths('/stories', 'storyId');
};

// fetch data from /characaters/id endpoint
export const getStaticProps = ({ params }) => {
    return getProps(`/stories/${params.storyId}`);
};

export default StoryDetails;
