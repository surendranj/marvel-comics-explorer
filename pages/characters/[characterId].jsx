import { getPaths, getProps } from '../../src/utils/fetchData';
import RenderDetailsPage from '../../src/components/render-details-page';

const CharacterDetails = ({ data }) => {
    return <RenderDetailsPage data={data} />;
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
