import { useRouter } from 'next/router';
import { getPaths, getProps } from '../../src/utils/getDetails';

const ComicDetails = ({ response }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }
    const {
        data: { results },
    } = response;
    const { title, description } = results[0];
    return (
        <main>
            <h1>{title}</h1>
            <p>{description}</p>
        </main>
    );
};

export const getStaticPaths = () => {
    return getPaths('/comics', 'comicId');
};

export const getStaticProps = ({ params }) => {
    return getProps(params, '/comics', 'comicId');
};

export default ComicDetails;
