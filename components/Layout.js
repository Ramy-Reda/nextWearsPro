import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({children}) => {
    return (
        <div>
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <Nav />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
