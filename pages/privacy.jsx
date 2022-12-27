import Head from 'next/head';
import PrivacyIntro from './components/sections/PrivacyIntro';

const Servizi = ()=> {
  return (
    <div>
      <Head>
      <title>Nova - web agency</title>
        <meta name="description" content="Web Agency Manetti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrivacyIntro/>
    </div>
  )
}

export default Servizi
