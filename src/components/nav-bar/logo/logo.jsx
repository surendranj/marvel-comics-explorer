import Link from 'next/link';

const Logo = ({ className }) => {
    return (
        <div className={className}>
            <Link href="/" passHref>
                MARVEL EXPLORER
            </Link>
        </div>
    );
};

export default Logo;
