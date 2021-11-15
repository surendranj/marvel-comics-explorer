import axios from 'axios';
import md5 from 'md5';

const apiConfig = {
    apikey: '85b07364de674fb20e0b03fa7fb5d2b8',
    PRIVATE_KEY: '2ff34d87dd5363a7356e13cdf9f6d63c6c2f28d6',
    BASE_URL: 'http://gateway.marvel.com/v1/public',
};

const fetchData = async (endPoint, timeStamp, limit = 2) => {
    const { apikey, PRIVATE_KEY, BASE_URL } = apiConfig;
    const ts = timeStamp.toString();
    const hash = md5(ts + PRIVATE_KEY + apikey);
    const params = {
        ts,
        hash,
        apikey,
        limit,
    };
    try {
        const response = await axios.get(`${BASE_URL}${endPoint}`, { params });
        const results = response.data;
        return results;
    } catch (e) {
        console.log(e);
    }
};

export default fetchData;
