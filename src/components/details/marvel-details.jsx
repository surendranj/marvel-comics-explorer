import { useRouter } from 'next/router';
import useDetails from '../../hooks/useDetails';
import FullScreenLoader from '../loader';
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
    const cleanDescription = description.replace(/<\/?[^>]+(>|$)/g, '');
    return (
        <>
            <article className="flex flex-col items-center justify-items-center flex-grow text-tertiary md:gap-y-20 lg:grid grid-cols-2 lg:gap-0 auto-rows-min ">
                <Title name={name} title={title} />
                <DetailsImage thumbnail={thumbnail} title={title} name={name} />
                <section className="flex flex-col gap-4 text-xl md:px-4 lg:min-h-screen">
                    <Description>{cleanDescription}</Description>
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
