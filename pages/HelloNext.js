import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

const HelloNext = () => {
  return (
    <Layout>
      <Head>
        <title>Next Page</title>
      </Head>

      <h1>Hello Next.js</h1>
      <h2>
        <Link href='/'>
          <a>Back to Home</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default HelloNext;
