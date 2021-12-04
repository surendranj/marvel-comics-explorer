import { getListProps } from '../../src/utils/fetchData';
import List from '../../src/components/list';
import InfiniteScroll from 'react-infinite-scroll-component';
import { InfiniteScrollLoader } from '../../src/components/loader';
import EndMessage from '../../src/components/end-message';
import Footer from '../../src/components/footer';
import useList from '../../src/hooks/useList';
import useInfiniteData from '../../src/hooks/useInfiniteData';

const endPoint = '/comics';
const fetchParams = { limit: 10, orderBy: 'title' };
const queryKey = ['comics', endPoint, fetchParams];
const infiniteQueryKey = ['comics-infinite', endPoint, fetchParams];
export const getStaticProps = () => getListProps(queryKey);

const Comics = () => {
    const initialStaticData = useList(queryKey);
    const { data, fetchNextPage, hasNextPage } = useInfiniteData(
        infiniteQueryKey,
        initialStaticData
    );

    return (
        <>
            <InfiniteScroll
                dataLength={data.pages.length}
                next={() => fetchNextPage()}
                hasMore={hasNextPage}
                loader={<InfiniteScrollLoader className="flex justify-center mt-1" />}
                endMessage={<EndMessage />}
            >
                <List list={data.pages.flat()} heading="Comics" />
            </InfiniteScroll>
            <Footer />
        </>
    );
};

export default Comics;
