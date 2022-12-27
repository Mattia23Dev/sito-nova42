
import Image from "next/image";
import { useEffect, useState } from "react";
import WebGame from "./WebGame";
import Link from "next/link";

const GamificationIntro = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


    return (

        <>
            <div className="row d-flex nova-section">
                    <div className="col-12 offset-md-1 col-md-11">
                        <div className="row">
                            <div className="col-12 col-lg-7 d-flex justify-items-center align-content-center">

                                <div className="div">
                                    <h3 className="gradient-fill size-lg-20 weight-700 ms-3 mb-4 mb-md-2 text-center text-md-start text-uppercase">Impara a programmare divertendoti</h3>
                                    <h2 className="section-title text-center text-md-start ">Impara a <strong>programmare da 0</strong></h2>
                                    <h2 className="section-title text-center text-md-start">in modo semplice e divertente</h2>
                                    <p className="d-none d-md-block section-description p-2">
                                        Grazie alla nostra app ti bastano pochi minuti al giorno per imparare <br/>
                                        a programmare! Anche se parti da zero.<br/>
                                        Mettiti alla prova con quiz e giochi di programmazione e impara l&apos;arte<br/>
                                        del coding  in maniera rapida e divertente.<br/>
                                        Unisciti alla Community, colleziona premi e aumenta rapidamente<br/>
                                        le tue competenze di coding</p>
                                    <Link href={'#gameInfo'}>
                                        <div className="d-flex justify-content-center justify-content-md-start">
                                            <button className="mt-5 mt-md-0 mb-5 mb-md-0 d-block btn btn-nova-fill" type="submit">{'Scopri di più >'}</button>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                            <div className="col-12 col-lg-5 d-flex justify-items-start align-content-start" style={{position: 'relative'}}>
                                <div className="section-image-game">
                                    <Image className="d-none d-md-block floating-image" src="/imgs/gamification-nova.png" layout="fill"  alt="nova web agency"/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <WebGame />
        
        </>
    )

}

export default GamificationIntro


