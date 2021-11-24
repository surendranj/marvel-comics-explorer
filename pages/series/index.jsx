import { getProps } from '../../src/utils/fetchData';
import List from '../../src/components/list';

const SeriesList = ({ data: seriesList }) => {
    return <List list={seriesList} heading="Series" />;
};

export const getStaticProps = () => {
    const fetchParams = { offset: 100 };

    return getProps('/series', fetchParams);
};
export default SeriesList;
