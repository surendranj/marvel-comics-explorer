export const filterImages = list =>
    list.filter(el => {
        if (el.thumbnail) {
            return !el.thumbnail.path.includes('image_not_available');
        } else {
            return el;
        }
    });

export const filterDesc = list => list.filter(el => el.description);

export const removeDuplicates = pages => {
    const uniquePages = pages.reduce((prevPages, lastPage) => {
        if (prevPages.length === 0) {
            prevPages.push(lastPage);
        } else {
            const uniqueLastPage = lastPage.filter(lastPageItem => {
                if (prevPages.flat().some(prevPagesItem => prevPagesItem.id === lastPageItem.id))
                    return false;
                return true;
            });
            prevPages.push(uniqueLastPage);
        }
        return prevPages;
    }, []);
    return uniquePages;
};

export const destructureFn = ({ id, title, name, thumbnail }) => {
    const destructered = { id, title, name, thumbnail };
    return destructered;
};

export const removeUndefined = obj => {
    const newObj = obj;
    Object.keys(newObj).map(key => newObj[key] === undefined && delete newObj[key]);
    return newObj;
};
