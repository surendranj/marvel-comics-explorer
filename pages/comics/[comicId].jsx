import { getPaths, getProps } from '../../src/utils/fetchData';
import RenderDetailsPage from '../../src/components/render-details-page';

const ComicDetails = ({ data }) => {
    return <RenderDetailsPage data={data} />;
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
