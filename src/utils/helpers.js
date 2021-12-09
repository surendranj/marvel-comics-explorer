//a function to remove data without images and description
export const cleanPage = page => {
    return page.filter(
        item => item.description && !item.thumbnail.path.includes('image_not_available')
    );
};

// sort data for binarySearchIdx
export const sortData = page => page.sort((item1, item2) => item1.id - item2.id);

// binary search to remove duplicates
export const binarySearchIdx = (prevPages, item) => {
    let start = 0;
    let end = prevPages.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (prevPages[middle].id === item.id) {
            return middle;
        } else if (prevPages[middle].id < item.id) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
};
// filter duplicates from page
export const filterDuplicates = (prevPages, newPage) => {
    return newPage.filter(item => {
        return binarySearchIdx(prevPages, item) === -1;
    });
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
