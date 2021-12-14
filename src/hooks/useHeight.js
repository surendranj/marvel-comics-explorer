import { useEffect, useState } from 'react';

const useHeight = (ref, list) => {
    const [height, setHeight] = useState(null);
    useEffect(() => {
        const getHeight = () => {
            if (ref.current) {
                setHeight({
                    clientHeight: ref.current.clientHeight,
                    winHeight: window.innerHeight,
                    isContentLess: ref.current.clientHeight <= 1.3 * window.innerHeight,
                });
            }
        };
        window.addEventListener('resize', getHeight);
        getHeight();

        return () => window.removeEventListener('resize', getHeight);
    }, [ref, list]);
    return height;
};

export default useHeight;
