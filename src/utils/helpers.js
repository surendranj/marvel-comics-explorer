import axios from 'axios';
import md5 from 'md5';

export const fetchData = async (endPoint, fetchParams = null) => {
    const apiConfig = {
        apikey: process.env.NEXT_PUBLIC_PUBLIC_KEY, //your public key
        PRIVATE_KEY: process.env.NEXT_PUBLIC_PRIVATE_KEY, //your private key
        BASE_URL: 'http://gateway.marvel.com/v1/public',
    };
    const { apikey, PRIVATE_KEY, BASE_URL } = apiConfig;
    const ts = Date.now().toString();
    const hash = md5(ts + PRIVATE_KEY + apikey);
    const params = {
        ts,
        hash,
        apikey,
        ...fetchParams,
    };
    try {
        const response = await axios.get(BASE_URL + endPoint, { params });
        const data = response.data;
        return data;
    } catch (error) {
        console.log('ERROR: ', error.message);
    }
};
export const fetchComics = async ({ pageParam = 0 }) => {
    const data = await fetchData('/comics', { offset: pageParam, orderBy: 'issueNumber' });
    return data;
};

export const fetchCharacters = async ({ pageParam = 0 }) => {
    const data = await fetchData('/characters', { offset: pageParam, orderBy: 'name' });
    return data;
};

export const fetchEvents = async ({ pageParam = 0 }) => {
    const data = await fetchData('/events', { offset: pageParam, orderBy: 'name' });
    return data;
};

export const fetchSeries = async ({ pageParam = 0 }) => {
    const data = await fetchData('/series', { offset: pageParam, orderBy: 'title' });
    return data;
};
export const fetchStories = async ({ pageParam = 0 }) => {
    const data = await fetchData('/stories', { offset: pageParam, orderBy: 'id' });
    return data;
};

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
