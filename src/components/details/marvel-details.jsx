import { useRouter } from 'next/router';
import useDetails from '../../hooks/useDetails';
import FullScreenLoader from '../loader';
import Image from 'next/image';
import DetailsNav from './details-nav';
import Footer from '../footer';

const MarvelDetails = ({ queryKey, fetcher, initialData }) => {
    const router = useRouter();

    const { isLoading, isError, data, error } = useDetails(queryKey, fetcher, initialData);

    if (router.isFallback) {
        return null;
    }
    if (isLoading) return <FullScreenLoader />;
    if (isError) console.log('Error:', error);
    const { results } = data.data;
    const { title, name, thumbnail, description, urls } = results[0];
    const { path: imagePath, extension: imageExtension } = thumbnail;
    console.log(results[0]);
    return (
        <>
            <article className="flex flex-col text-tertiary bg-white">
                <h1 className="flex justify-center p-1 border-primary border-b border-t">
                    {name || title}
                </h1>
                <Image
                    src={`${imagePath}/portrait_uncanny.${imageExtension}`}
                    alt={title || name}
                    width="300"
                    height="450"
                    placeholder="blur"
                    blurDataURL={`${imagePath}/portrait_small.${imageExtension}`}
                />
                <section className="bg-white border-t border-b border-primary text-xl p-2">
                    <p>{description}</p>
                    <DetailsNav urls={urls} />
                </section>
            </article>
            <Footer />
        </>
    );
};

export default MarvelDetails;
