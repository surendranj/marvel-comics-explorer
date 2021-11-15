import fetchData from '../../src/utils/fetchData';
import { useRouter } from 'next/router';

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

export const getStaticPaths = async () => {
    const response = await fetchData('/characters', Date.now());
    const {
        data: { results: charactersList },
    } = response;
    const paths = charactersList.map(character => {
        return { params: { characterId: character.id.toString() } };
    });
    return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
    const response = await fetchData(`/characters/${params.characterId}`, Date.now());
    console.log(response);
    if (!response) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            response,
        },
        revalidate: 60,
    };
};

export default CharacterDetails;
