import Head from 'next/head';
import ServicesIntro from './components/sections/ServicesIntro';

const Servizi = ()=> {
  return (
    <div>
      <Head>
      <title>Nova - web agency</title>
        <meta name="description" content="Web Agency Manetti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicesIntro/>
    </div>
  )
}

export default Servizi
