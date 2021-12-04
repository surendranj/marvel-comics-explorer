import { useQuery } from 'react-query';

const useList = queryKey => {
    const [_key, endPoint, fetchParams] = queryKey;
    const { data } = useQuery([...queryKey], () => fetchData(endPoint, fetchParams), {
        staleTime: 86400 * 1000,
    });
    return data;
};

export default useList;
