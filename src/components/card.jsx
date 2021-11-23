import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Card = ({ id, title, name, thumbnail }) => {
    const router = useRouter();

    let imagePath, imageExtension;
    if (thumbnail) {
        ({ path: imagePath, extension: imageExtension } = thumbnail);
    }

    return (
        <Link href={`${router.pathname}/${id}`} passHref>
            <article className="text-white hover:cursor-pointer relative z-30 m-0.5 border-0 overflow-hidden rounded-md flex flex-col">
                <header className="z-10 text-tertiary bg-white p-0.5 flex-grow flex items-center justify-center">
                    <h2>{title || name}</h2>
                </header>
                <div className="flex transform hover:scale-110 transition-transform duration-300 ease-in-out">
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
                </div>
            </article>
        </Link>
    );
};

export default Card;
