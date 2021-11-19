import React from 'react';
import fetchData from '../../src/utils/fetchData';
import List from '../../src/components/list';

export const ComicsContext = React.createContext();

const ComicsList = ({ response }) => {
    console.log(response);

    const {
        data: { results: comicsList },
    } = response;
    return (
        <ComicsContext.Provider value={{ path: '/comics' }}>
            <List list={comicsList} heading="Comics" />;
        </ComicsContext.Provider>
    );
};

export const getStaticProps = async () => {
    const response = await fetchData('/comics', Date.now(), 5);
    return {
        props: {
            response,
        },
        revalidate: 86400,
    };
};
export default ComicsList;
