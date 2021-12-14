import { useState, useEffect } from 'react';

const useToggleNavBar = () => {
    const [navBarDropDown, setnavBarDropDown] = useState(false);
    const [translate, setTranslate] = useState('-top-40');
    const closeNavBar = () => {
        setnavBarDropDown(false);
    };
    const toggleNavBar = () => {
        setnavBarDropDown(navBarDropDown => !navBarDropDown);
    };
    useEffect(() => {
        if (navBarDropDown) {
            setTranslate('top-full');
        } else if (!navBarDropDown) {
            setTranslate('-top-40');
        }
    }, [navBarDropDown]);

    return [translate, closeNavBar, toggleNavBar];
};

export default useToggleNavBar;
