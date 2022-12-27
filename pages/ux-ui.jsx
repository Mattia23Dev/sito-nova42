import Head from 'next/head';
import UxUiIntro from './components/sections/UxUiIntro';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addPath } from "./../redux/historySlice";

const UxUi = ()=> {

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
      <UxUiIntro/>
    </div>
  )
}

export default UxUi
