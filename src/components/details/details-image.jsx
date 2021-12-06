import Image from 'next/dist/client/image';

const DetailsImage = ({ thumbnail, title, name }) => {
    const { path: imagePath, extension: imageExtension } = thumbnail;

    return (
        <div className="flex flex-col items-center relative w-300 h-450 max-w-full lg:h-full lg:w-full">
            <Image
                src={`${imagePath}/portrait_uncanny.${imageExtension}`}
                alt={title || name}
                // width="300"
                // height="450"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                placeholder="blur"
                blurDataURL={`${imagePath}/portrait_small.${imageExtension}`}
            />
        </div>
    );
};

export default DetailsImage;
