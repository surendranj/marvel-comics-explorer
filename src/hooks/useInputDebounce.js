import { useState, useEffect } from 'react';

const useInputDebounce = (value, delay = 500) => {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                // if (value) {
                //     setDebouncedValue(value.split(' ')[0]);
                // } else {
                //     setDebouncedValue(' ');
                // }
                setDebouncedValue(value.split(' ')[0]);
            }, delay);
            // Cancel the timeout if value changes (also on delay change or unmount)
            // This is how we prevent debounced value from updating if value is changed ...
            // .. within the delay period. Timeout gets cleared and restarted.
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );

    // useEffect(() => console.log(debouncedValue), [debouncedValue]);
    return debouncedValue;
};

export default useInputDebounce;
