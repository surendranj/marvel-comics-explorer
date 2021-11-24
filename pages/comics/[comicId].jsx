import { getPaths, getProps } from '../../src/utils/fetchData';
import Details from '../../src/components/details';

const ComicDetails = ({ data }) => {
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
