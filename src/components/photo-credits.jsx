const PhotoCredits = () => {
    return (
        <p className="absolute z-20 bottom-0 right-0 text-white text-xs md:text-lg">
            Photo by{' '}
            <a
                className="underline text-primary"
                href="https://unsplash.com/@mullyadii?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
            >
                Mulyadi
            </a>{' '}
            on{' '}
            <a
                className="underline text-primary"
                href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
            >
                Unsplash
            </a>
        </p>
    );
};

export default PhotoCredits;
