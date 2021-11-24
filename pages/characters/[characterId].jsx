import { getPaths, getProps } from '../../src/utils/fetchData';
import Details from '../../src/components/details';

const CharacterDetails = ({ data }) => {
    return <Details data={data} />;
};

//create paths from /characters endpoint for pre-rendering
export const getStaticPaths = () => {
    return getPaths('/characters', 'characterId');
};

// fetch data from /characaters/id endpoint
export const getStaticProps = ({ params }) => {
    return getProps(`/characters/${params.characterId}`);
};

export default CharacterDetails;
