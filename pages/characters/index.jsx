import { getProps } from '../../src/utils/fetchData';
import List from '../../src/components/list';

const CharacterList = ({ data: charactersList }) => {
    return <List list={charactersList} heading="Characters" />;
};

export const getStaticProps = () => {
    return getProps('/characters');
};
export default CharacterList;
