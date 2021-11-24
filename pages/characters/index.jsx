import { getProps } from '../../src/utils/fetchData';
import List from '../../src/components/list';

const CharacterList = ({ data: charactersList }) => {
    return <List list={charactersList} heading="Characters" />;
};

export const getStaticProps = () => {
    const fetchParams = { offset: 500 };
    return getProps('/characters', fetchParams);
};
export default CharacterList;
