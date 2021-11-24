import { getPaths, getProps } from '../../src/utils/fetchData';
import Details from '../../src/components/details';

const StoryDetails = ({ data }) => {
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
