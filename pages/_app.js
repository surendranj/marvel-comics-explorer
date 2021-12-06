import '../styles/globals.css';
import Layout from '../src/components/layout';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';

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
            <Hydrate state={pageProps.dehydratedState}>
                <RouteContext.Provider value={isChangingRoute}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </RouteContext.Provider>
            </Hydrate>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right"></ReactQueryDevtools>
        </QueryClientProvider>
    );
}

export default MyApp;
