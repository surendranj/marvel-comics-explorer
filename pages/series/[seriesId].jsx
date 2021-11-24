import { getPaths, getProps } from '../../src/utils/fetchData';
import RenderDetailsPage from '../../src/components/render-details-page';

const SeriesDetails = ({ data }) => {
    return <RenderDetailsPage data={data} />;
};

//create paths from /series endpoint for pre-rendering
export const getStaticPaths = () => {
    return getPaths('/series', 'seriesId');
};

// fetch data from /characaters/id endpoint
export const getStaticProps = ({ params }) => {
    return getProps(`/series/${params.seriesId}`);
};

export default SeriesDetails;
