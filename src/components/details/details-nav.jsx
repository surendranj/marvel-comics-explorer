const DetailsNav = ({ urls }) => (
    <nav className="mt-2">
        <ul className="flex justify-start gap-2 flex-wrap">
            {urls.map(urlObj => {
                const { type, url } = urlObj;
                return (
                    <li
                        key={type}
                        className="border rounded-md px-2 bg-tertiary text-white flex items-center justify-center w-1/4"
                    >
                        <a href={url} target="_blank" rel="noreferrer">
                            {type}
                        </a>
                    </li>
                );
            })}
        </ul>
    </nav>
);

export default DetailsNav;
