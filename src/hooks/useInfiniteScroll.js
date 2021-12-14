import { useState, useEffect } from 'react';

const useInfiniteScroll = () => {
    const [rootElement, setRootElement] = useState(null);
    const [watchElement, setWatchElement] = useState(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const firstEntry = entries[0];

                if (firstEntry.isIntersecting) {
                    setIsIntersecting(true);
                } else {
                    setIsIntersecting(false);
                }
            },
            { root: rootElement, threshold: 0.01 }
        );
        if (watchElement) {
            observer.observe(watchElement);
        }

        return () => {
            if (watchElement) {
                observer.unobserve(watchElement);
            }
        };
    }, [watchElement, rootElement]);

    return [setRootElement, setWatchElement, isIntersecting];
};

export default useInfiniteScroll;
