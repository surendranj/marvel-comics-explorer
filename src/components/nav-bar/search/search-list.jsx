import Image from 'next/image';
import { InfiniteScrollLoader } from '../../loader';
import Link from 'next/link';
import { useContext } from 'react';
import { NavBarContext } from '../../layout';

const SearchList = ({ items, setRootElement, setWatchElement, hasNextPage }) => {
    const navBar = useContext(NavBarContext);
    const { closeSearchList, searchEndPoint, searchInputVal } = navBar;

    return (
        <ul
            ref={setRootElement}
            className={`${
                !items?.length && 'hidden'
            } no-scrollbar divide-y absolute left-0 px-1 top-11 bg-white w-full overflow-auto max-h-80 rounded-sm md:w-2/4 md:left-auto `}
        >
            {items?.length > 0 &&
                items.map(item => (
                    <Link key={item.id} href={`${searchEndPoint}/${item.id}`}>
                        <a onClick={closeSearchList}>
                            <li className="flex gap-x-1 w-full text-base text-primary">
                                <div className="flex">
                                    <Image
                                        src={`${item.thumbnail.path}/portrait_medium.${item.thumbnail.extension}`}
                                        alt={item.title || item.name}
                                        width="50"
                                        height="75"
                                        blurDataURL={`${item.thumbnail.path}/portrait_small.${item.thumbnail.extension}`}
                                    />
                                </div>
                                <span>{item.title || item.name}</span>
                            </li>
                        </a>
                    </Link>
                ))}

            {hasNextPage && (
                <li ref={setWatchElement}>
                    <InfiniteScrollLoader className="h-7" />
                </li>
            )}
        </ul>
    );
};

export default SearchList;
