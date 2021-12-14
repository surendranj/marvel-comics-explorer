import Link from 'next/link';

const Logo = () => {
    return (
        <div className="px-1 tracking-tighter bg-white text-primary rounded-sm  flex justify-center items-center z-0">
            <Link href="/" passHref>
                MARVEL EXPLORER
            </Link>
        </div>
    );
};

export default Logo;
