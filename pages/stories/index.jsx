import React from 'react';
import fetchData from '../../src/utils/fetchData';
import List from '../../src/components/list';

export const StoriesContext = React.createContext();

const StoriesList = ({ response }) => {
    console.log(response);

    const {
        data: { results: storiesList },
    } = response;
    return (
        <StoriesContext.Provider value={{ path: '/stories' }}>
            <List list={storiesList} heading="Stories" />;
        </StoriesContext.Provider>
    );
};

export const getStaticProps = async () => {
    const response = await fetchData('/stories', Date.now(), 10);
    return {
        props: {
            response,
        },
        revalidate: 86400,
    };
};
export default StoriesList;
