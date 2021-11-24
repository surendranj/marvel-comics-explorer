import Footer from './footer';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Details = ({ data }) => {
    console.log(data);
    const router = useRouter();
    const { id, title, name, thumbnail } = data[0];
    const imagePath = thumbnail.path;
    const imageExtension = thumbnail.extension;
    //if details page is not pre-rendered by static paths fallback page is served.
    //else details page is served.
    if (router.isFallback) {
        return <h1>Loading..</h1>;
    }
    return (
        <div>
            <Image
                src={`${imagePath}/portrait_uncanny.${imageExtension}`}
                alt={title || name}
                width="300"
                height="450"
                placeholder="blur"
                blurDataURL={`${imagePath}/portrait_small.${imageExtension}`}
            />
            <Footer />
        </div>
    );
};

export default Details;
