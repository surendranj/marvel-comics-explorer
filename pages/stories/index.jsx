import { getProps } from '../../src/utils/fetchData';
import List from '../../src/components/list';

const StoriesList = ({ data: storiesList }) => {
    return <List list={storiesList} heading="Stories" />;
};

export const getStaticProps = () => {
    return getProps('/stories');
};
export default StoriesList;
