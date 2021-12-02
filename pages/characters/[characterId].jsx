import { useRouter } from 'next/router';
import { fetchData, getDetailsProps, getDetailsPaths } from '../../src/utils/fetchData';
import MarvelDetails from '../../src/components/details/marvel-details';

const CharacterDetails = ({ initialData }) => {
    const router = useRouter();
    const { characterId } = router.query;
    const queryKey = ['characters', { characterId }];
    const fetchCharacterDetails = async () => {
        const characterDetails = fetchData(`/characters/${characterId}`);
        return characterDetails;
    };
    return (
        <MarvelDetails
            initialData={initialData}
            queryKey={queryKey}
            fetcher={fetchCharacterDetails}
        />
    );
};

export const getStaticPaths = async () => {
    const paths = await getDetailsPaths('/characters', 'characterId', {
        orderBy: 'name',
        limit: 3,
    });
    return paths;
};

export const getStaticProps = async ({ params }) => {
    const endPoint = `/characters/${params.characterId}`;
    const initialData = await getDetailsProps(endPoint);
    return initialData;
};

export default CharacterDetails;
