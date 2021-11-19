import React from 'react';
import fetchData from '../../src/utils/fetchData';
import List from '../../src/components/list';

export const CharactersContext = React.createContext();

const CharacterList = ({ response }) => {
    const {
        data: { results: charactersList },
    } = response;
    return (
        <CharactersContext.Provider value={{ path: '/characters' }}>
            <List list={charactersList} heading="Characters" />;
        </CharactersContext.Provider>
    );
};

export const getStaticProps = async () => {
    const response = await fetchData('/characters', Date.now(), 10);
    return {
        props: {
            response,
        },
        revalidate: 86400,
    };
};
export default CharacterList;
