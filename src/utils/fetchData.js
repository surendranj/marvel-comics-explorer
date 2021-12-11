import axios from 'axios';
import md5 from 'md5';
import { dehydrate, QueryClient } from 'react-query';

export const fetchData = async (endPoint, fetchParams = null) => {
    const apiConfig = {
        apikey: process.env.NEXT_PUBLIC_PUBLIC_KEY_ALT, //your public key
        PRIVATE_KEY: process.env.NEXT_PUBLIC_PRIVATE_KEY_ALT, //your private key
        BASE_URL: 'https://gateway.marvel.com/v1/public',
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

export const getListProps = async queryKey => {
    const [key, endPoint, fetchParams] = queryKey;
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery([key, endPoint, fetchParams], () =>
        fetchData(endPoint, fetchParams)
    );
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};
export const getDetailsPaths = async (endPoint, queryId, fetchParams) => {
    const data = await fetchData(endPoint, { ...fetchParams });
    const paths = data.data.results.map(item => {
        return { params: { [queryId]: `${item.id}` } };
    });
    return { paths, fallback: true };
};
export const getDetailsProps = async endPoint => {
    const initialData = await fetchData(endPoint);
    if (!initialData) {
        return {
            notFound: true,
        };
    }
    return { props: { initialData } };
};
