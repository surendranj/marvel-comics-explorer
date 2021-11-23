import { getPaths, getProps } from '../../src/utils/fetchData';
import Card from '../../src/components/card';

const StoryDetails = ({ data }) => {
    return <Card {...data[0]} />;
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
