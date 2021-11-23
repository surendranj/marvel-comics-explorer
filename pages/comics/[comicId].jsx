import { getPaths, getProps } from '../../src/utils/fetchData';
import Card from '../../src/components/card';

const ComicDetails = ({ data }) => {
    return <Card {...data[0]} />;
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
