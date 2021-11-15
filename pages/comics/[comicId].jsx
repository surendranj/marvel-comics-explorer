import fetchData from '../../src/utils/fetchData';

const ComicDetails = ({ response }) => {
    const {
        data: { results },
    } = response;
    const { title, description } = results[0];
    return (
        <main>
            <h1>{title}</h1>
            <p>{description}</p>
        </main>
    );
};

export const getStaticPaths = async () => {
    const response = await fetchData('/comics', Date.now());
    const {
        data: { results: comicsList },
    } = response;
    const paths = comicsList.map(comic => {
        return { params: { comicId: comic.id.toString() } };
    });
    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const response = await fetchData(`/comics/${params.comicId}`, Date.now());
    return {
        props: {
            response,
        },
        revalidate: 60,
    };
};

export default ComicDetails;
