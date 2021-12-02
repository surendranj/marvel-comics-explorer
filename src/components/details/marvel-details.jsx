import { useRouter } from 'next/router';
import useDetails from '../../hooks/useDetails';
import FullScreenLoader from '../loader';
import Image from 'next/image';
import DetailsNav from './details-nav';
import Footer from '../footer';
import Creators from './creators';
import Published from './published';
import Description from './description';
import Title from './title';
import DetailsImage from './details-image';

const MarvelDetails = ({ queryKey, fetcher, initialData }) => {
    const router = useRouter();

    const { isLoading, isError, data, error } = useDetails(queryKey, fetcher, initialData);

    if (router.isFallback) {
        return null;
    }
    if (isLoading) return <FullScreenLoader />;
    if (isError) console.log('Error:', error);
    const { results } = data.data;
    const { title, name, thumbnail, description, urls, creators, dates } = results[0];
    return (
        <>
            <article className="flex flex-col text-tertiary bg-white">
                <Title name={name} title={title} />
                <DetailsImage thumbnail={thumbnail} title={title} name={name} />
                <section className="flex flex-col gap-4 bg-white border-t border-b border-primary text-xl">
                    <Description>{description}</Description>
                    <Published dates={dates} />
                    <Creators creators={creators} />
                    <DetailsNav urls={urls} />
                </section>
            </article>
            <Footer />
        </>
    );
};

export default MarvelDetails;