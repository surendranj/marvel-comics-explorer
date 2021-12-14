import Image from 'next/image';
import puffRed from '../../public/images/svg-loaders/puff-red.svg';

const FullScreenLoader = ({ className }) => (
    <div
        className={`fixed z-40 w-full h-full flex justify-center bg-white opacity-75 ${className}`}
    >
        <Image src={puffRed} alt="page transition loader" priority />
    </div>
);

export const InfiniteScrollLoader = ({ className }) => (
    <div className={`flex justify-center mt-1 ${className}`}>
        <Image src={puffRed} alt="page transition loader" />
    </div>
);

export default FullScreenLoader;
