import Image from 'next/dist/client/image';

const DetailsImage = ({ thumbnail, title, name }) => {
    const { path: imagePath, extension: imageExtension } = thumbnail;

    return (
        <Image
            src={`${imagePath}/portrait_uncanny.${imageExtension}`}
            alt={title || name}
            width="300"
            height="450"
            placeholder="blur"
            blurDataURL={`${imagePath}/portrait_small.${imageExtension}`}
        />
    );
};

export default DetailsImage;
