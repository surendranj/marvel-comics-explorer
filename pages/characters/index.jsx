import { getProps } from '../../src/utils/fetchData';
import List from '../../src/components/list';

const CharacterList = ({ data: charactersList }) => {
    return <List list={charactersList} heading="Characters" />;
};

const destructureFn = ({ id, name, thumbnail }) => {
    return { id, name, thumbnail };
};
export const getStaticProps = () => {
    return getProps('/characters', destructureFn);
};
export default CharacterList;
