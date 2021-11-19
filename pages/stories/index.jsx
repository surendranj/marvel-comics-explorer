import fetchData from '../../src/utils/fetchData';
import Link from 'next/link';
import List from '../../src/components/list';

const StoriesList = ({ response }) => {
    console.log(response);

    const {
        data: { results: storiesList },
    } = response;

    return <List list={storiesList} heading="Stories" />;
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
