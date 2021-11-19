import Image from 'next/image';
const Card = ({ title, name, thumbnail }) => {
    let path, extension;
    if (thumbnail) {
        ({ path, extension } = thumbnail);
    }
    return (
        <article className="text-white border border-primary flex flex-col">
            <header>
                <h2>{title || name}</h2>
            </header>
            {thumbnail && (
                <Image
                    src={`${path}/portrait_uncanny.${extension}`}
                    alt={title || name}
                    width="300"
                    height="450"
                    placeholder="blur"
                    blurDataURL={`${path}/portrait_small.${extension}`}
                />
            )}
        </article>
    );
};

export default Card;
