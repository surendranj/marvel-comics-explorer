import { useRouter } from 'next/router';
import { fetchData } from '../../src/utils/helpers';
import Loader from '../../src/components/loader';

const ComicDetails = ({ comic }) => {
    const router = useRouter();
    if (router.isFallback) {
        return <Loader />;
    }
    return null;
};

export const getStaticPaths = async () => {
    const comics = await fetchData('/comics', { orderBy: 'title', limit: 3 });
    const paths = comics.data.results.map(comic => {
        return { params: { comicId: `${comic.id}` } };
    });
    return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
    const comic = await fetchData(`/comics/${params.comicId}`);
    if (!comic) {
        return {
            notFound: true,
        };
    }
    return { props: { comic } };
};
export default ComicDetails;
