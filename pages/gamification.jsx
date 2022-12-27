import Head from 'next/head';
import GamificationIntro from './components/sections/GamificationIntro';

const Gamification = ()=> {
  return (
    <div>
      <Head>
        <title>Nova - web agency</title>
        <meta name="description" content="Web Agency Manetti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GamificationIntro/>
    </div>
  )
}

export default Gamification
