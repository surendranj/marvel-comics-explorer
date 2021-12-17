import { useRouter } from 'next/router';
import Image from 'next/image';
import PhotoCredits from '../src/components/photo-credits/photo-credits';
import TransparentPrimaryBtn from '../src/components/buttons/trans-prim-btn';

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
                    <br /> We can&apos;t find the <span className="text-primary">page</span>{' '}
                    you&apos;re looking for
                </p>
                <TransparentPrimaryBtn handleClick={() => router.back()} className="mr-2">
                    Back
                </TransparentPrimaryBtn>
                <TransparentPrimaryBtn handleClick={() => router.push('/')}>
                    Home
                </TransparentPrimaryBtn>
            </div>
            <PhotoCredits />
        </section>
    );
};

export default PageNotFound;
