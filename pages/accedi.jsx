import Head from 'next/head';
import AccediIintro from './components/sections/AccediIintro';

const Accedi = ()=> {

  return (
    <div>
      <Head>
        <title>Nova - web agency</title>
        <meta name="description" content="Web Agency Manetti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AccediIintro/>
    </div>
  )
}

export default Accedi
