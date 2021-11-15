import { useRouter } from 'next/router';
import { getPaths, getProps } from '../../src/utils/getDetails';

const CharacterDetails = ({ response }) => {
    const router = useRouter();
    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }
    const {
        data: { results },
    } = response;
    const { name, description } = results[0];
    return (
        <main>
            <h1>{name}</h1>
            <p>{description}</p>
        </main>
    );
};

export const getStaticPaths = () => {
    return getPaths('/characters', 'characterId');
};

export const getStaticProps = ({ params }) => {
    return getProps(params, '/characters', 'characterId');
};

export default CharacterDetails;
