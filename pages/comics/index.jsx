import List from '../../src/components/list';
import { getProps } from '../../src/utils/fetchData';

const ComicsList = ({ data: comicsList }) => {
    return <List list={comicsList} heading="Comics" />;
};

export const getStaticProps = () => {
    return getProps('/comics');
};
export default ComicsList;
