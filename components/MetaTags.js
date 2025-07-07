import Head from 'next/head';

const MetaTags = ({ title, description }) => {
    return (
        <Head>
            <title>{title || 'Default Title'}</title>
            <meta name="description" content={description || 'Default description'} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
    );
};

export default MetaTags;