import { useState } from 'react';

const useInputChange = () => {
    const [searchInputVal, setSearchInputVal] = useState('');
    const handleSearchInputChange = event => {
        setSearchInputVal(event.target.value);
    };

    return [searchInputVal, setSearchInputVal, handleSearchInputChange];
};

export default useInputChange;
