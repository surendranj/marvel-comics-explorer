import { getPaths, getProps } from '../../src/utils/fetchData';
import Card from '../../src/components/card';

const SeriesDetails = ({ data }) => {
    return <Card {...data[0]} />;
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
