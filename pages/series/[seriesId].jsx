import { getPaths, getProps } from '../../src/utils/fetchData';
import Details from '../../src/components/details';

const SeriesDetails = ({ data }) => {
    return <Details data={data} />;
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
