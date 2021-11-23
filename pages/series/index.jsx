import { getProps } from '../../src/utils/fetchData';
import List from '../../src/components/list';

const SeriesList = ({ data: seriesList }) => {
    return <List list={seriesList} heading="Series" />;
};

export const getStaticProps = () => {
    return getProps('/series');
};
export default SeriesList;
