import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { NavBarContext } from '../../layout/layout';
import InfiniteScrollLoader from '../../loaders/infinite-scroll-loader';
import { motion } from 'framer-motion';

const SearchList = ({ items, setRootElement, setWatchElement, hasNextPage }) => {
    const navBar = useContext(NavBarContext);
    const { toggleSearchList, setToggleSearchList, searchEndPoint, searchInputVal } = navBar;

    return (
        <motion.ul
            animate={{ height: toggleSearchList ? 'auto' : 0 }}
            initial={{ height: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-11 -z-10 left-0 px-1 bg-white w-full max-h-80 overflow-auto no-scrollbar divide-y-2 rounded-sm md:left-10 md:w-2/4 md:px-0"
            ref={setRootElement}
        >
            {items?.length > 0 &&
                items.map(item => (
                    <Link key={item.id} href={`${searchEndPoint}/${item.id}`} passHref>
                        <li
                            onClick={() => setToggleSearchList(false)}
                            key={item.id}
                            className="w-full flex gap-1 text-primary text-xl cursor-pointer md:gap-4"
                        >
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
                    </Link>
                ))}

            {items?.length === 0 && (
                <li className="text-primary text-center">No results for {searchInputVal}</li>
            )}

            {hasNextPage && (
                <li ref={setWatchElement}>
                    <InfiniteScrollLoader className="h-7" />
                </li>
            )}
        </motion.ul>
    );
};

export default SearchList;
