import axios from 'axios';
import md5 from 'md5';
import { filterImages } from './filterImages';

const apiConfig = {
    apikey: '85b07364de674fb20e0b03fa7fb5d2b8',
    PRIVATE_KEY: '2ff34d87dd5363a7356e13cdf9f6d63c6c2f28d6',
    BASE_URL: 'http://gateway.marvel.com/v1/public',
};
const fetchData = async (endPoint, fetchParams) => {
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
        const response = await axios.get(`${BASE_URL}${endPoint}`, { params });
        const results = response.data;
        return results;
    } catch (e) {
        console.log('Error Msg: ', e);
    }
};

export const getPaths = async (path, pathId) => {
    const response = await fetchData(path, Date.now());
    const {
        data: { results },
    } = response;
    const paths = results.map(el => {
        return { params: { [pathId]: el.id.toString() } };
    });
    return { paths, fallback: false };
};

export const getProps = async (endPoint, destructureFn, fetchParams = null) => {
    const response = await fetchData(endPoint, fetchParams);
    const dataWithImages = filterImages(response.data.results);

    // The expression below destructures only the required properites for rendering from the dataWithImages array, reducing the size of the array, without which next.js throws a performance warning.
    const filteredData = dataWithImages.map(data => destructureFn(data));

    return {
        props: {
            data: filteredData,
        },
    };
};

export default fetchData;
