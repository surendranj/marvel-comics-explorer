import fetchData from '../../src/utils/fetchData';
import Link from 'next/link';

const ComicsList = ({ response }) => {
    console.log(response);
    const {
        data: { results: comicsList },
    } = response;
    return (
        <main>
            <h1>Comics</h1>
            <ul>
                {comicsList.map(comic => (
                    <li key={comic.id}>
                        <Link href={`/comics/${comic.id}`} passHref>
                            <h2>{comic.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export const getStaticProps = async () => {
    const response = await fetchData('/comics', Date.now(), 5);
    return {
        props: {
            response,
        },
        revalidate: 86400,
    };
};
export default ComicsList;
