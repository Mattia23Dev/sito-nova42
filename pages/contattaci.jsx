import Head from 'next/head';
import Contatta from './components/sections/Contatta';
import { useSelector } from 'react-redux';


const Contattaci = (props)=> {

  return (
    <div>
      <Head>
      <title>Nova - web agency</title>
        <meta name="description" content="Web Agency Manetti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contatta/>
    </div>
  )
}

export default Contattaci
