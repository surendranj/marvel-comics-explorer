import List from '../../src/components/list';
import { getProps } from '../../src/utils/fetchData';

const ComicsList = ({ data: comicsList }) => {
    return <List list={comicsList} heading="Comics" />;
};

const destructureFn = ({ id, title, thumbnail }) => {
    return { id, title, thumbnail };
};
export const getStaticProps = () => {
    return getProps('/comics', destructureFn);
};
export default ComicsList;
