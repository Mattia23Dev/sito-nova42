
import Image from "next/image";
import { useEffect, useState } from "react";
import FadeLeft from "../custom/FadeLeft";
import FadeRight from "../custom/FadeRight";
import FadeIn from "../custom/FadeIn";
import Link from "next/link";
import Footer from "../Footer";

const AppIntro = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    const phone001 = '/imgs/phone-001.png';
    const phone002 = '/imgs/phone-002.png';
    const phone003 = '/imgs/phone-003.png';
    const phone004 = '/imgs/phone-004.png';
    const phone005 = '/imgs/phone-005.png';

    const [phoneImage, setPhoneImage] = useState('/imgs/phone-001.png');
    const [viewFixed, setViewFixed] = useState(true);

    const check = (el,setStep,image,isFixed) =>{

        if (!el) return;    

        const {x,y} = el.getBoundingClientRect()

        if(y > 0 && y < innerHeight/2){
            setStep(image)
            setViewFixed(isFixed);
        }

    }
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <>
            {/* DESKTOP */}
            <div className="d-none d-md-block bg-nova-dark">
                <div className={`view-container`}  style={ viewFixed ? {animation: 'move-phone-down 1s alternate forwards'} : {animation: 'move-phone-up 1s alternate forwards'} }>

                    <div className="phone-frame-back">
                        <Image src={phoneImage} layout="fill"/>
                    </div>

                    <div className="phone-frame">
                        <Image src='/imgs/phone-frame.png' layout="fill"/>
                    </div>

                </div>

                <div className="view-row p-5" ref={(el)=>{check(el,setPhoneImage,phone001,true);}}>
                    <div className="d-none d-lg-block d-none d-lg-block col-3 offset-lg-1">
                        <div className="d-flex flex-column justify-content-center align-content-center text-center text-md-start">
                            <FadeLeft delay={2}>
                                <h3 className="size-36 card-title mb-3">Analisi</h3>
                                <p className="section-description">
                                    Ti supportiamo nell&apos;individuare <br/>
                                    all&apos;interno dei tuoi processi aziendali  <br/>
                                    le procedure da ottimizzare per la  <br/>
                                    tua organizzazione e per i tuoi clienti. 
                                </p>
                            </FadeLeft>
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-4"></div>
                    <div className="d-none d-lg-block col-3 offset-lg-1">
                        <div className="d-flex flex-column justify-content-center align-content-center text-center text-md-start">
                        </div>
                    </div>
                </div>

                <div className="view-row p-5" ref={(el)=>{check(el,setPhoneImage,phone002,true);}}>
                    <div className="d-none d-lg-block col-3 offset-lg-1">
                    
                    </div>
                    <div className="d-none d-lg-block col-4"></div>
                    <div className="d-none d-lg-block col-3 offset-lg-1">
                        <div className="d-flex flex-column justify-content-center align-content-center text-center text-md-start">
                            <FadeRight delay={2}>
                                <h3 className="size-36 card-title mb-3">Progettazione</h3>
                                <p className="section-description">
                                    Progettiamo e realizziamo la tua app <br/>
                                    da zero e/o integrata al tuo gestionale <br/>
                                    interno e alla tua struttura di impresa.
                                </p>
                            </FadeRight>
                        </div>
                    </div>
                </div>

                <div className="view-row p-5" ref={(el)=>{check(el,setPhoneImage,phone003,true);}}>
                    <div className="d-none d-lg-block col-3 offset-lg-1">
                        <div className="d-flex flex-column justify-content-center align-content-center text-center text-md-start">
                            <FadeLeft delay={3}>
                                <h3 className="size-36 card-title mb-3">Test</h3>
                                <p className="section-description">
                                    Eseguiamo tutti i test necessari prima del rilascio
                                </p>
                            </FadeLeft>
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-4"></div>
                    <div className="d-none d-lg-block col-3 offset-lg-1">
                    </div>
                </div>

                <div className="view-row p-5" ref={(el)=>{check(el,setPhoneImage,phone004,true);}}>
                    <div className="d-none d-lg-block col-3 offset-lg-1">
                        <div className="d-flex flex-column justify-content-center align-content-center text-center text-md-start"></div>
                    </div>
                    <div className="d-none d-lg-block col-4"></div>
                    <div className="d-none d-lg-block col-3 offset-lg-1">
                        <FadeRight delay={2}>
                            <h3 className="size-36 card-title mb-3">Rilascio</h3>
                            <p className="section-description">
                                Consegna e successiva manutenzione
                            </p>
                        </FadeRight>
                    </div>
                </div>

                <div className="view-row p-5">
                    <div className="d-none d-lg-block col-3 offset-lg-1">
                        <div className="d-flex flex-column justify-content-center align-content-center text-center text-md-start"></div>
                    </div>
                    <div className="d-none d-lg-block col-4"></div>
                    <div className="d-none d-lg-block col-3 offset-lg-1"> </div>
                </div>

                <div className="view-row-15 p-5" ref={(el)=>{check(el,setPhoneImage,phone005,false);}}>
                    
                </div>

                <div className="row bg-white mt-5">
                    <FadeIn delay={1}>
                        <div className="row">
                            <div className="col-12 col-md-8 p-4">
                                <h2 className="gradient-fill size-36 size-md-40 weight-700 ms-3 mt-4 text-center text-md-left">Prenota una consulenza Gratuita</h2>
                                    <p className="size-16 weight-400 text-center text-md-left text-dark lh-28 ms-3 mb-5">
                                        Il nostro team, ti accompagna nella creazione del software per la tua attività.
                                    </p>
                            </div>
                            <div className="d-flex col-12 col-md-4 p-3">
                                <div className="row align-content-center d-flex justify-center mx-auto">
                                    <Link href={'/contattaci'}>
                                        <button className="d-block btn btn-nova-fill mx-auto" type="submit">{'Contattaci'}</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <Footer bg={'bg-nova-dark-service'}/>

            </div>

            {/* MOBILE */}
            <div className="d-block d-md-none bg-nova-dark">


                <div className="view-row px-5 py-0">

                    <div className="centered">
                        <div className={``}  style={ viewFixed ? {animation: 'move-phone-down 1s alternate forwards'} : {animation: 'move-phone-left 1s alternate forwards'} }>
                            <div className="phone-frame-back-mobile">
                                <Image src={phone001} layout="fill"/>
                            </div>
                            <div className="phone-frame-mobile">
                                <Image src='/imgs/phone-frame.png' layout="fill"/>
                            </div>
                        </div>
                    </div>
                
                </div>

                <div className="view-row-10 p-5 translate-y-less-10">
                    <div className="d-block col-12">
                        <div className="d-flex flex-column justify-content-center align-content-center text-center text-md-start">
                            <FadeLeft delay={2}>
                                <h3 className="size-36 text-center card-title mb-3">Analisi</h3>
                                <p className="section-description text-center">
                                    Ti supportiamo nell&apos;individuare <br/>
                                    all&apos;interno dei tuoi processi aziendali  <br/>
                                    le procedure da ottimizzare per la  <br/>
                                    tua organizzazione e per i tuoi clienti. 
                                </p>
                            </FadeLeft>
                        </div>
                    </div>
                </div>

                <div className="view-row px-5 py-0">
                    <div className="centered">
                        <div className={``}  style={ viewFixed ? {animation: 'move-phone-down 1s alternate forwards'} : {animation: 'move-phone-left 1s alternate forwards'} }>
                            <div className="phone-frame-back-mobile">
                                <Image src={phone002} layout="fill"/>
                            </div>
                            <div className="phone-frame-mobile">
                                <Image src='/imgs/phone-frame.png' layout="fill"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="view-row-5 p-5 translate-y-less-10">
                    <div className="d-block col-12">
                        <div className="d-flex flex-column justify-content-center align-content-center text-center text-md-start">
                            <FadeRight delay={2}>
                                <h3 className="size-36 text-center card-title mb-3">Progettazione</h3>
                                <p className="section-description text-center">
                                    Progettiamo e realizziamo la tua app <br/>
                                    da zero e/o integrata al tuo gestionale <br/>
                                    interno e alla tua struttura di impresa.
                                </p>
                            </FadeRight>
                        </div>
                    </div>
                </div>

                <div className="view-row px-5 py-0">
                    <div className="centered">
                        <div className={``}  style={ viewFixed ? {animation: 'move-phone-down 1s alternate forwards'} : {animation: 'move-phone-left 1s alternate forwards'} }>
                            <div className="phone-frame-back-mobile">
                                <Image src={phone003} layout="fill"/>
                            </div>
                            <div className="phone-frame-mobile">
                                <Image src='/imgs/phone-frame.png' layout="fill"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="view-row-5 p-5 translate-y-less-10">
                    <div className="d-block col-12">
                        <div className="d-flex flex-column justify-content-center align-content-center text-center text-md-start">
                            <FadeLeft delay={3}>
                                <h3 className="size-36 text-center card-title mb-3">Test</h3>
                                <p className="section-description text-center">
                                    Eseguiamo tutti i test necessari prima del rilascio
                                </p>
                            </FadeLeft>
                        </div>
                    </div>
                </div>

                <div className="view-row px-5 py-0">
                    <div className="centered">
                        <div className={``}  style={ viewFixed ? {animation: 'move-phone-down 1s alternate forwards'} : {animation: 'move-phone-left 1s alternate forwards'} }>
                            <div className="phone-frame-back-mobile">
                                <Image src={phone004} layout="fill"/>
                            </div>
                            <div className="phone-frame-mobile">
                                <Image src='/imgs/phone-frame.png' layout="fill"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="view-row-5 p-5 translate-y-less-10">
                    <div className="d-none d-lg-block col-3 offset-lg-1">
                        <div className="d-flex flex-column justify-content-center align-content-center text-center text-md-start"></div>
                    </div>
                    <div className="d-none d-lg-block col-4"></div>
                    <div className="d-flex flex-column justify-content-center align-content-center text-center text-md-start">
                        <FadeRight delay={2}>
                            <h3 className="size-36 text-center card-title mb-3">Rilascio</h3>
                            <p className="section-description text-center">
                                Consegna e successiva manutenzione
                            </p>
                        </FadeRight>
                    </div>
                </div>

                <div className="view-row px-5 py-0">
                    <div className="centered">
                        <div className={``}  style={ viewFixed ? {animation: 'move-phone-down 1s alternate forwards'} : {animation: 'move-phone-left 1s alternate forwards'} }>
                            <div className="phone-frame-back-mobile">
                                <Image src={phone005} layout="fill"/>
                            </div>
                            <div className="phone-frame-mobile">
                                <Image src='/imgs/phone-frame.png' layout="fill"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row bg-white">
                    <FadeIn delay={1}>
                        <div className="row">
                            <div className="col-12 col-md-8 p-4">
                                <h2 className="gradient-fill size-36 size-md-40 weight-700 ms-3 mt-4 text-center text-md-left">Prenota una consulenza Gratuita</h2>
                                    <p className="size-16 weight-400 text-center text-md-left text-dark lh-28 ms-3 mb-3 mb-md-5">
                                        Il nostro team, ti accompagna nella creazione del software per la tua attività.
                                    </p>
                            </div>
                            <div className="d-flex col-12 col-md-4 p-3">
                                <div className="row align-content-center d-flex justify-center mx-auto pb-5">
                                    <Link href={'/contattaci'}>
                                        <button className="d-block btn btn-nova-fill mx-auto" type="submit">{'Contattaci'}</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <Footer bg={'bg-nova-dark-service'}/>

            </div>
        </>
    )

}

export default AppIntro


