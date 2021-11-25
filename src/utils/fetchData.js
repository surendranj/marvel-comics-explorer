import axios from 'axios';
import md5 from 'md5';
import { filterImages, destructureFn, removeUndefined } from './helpers';

const apiConfig = {
    apikey: process.env.PUBLIC_KEY,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
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

export const getProps = async (endPoint, fetchParams = { limit: 10 }) => {
    const response = await fetchData(endPoint, fetchParams);
    if (!response) {
        return {
            notFound: true,
        };
    }
    const dataWithImages = filterImages(response.data.results);
    //All the code below cleans the dataWithImages array before passing it to getStaticProps

    // The code below destructures only the required properites for rendering from the dataWithImages array, reducing the size of the array, without which next.js throws a performance warning.
    //some of the properties may be undefined so the removeUndefined function removes those properties from the object

    const filteredData = dataWithImages.map(data => {
        const destructuredObj = destructureFn(data);
        const undefRemoved = removeUndefined(destructuredObj);
        return undefRemoved;
    });
    return {
        props: {
            data: filteredData,
        },
        //revalidate for Incremental Static Regeneration as per Next docs, to avoid stale data. Marvel Docs suggests not to cache data for more than 24 hours, hence 86400 seconds(24 hourse) is used. Revalidation only occurs after subsequent requests within 24 hours. If no-one visits a page after 24 hours revalidation will not occur.
        revalidate: 86400,
    };
};

export const getPaths = async (path, pathId) => {
    const fetchParams = { limit: 5 };
    const response = await getProps(path, fetchParams);
    const paths = response.props.data.map(data => {
        return { params: { [pathId]: `${data.id}` } };
    });
    //fallback set to true ensures pages not fetched by getStaticPaths initially are fetched when requested by user.
    return { paths, fallback: true };
};

export default fetchData;
