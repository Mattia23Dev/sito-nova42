import Head from 'next/head';
import SitoWebIntro from './components/sections/SitoWebIntro';

const WebSite = ()=> {
  return (
    <div>
      <Head>
        <title>Nova - web agency</title>
        <meta name="description" content="Web Agency Manetti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SitoWebIntro/>
    </div>
  )
}

export default WebSite
