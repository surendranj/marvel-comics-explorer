import Footer from './footer';
import Image from 'next/image';

const Details = ({ data }) => {
    const { id, title, name, thumbnail } = data[0];

    let imagePath, imageExtension;
    if (thumbnail) {
        ({ path: imagePath, extension: imageExtension } = thumbnail);
    }

    return (
        <div>
            {thumbnail && (
                <Image
                    src={`${imagePath}/portrait_uncanny.${imageExtension}`}
                    alt={title || name}
                    width="300"
                    height="450"
                    placeholder="blur"
                    blurDataURL={`${imagePath}/portrait_small.${imageExtension}`}
                />
            )}
            <Footer />
        </div>
    );
};

export default Details;
