import Head from 'next/head';
import ChiSiamoSection from './components/sections/ChiSiamoSection';
import Navbar from './components/Navbar';

const ChiSiamo = ({props})=> {

  console.log(props)

  return (
    <div className='bg-nova-dark'>
      <Head>
        <title>Nova - web agency</title>
        <meta name="description" content="Web Agency Manetti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <ChiSiamoSection/>
    </div>
  )
}

export default ChiSiamo
