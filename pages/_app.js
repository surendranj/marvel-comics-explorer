import '../styles/globals.css';
import Layout from '../src/components/layout';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Hydrate>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right"></ReactQueryDevtools>
        </QueryClientProvider>
    );
}

export default MyApp;
