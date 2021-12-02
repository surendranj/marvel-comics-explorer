import { upperCaseFirst, splitStringOnCaps } from '../../utils/helpers';

const DetailsNav = ({ urls }) => (
    <nav className="mt-2 px-2">
        <ul className="flex justify-start gap-2 flex-wrap">
            {urls
                // .filter(urlObj => urlObj.type !== 'reader')
                .map(urlObj => {
                    const { type: urlName, url } = urlObj;
                    const modifiedUrlName = splitStringOnCaps(upperCaseFirst(urlName));
                    return (
                        <li
                            key={modifiedUrlName}
                            className="border rounded-md px-2 bg-tertiary text-white flex items-center justify-center w-1/4 my-2"
                        >
                            <a href={url} target="_blank" rel="noreferrer">
                                {modifiedUrlName}
                            </a>
                        </li>
                    );
                })}
        </ul>
    </nav>
);

export default DetailsNav;
