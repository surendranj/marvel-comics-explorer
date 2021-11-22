import { getProps } from '../../src/utils/fetchData';
import List from '../../src/components/list';

const StoriesList = ({ data: storiesList }) => {
    return <List list={storiesList} heading="Stories" />;
};

const destructureFn = ({ id, title }) => {
    return { id, title };
};
export const getStaticProps = () => {
    return getProps('/stories', destructureFn);
};
export default StoriesList;
