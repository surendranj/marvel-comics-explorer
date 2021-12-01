import Image from 'next/image';
import rings from '../../public/images/svg-loaders/rings.svg';

const Loader = () => (
    <div className="flex justify-center mb-7">
        <Image src={rings} alt="page loading animation" />
    </div>
);

export default Loader;
