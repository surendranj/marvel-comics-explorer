import { useRouter } from 'next/router';
import { fetchData, fetchComics } from '../../src/utils/helpers';
import Loader from '../../src/components/loader';
import { useQuery } from 'react-query';
import Image from 'next/image';
import Footer from '../../src/components/footer';

const ComicDetails = ({ comicDetails }) => {
    const router = useRouter();
    const { comicId } = router.query;

    const fetchComicDetails = async () => {
        const comicDetails = fetchData(`/comics/${comicId}`);
        return comicDetails;
    };
    const { isLoading, isError, data, error } = useQuery(
        ['comics', { comicId }],
        fetchComicDetails,
        {
            initialData: comicDetails,
            staleTime: 86400 * 1000,
        }
    );

    if (router.isFallback) {
        return null;
    }
    if (isLoading) return <Loader />;
    if (isError) console.log('Error:', error);
    const { results } = data.data;
    const { title, name, thumbnail, description } = results[0];
    const { path: imagePath, extension: imageExtension } = thumbnail;
    return (
        <>
            <article>
                <Image
                    src={`${imagePath}/portrait_uncanny.${imageExtension}`}
                    alt={title || name}
                    width="300"
                    height="450"
                    placeholder="blur"
                    blurDataURL={`${imagePath}/portrait_small.${imageExtension}`}
                />
                <p className="bg-white text-tertiary">{description}</p>
            </article>
            <Footer />
        </>
    );
};

export const getStaticPaths = async () => {
    const comics = await fetchData('/comics', { orderBy: 'title', limit: 3 });
    const paths = comics.data.results.map(comic => {
        return { params: { comicId: `${comic.id}` } };
    });
    return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
    const comicDetails = await fetchData(`/comics/${params.comicId}`);
    if (!comicDetails) {
        return {
            notFound: true,
        };
    }
    return { props: { comicDetails } };
};

export default ComicDetails;
