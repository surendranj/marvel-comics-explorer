import { upperCaseFirst, splitStringOnCaps } from '../../utils/helpers';
import { NavBtn } from '../buttons';

const DetailsNav = ({ urls }) => (
    <nav className="mt-2 px-2">
        <ul className="flex justify-start gap-2 flex-wrap">
            {urls
                // .filter(urlObj => urlObj.type !== 'reader')
                .map(urlObj => {
                    const { type: urlName, url } = urlObj;
                    const modifiedUrlName = splitStringOnCaps(upperCaseFirst(urlName));
                    return (
                        <li key={modifiedUrlName}>
                            <a href={url} target="_blank" rel="noreferrer">
                                <NavBtn>{modifiedUrlName}</NavBtn>
                            </a>
                        </li>
                    );
                })}
        </ul>
    </nav>
);

export default DetailsNav;
