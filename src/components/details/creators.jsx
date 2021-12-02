import { findIdFromResourceURI, upperCaseFirst, reduceCreators } from '../../utils/helpers';

const Creators = ({ creators }) => {
    if (creators && creators.available) {
        const reducedCreators = Object.entries(reduceCreators(creators.items));
        return (
            <ul className="flex flex-col gap-2">
                {reducedCreators.map(([role, creators]) => (
                    <li key={role} className="grid grid-cols-2 px-2">
                        {upperCaseFirst(role)}
                        <ul>
                            {creators.map(creator => (
                                <li key={creator}>{creator}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        );
    }
    return null;
};

export default Creators;
