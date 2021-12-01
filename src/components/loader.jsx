import Image from 'next/image';
import spinningCircles from '../../public/images/svg-loaders/spinning-circles.svg';

const Loader = ({ className }) => (
    <div className={className}>
        <Image src={spinningCircles} alt="page loading animation" />
    </div>
);

export default Loader;
