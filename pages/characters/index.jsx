import fetchData from '../../src/utils/fetchData';
import Link from 'next/link';
// import 'tailwindcss/tailwind.css';

const CharacterList = ({ response }) => {
    const {
        data: { results: charactersList },
    } = response;
    return (
        <div>
            <h1>Characters</h1>
            <ul>
                {charactersList.map(character => (
                    <li key={character.id}>
                        <Link href={`/characters/${character.id}`} passHref>
                            <h2>{character.name}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const getStaticProps = async () => {
    const response = await fetchData('/characters', Date.now());
    return {
        props: {
            response,
        },
        revalidate: 60,
    };
};
export default CharacterList;
