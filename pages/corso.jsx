import Head from 'next/head';
import CourseIntro from './components/sections/CourseIntro';

const Corso = ({props})=> {


  console.log(props)

  return (
    <div>
      <Head>
        <title>Nova - web agency</title>
        <meta name="description" content="Web Agency Manetti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CourseIntro/>
    </div>
  )
}

export default Corso
