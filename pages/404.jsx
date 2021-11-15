import { useEffect } from 'react';
import { useRouter } from 'next/router';

const PageNotFound = () => {
    const router = useRouter();
    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/');
    //     }, 3000);
    // }, [router]);
    return <h1>Page Illa Poda.</h1>;
};

export default PageNotFound;
