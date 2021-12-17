import '../styles/globals.css';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '../src/components/layout/layout';

export const RouteContext = createContext();

function MyApp({ Component, pageProps }) {
    const [queryClient] = useState(() => new QueryClient());

    const router = useRouter();
    const [isChangingRoute, setIsChangingRoute] = useState(false);
    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            setIsChangingRoute(true);
        });
        router.events.on('routeChangeComplete', () => {
            setIsChangingRoute(false);
        });
        return () => {
            router.events.off('routeChangeStart', setIsChangingRoute);
            router.events.off('routeChangeComplete', setIsChangingRoute);
        };
    }, [router.events]);
    return (
        <QueryClientProvider client={queryClient}>
            <RouteContext.Provider value={isChangingRoute}>
                <Layout>
                    <Hydrate state={pageProps.dehydratedState}>
                        <Component {...pageProps} />
                    </Hydrate>
                </Layout>
            </RouteContext.Provider>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right"></ReactQueryDevtools>
        </QueryClientProvider>
    );
}

export default MyApp;
