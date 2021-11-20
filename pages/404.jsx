import { useRouter } from 'next/router';
import Image from 'next/image';
import { TransparentPrimaryBtn } from '../src/components/buttons';

const PageNotFound = () => {
    const router = useRouter();
    return (
        <section className="relative flex-grow flex justify-center items-center">
            <Image
                src="https://source.unsplash.com/kL4coQHVj_A"
                alt="Page Not Found Image."
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className="z-0">
                <p className="text-white mb-1">
                    <span className="text-5xl text-primary">Uh oh...</span>
                    <br /> We can&apos;t find the page you&apos;re looking for
                </p>
                <TransparentPrimaryBtn handleClick={() => router.back()} className="mr-2">
                    Back
                </TransparentPrimaryBtn>
                <TransparentPrimaryBtn handleClick={() => router.push('/')}>
                    Home
                </TransparentPrimaryBtn>
            </div>
        </section>
    );
};

export default PageNotFound;
