import { useState } from 'react';

const useToggleSearchList = () => {
    const [toggleSearchList, setToggleSearchList] = useState(false);

    return [toggleSearchList, setToggleSearchList];
};

export default useToggleSearchList;
