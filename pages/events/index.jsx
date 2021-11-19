import React from 'react';
import fetchData from '../../src/utils/fetchData';
import List from '../../src/components/list';

export const EventsContext = React.createContext();

const EventsList = ({ response }) => {
    console.log(response);

    const {
        data: { results: eventList },
    } = response;

    return (
        <EventsContext.Provider value={{ path: '/events' }}>
            <List list={eventList} heading="Events" />
        </EventsContext.Provider>
    );
};

export const getStaticProps = async () => {
    const response = await fetchData('/events', Date.now(), 10);
    return {
        props: {
            response,
        },
        revalidate: 86400,
    };
};
export default EventsList;
