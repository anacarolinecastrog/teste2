import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Typebot</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <iframe
        src="https://viewer.typebot.io/my-typebot-v7urwma?embed=true&hide-footer=true"
        style={{ width: '100%', height: '100vh', border: 'none' }}
        allow="clipboard-write"
      ></iframe>
    </>
  );
}
