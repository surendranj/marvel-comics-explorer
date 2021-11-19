import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { ComicsContext } from '../../pages/comics';
import { CharactersContext } from '../../pages/characters';
import { EventsContext } from '../../pages/events';
import { SeriesContext } from '../../pages/series';
import { StoriesContext } from '../../pages/stories';

const Card = ({ id, title, name, thumbnail }) => {
    const comics = useContext(ComicsContext);
    const characters = useContext(CharactersContext);
    const events = useContext(EventsContext);
    const series = useContext(SeriesContext);
    const stories = useContext(StoriesContext);

    const { path } = comics || characters || events || series || stories;

    let imagePath, imageExtension;
    if (thumbnail) {
        ({ path: imagePath, extension: imageExtension } = thumbnail);
    }

    return (
        <Link href={`${path}/${id}`} passHref>
            <article className="text-white border border-primary flex flex-col hover:cursor-pointer">
                <header>
                    <h2>{title || name}</h2>
                </header>
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
            </article>
        </Link>
    );
};

export default Card;
