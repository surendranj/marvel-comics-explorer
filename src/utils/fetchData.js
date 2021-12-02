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
