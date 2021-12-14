import { useState, useEffect } from 'react';

const useFlatData = data => {
    const [items, setItems] = useState(() => {
        if (data) {
            return [
                ...data.pages
                    .flat()
                    .reduce((map, obj) => map.set(obj.id, obj), new Map())
                    .values(),
            ];
        }
    });

    const [isNewPageEmpty, setIsNewPageEmpty] = useState(false);

    useEffect(() => {
        if (data) {
            setItems([
                ...data.pages
                    .flat()
                    .reduce((map, obj) => map.set(obj.id, obj), new Map())
                    .values(),
            ]);
        }
    }, [data]);

    useEffect(() => {
        if (data) {
            if (data.pages.slice(-1)[0].length === 0) {
                setIsNewPageEmpty(true);
            } else {
                setIsNewPageEmpty(false);
            }
        }
    }, [data]);

    return [items, isNewPageEmpty];
};

export default useFlatData;
