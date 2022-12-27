import Head from 'next/head';
import HomeIntro from './components/sections/HomeIntro';

const Home = ()=> {
  return (
    <div>
      <Head>
        <title>Nova - web agency</title>
        <meta name="description" content="Web Agency Manetti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeIntro/>
    </div>
  )
}

export default Home
