import '../styles/globals.css';
// import 'tailwindcss/tailwind.css';
import Layout from '../src/components/layout';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right"></ReactQueryDevtools>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </QueryClientProvider>
    );
}

export default MyApp;
