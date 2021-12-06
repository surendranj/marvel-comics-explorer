import Image from 'next/image';
import { NavBtn } from '../src/components/buttons';
import { motion } from 'framer-motion';

const HomePage = () => {
    const links = {
        Comics: '/comics',
        Characters: '/characters',
        Events: '/events',
        Series: '/series',
    };
    return (
        <section className="relative flex flex-col flex-grow  h-full  text-center text-tertiary lg:text-5xl">
            <div className="relative z-0 h-screen w-screen">
                <Image
                    src="https://source.unsplash.com/wYzjL5BwiEI"
                    alt="Homepage Image"
                    layout="fill"
                    objectFit="cover"
                    priority
                    as="img"
                />
            </div>
            <div className="absolute z-10 flex flex-col flex-grow h-full w-full">
                <motion.h1 animate={{ opacity: 1 }} className="text-4xl my-16 lg:text-7xl">
                    Welcome to Marvel Eplorer
                </motion.h1>
                <p className="my-10 ">
                    Click on the links below to start exploring the Marvel Universe.
                </p>
                <nav className="py-1 flex-grow flex justify-center items-center md:flex-grow-0.4">
                    <ul className="flex flex-col md:flex-row md:gap-20">
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
        </section>
    );
};

export default HomePage;
