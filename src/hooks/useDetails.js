import { useQuery } from 'react-query';

const useDetails = (queryKey, fetcher, initialData) => {
    const { isLoading, isError, data, error } = useQuery(queryKey, fetcher, {
        initialData,
        staleTime: 86400 * 1000,
    });
    return { isLoading, isError, data, error };
};

export default useDetails;
