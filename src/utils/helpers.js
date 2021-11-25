export const filterImages = list =>
    list.filter(el => {
        if (el.thumbnail) {
            return !el.thumbnail.path.includes('image_not_available');
        } else {
            return el;
        }
    });

export const destructureFn = ({ id, title, name, thumbnail }) => {
    const destructered = { id, title, name, thumbnail };
    return destructered;
};

export const removeUndefined = obj => {
    const newObj = obj;
    Object.keys(newObj).map(key => newObj[key] === undefined && delete newObj[key]);
    return newObj;
};
