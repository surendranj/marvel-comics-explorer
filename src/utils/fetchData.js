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

export const getProps = async (endPoint, fetchParams = null) => {
    const response = await fetchData(endPoint, fetchParams);
    const dataWithImages = filterImages(response.data.results);

    //All the code below cleans the dataWithImages array before passing it to getStaticProps

    // The code below destructures only the required properites for rendering from the dataWithImages array, reducing the size of the array, without which next.js throws a performance warning.
    const destructureFn = ({ id, title, name, thumbnail }) => {
        const destructered = { id, title, name, thumbnail };
        return destructered;
    };

    //some of the properties may be undefined so the below code removes those properties from the object
    const removeUndefined = obj => {
        const newObj = obj;
        Object.keys(newObj).map(key => newObj[key] === undefined && delete newObj[key]);
        return newObj;
    };

    const filteredData = dataWithImages.map(data => {
        const destructuredObj = destructureFn(data);
        const undefRemoved = removeUndefined(destructuredObj);
        return undefRemoved;
    });
    return {
        props: {
            data: filteredData,
        },
    };
};

export const getPaths = async (path, pathId) => {
    const response = await getProps(path);
    const paths = response.props.data.map(data => {
        return { params: { [pathId]: `${data.id}` } };
    });
    //fallback set to true ensures pages not fetched by getStaticPaths initially are fetched when requested by user.
    return { paths, fallback: true };
};

export default fetchData;
