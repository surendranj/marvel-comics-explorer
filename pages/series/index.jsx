import { getProps } from '../../src/utils/fetchData';
import List from '../../src/components/list';

const SeriesList = ({ data: seriesList }) => {
    return <List list={seriesList} heading="Series" />;
};

const destructureFn = ({ id, title, thumbnail }) => {
    return { id, title, thumbnail };
};
export const getStaticProps = () => {
    return getProps('/series', destructureFn);
};
export default SeriesList;
