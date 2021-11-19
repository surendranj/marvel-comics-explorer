import React from 'react';
import fetchData from '../../src/utils/fetchData';
import List from '../../src/components/list';

export const SeriesContext = React.createContext();

const SeriesList = ({ response }) => {
    console.log(response);

    const {
        data: { results: seriesList },
    } = response;

    return (
        <SeriesContext.Provider value={{ path: '/series' }}>
            <List list={seriesList} heading="Series" />;
        </SeriesContext.Provider>
    );
};

export const getStaticProps = async () => {
    const response = await fetchData('/series', Date.now(), 10);
    return {
        props: {
            response,
        },
        revalidate: 86400,
    };
};
export default SeriesList;
