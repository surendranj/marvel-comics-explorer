import { useRouter } from 'next/router';
import { fetchData, getDetailsProps, getDetailsPaths } from '../../src/utils/fetchData';
import MarvelDetails from '../../src/components/details/marvel-details';

const ComicDetails = ({ initialData }) => {
    const router = useRouter();
    const { comicId } = router.query;
    const queryKey = ['comics', { comicId }];
    const fetchComicDetails = async () => {
        const comicDetails = fetchData(`/comics/${comicId}`);
        return comicDetails;
    };
    return (
        <MarvelDetails initialData={initialData} queryKey={queryKey} fetcher={fetchComicDetails} />
    );
};

export const getStaticPaths = async () => {
    const paths = await getDetailsPaths('/comics', 'comicId', { orderBy: 'title', limit: 3 });
    return paths;
};

export const getStaticProps = async ({ params }) => {
    const endPoint = `/comics/${params.comicId}`;
    const initialData = await getDetailsProps(endPoint);
    return initialData;
};

export default ComicDetails;
