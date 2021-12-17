import { useState } from 'react';

const useToggleNavList = () => {
    const [toggleNavList, setToggleNavList] = useState(false);

    return [toggleNavList, setToggleNavList];
};

export default useToggleNavList;
