import { useState, useEffect } from 'react';

const useSearchKey = endPoint => {
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        if (endPoint === '/comics' || endPoint === '/series') {
            setSearchKey('titleStartsWith');
        } else {
            setSearchKey('nameStartsWith');
        }
    }, [endPoint]);

    return [searchKey];
};

export default useSearchKey;
