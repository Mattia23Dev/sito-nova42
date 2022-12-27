import Head from 'next/head';
import ChiSiamoIntro from './components/sections/ChiSiamoIntro';

const WhoWeAre = ({props})=> {


  console.log(props)

  return (
    <div>
      <Head>
        <title>Nova - web agency</title>
        <meta name="description" content="Web Agency Manetti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChiSiamoIntro/>
    </div>
  )
}

export default WhoWeAre
