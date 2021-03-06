import Image from 'next/image';
import { motion } from 'framer-motion';
import NavBtn from '../src/components/buttons/nav-btn';
import PhotoCredits from '../src/components/photo-credits/photo-credits';

const HomePage = () => {
    const links = {
        Comics: '/comics',
        Characters: '/characters',
        Events: '/events',
        Series: '/series',
    };
    return (
        <section className="relative flex flex-col flex-grow  h-full  text-center text-tertiary md:text-4xl ">
            <div className="relative z-0 h-screen w-screen">
                <Image
                    src="https://source.unsplash.com/wYzjL5BwiEI"
                    alt="Homepage Image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 100%"
                    priority
                    as="img"
                />
            </div>
            <div className="absolute z-10 flex flex-col flex-grow h-full w-full">
                <motion.h1 animate={{ opacity: 1 }} className="text-4xl my-16 lg:text-7xl">
                    Welcome to Marvel Explorer
                </motion.h1>

                <nav className="py-1 flex-grow flex justify-center items-center md:flex-grow-0.4">
                    <ul className="flex flex-col h-full w-full justify-evenly md:flex-row md:gap-20 md:text-2xl md:items-center">
                        {Object.entries(links).map(([pathName, path]) => (
                            <li key={pathName}>
                                <a href={path}>
                                    <NavBtn>{pathName}</NavBtn>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <PhotoCredits />
        </section>
    );
};

export default HomePage;
