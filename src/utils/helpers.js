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
export const upperCaseFirst = str => str[0].toUpperCase() + str.slice(1);

export const splitStringOnCaps = str => {
    const split = str.match(/[A-Z][a-z]+/g);
    return split.join(', ');
};

export const findIdFromResourceURI = resourceURI => {
    const idIndex = resourceURI.lastIndexOf('/') + 1;
    return resourceURI.slice(idIndex);
};

export const reduceCreators = creatorsList => {
    const reducedCreators = creatorsList.reduce((creators, currCreator) => {
        if (`${[currCreator.role]}` in creators) {
            creators[currCreator.role].push(currCreator.name);
        } else {
            creators[currCreator.role] = [];
            creators[currCreator.role].push(currCreator.name);
        }

        return creators;
    }, {});
    return reducedCreators;
};
