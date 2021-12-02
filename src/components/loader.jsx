import Image from 'next/image';
import puffRed from '../../public/images/svg-loaders/puff-red.svg';
import puff from '../../public/images/svg-loaders/puff.svg';

const FullScreenLoader = ({ className }) => (
    <div className={className}>
        <Image src={puffRed} alt="page transition loader" priority />
    </div>
);

export const InfiniteScrollLoader = ({ className }) => (
    <div className={className}>
        <Image src={puff} alt="page transition loader" />
    </div>
);

export default FullScreenLoader;
