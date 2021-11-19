import fetchData from '../../src/utils/fetchData';
import Link from 'next/link';
import List from '../../src/components/list';


const ComicsList = ({ response }) => {
    console.log(response);

    const {
        data: { results: comicsList },
    } = response;

    return <List list={comicsList} heading="Comics" />;
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
