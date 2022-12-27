import Head from 'next/head';
import BlockChainIntro from './components/sections/BlockChainIntro';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addPath } from "../redux/historySlice";


const BlockChain = ()=> {

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
      <BlockChainIntro/>
    </div>
  )
}

export default BlockChain
