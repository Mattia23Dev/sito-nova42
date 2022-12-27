import Head from 'next/head';
import SoftwareIntro from './components/sections/SoftwareIntro';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addPath } from "./../redux/historySlice";


const SoftwareDevelopment = ()=> {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(addPath({'path':'/servizi'}));
  },[]);

  return (
    <div>
      <Head>
        <title>Nova - web agency</title>
        <meta name="description" content="Web Agency Manetti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SoftwareIntro/>
    </div>
  )
}

export default SoftwareDevelopment
