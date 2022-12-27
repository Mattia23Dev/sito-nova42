import Head from 'next/head';
import CandidatiIntro from './components/sections/CandidatiIntro';

const Candidati = ()=> {
  return (
    <div>
      <Head>
        <title>Nova - web agency</title>
        <meta name="description" content="Web Agency Manetti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CandidatiIntro/>
    </div>
  )
}

export default Candidati
