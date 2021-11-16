import fetchData from './fetchData';

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

export const getProps = async (params, path, pathId) => {
    const response = await fetchData(`${path}/${params[pathId]}`, Date.now());
    if (!response) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            response,
        },
        revalidate: 86400,
    };
};
