import Image from 'next/image';
import puffRed from '../../../public/images/svg-loaders/puff-red.svg';

const InfiniteScrollLoader = ({ className }) => (
    <div className={`flex justify-center mt-1 ${className}`}>
        <Image src={puffRed} alt="page transition loader" />
    </div>
);

export default InfiniteScrollLoader;
