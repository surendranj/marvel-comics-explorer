import List from '../../src/components/list';
import fetchData, { getProps } from '../../src/utils/fetchData';

const ComicsList = ({ data: comicsList }) => {
    return <List list={comicsList} heading="Comics" />;
};

export const getStaticProps = () => {
    const fetchParams = { offset: 100 };
    return getProps('/comics', fetchParams);
};
export default ComicsList;
