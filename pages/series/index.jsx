import fetchData from '../../src/utils/fetchData';
import Link from 'next/link';
import List from '../../src/components/list';

const SeriesList = ({ response }) => {
    console.log(response);

    const {
        data: { results: seriesList },
    } = response;

    return <List list={seriesList} heading="Series" />;
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
