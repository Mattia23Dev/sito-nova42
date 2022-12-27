
import Image from "next/image";
import { useEffect, useState } from "react";
import FadeIn from "../custom/FadeIn";
import FadeLeft from "../custom/FadeLeft";
import FadeRight from "../custom/FadeRight";
import Link from "next/link";
import Footer from "../Footer";

const BlockChainIntro = () => {

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

        <div className="bg-nova-dark-service">
            <div className="row d-flex nova-section-blockchain">
                <FadeIn delay={1}>
                    <div className="col-12 offset-md-1 col-md-10">
                        <div className="row">
                            <div className="col-12 d-flex-column justify-items-center align-content-center">
                                <h4 className="nova-muted size-16 weight-400 ms-3 text-uppercase text-center mt-0 mt-md-5">BLOCKCHAIN</h4>
                                <h1 className="gradient-fill size-34 size-md-40 weight-700 ms-3 mt-4 text-center">Sfrutta la Blockchain per la tua azienda</h1>
                                <p className="text-white size-16 weight-400 text-center mt-4">Sviluppiamo applicazioni in blockchain per la tua azienda</p>
                                <div className="box-center">
                                    <Link href={'/contattaci'}>
                                        <button className="btn btn-nova-outline text-capitalize p-3 px-4 mt-3 bg-nova-dark-service" type="submit">Richiedi una consulenza gratuita</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>   
                </FadeIn>                     
            </div>

            <div className="d-none d-lg-block row d-flex nova-section-curve-candidati"></div>

            <div className="row nova-section-dark-dynamic pt-0">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 offset-xl-4 col-xl-8 subtitle-candidati">
                                <FadeLeft delay={1}>
                                    <h2 className="gradient-fill size-36 size-md-40 weight-700 ms-3 mt-4 text-center text-md-left">Sicurezza</h2>
                                    <p className="text-white size-16 weight-400 text-center mt-4">Realizziamo applicazioni blockchain per proteggere i dati della tua azienda</p>
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <FadeLeft delay={2}>
                            <div className="col-12 col-md-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                                <div className="floated-image">
                                    <Image className="d-none d-md-block floating-image" src="/imgs/universe-nova.png" layout="fill"  alt="nova web agency"/>
                                </div>
                            </div>
                        </FadeLeft>
                    </div>
                </div>
            </div>

            <div className="row nova-section-dark-dynamic pt-0">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <FadeLeft delay={2}>
                            <div className="col-12 col-md-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                                <div className="floated-image">
                                    <Image className="d-none d-md-block floating-image" src="/imgs/nova-portal.png" layout="fill"  alt="nova web agency"/>
                                </div>
                            </div>
                        </FadeLeft>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row m-0">
                            <div className="d-flex flex-column justify-center col-12 col-md-8 col-lg-10 mx-auto subtitle-candidati">
                                <FadeLeft delay={1}>
                                    <h2 className="gradient-fill size-36 size-md-40 weight-700 ms-3 mt-4 text-center text-md-left">Innovazione</h2>
                                    <p className="text-white size-16 weight-400 text-center mt-4">Scrittura personalizzata di smart contracts per l&apos;esecuzione di applicazioni blockchain </p>
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row nova-section-dark-dynamic py-5">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 offset-xl-4 col-xl-8 subtitle-candidati">
                                <FadeLeft delay={1}>
                                    <h2 className="gradient-fill size-36 size-md-40 weight-700 ms-3 mt-0 mt-md-4 text-center text-md-left">Decentralizzazione</h2>
                                    <p className="text-white size-16 weight-400 text-center mt-4">Nessuno può alterare le operazioni e l&apos;archivio dei tuoi dati</p>
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-block col-12 col-md-6">
                        <FadeLeft delay={2}>
                            <div className="col-12 col-md-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                                <div className="floated-image">
                                    <Image className="d-none d-md-block floating-image" src="/imgs/phone-nova.png" layout="fill"  alt="nova web agency"/>
                                </div>
                            </div>
                        </FadeLeft>
                    </div>
                </div>
            </div>

            <div className="d-none d-lg-block row d-flex nova-section-curve-candidati-2"></div>

            <div className="col-12 offset-md-1 col-md-10">
                <div className="row m-0">
                    <div className="col-12 d-flex-column justify-items-center align-content-center pb-5 pb-md-0">
                        <h1 className="gradient-fill size-30 size-md-40 weight-700 ms-3 mt-0 mt-md-4 text-center">InNova</h1>
                        <p className="text-white size-16 weight-400 text-center mt-3">InNova la tua azienda attraverso la Blockchain</p>
                    </div>
                </div>
            </div> 

            <div className="d-none d-md-block w-100 bg-nova-dark-service pt-5 wave-002"></div>

            <div className="w-100 bg-white less-1">
                <div className="col-12 offset-md-1 col-md-11">
                    <div className="row row-nova m-0 p-3">
                        <div className="col-12 col-md-8 mb-5 order-1 order-1 order-lg-1">
                            <FadeLeft delay={2}>
                                <h4 className="gradient-fill size-30 size-md-40 weight-700 mt-5 mb-3 text-center text-md-start">La Blockchain al tuo servizio</h4>
                                <h5 className="text-dark size-16 weight-400 mt-2 lh-35">Sviluppiamo app blockchain per proteggere i dati della tua azienda e agevolarne l&apos;innovazione attraverso i sistemi di sicurezza attualmente presenti sul mercato</h5>
                                <ul className="text-dark size-16 weight-400 mt-2 lh-35 checklist">
                                    <li>Innovazione e Sicurezza nella protezione dei tuoi dati</li>
                                    <li>Inalterabilità delle operazioni </li>
                                    <li>Interfacce grafiche di ultima generazione</li>
                                    <li>Scrittura di Smart Contracts</li>
                                    <li>Su misura per le specificità dei tuoi processi aziendali</li>
                                </ul>
                                <div className="d-flex justify-content-center justify-content-md-start mt-5 mt-md-3">
                                    <Link href={'/contattaci'}>
                                        <button className="d-block btn btn-nova-fill" type="submit">{'Contattaci'}</button>
                                    </Link>
                                </div>
                            </FadeLeft>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-items-center align-content-center order-2 order-lg-1" style={{position: 'relative'}}>
                            <FadeRight delay={1}>
                                <div className="section-image-course">
                                    <Image className="d-none d-md-block floating-image" src="/imgs/devben.png" layout="fill"  alt="nova web agency"/>
                                </div>
                            </FadeRight>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row bg-nova-dark">
                <FadeIn delay={1}>
                    <div className="row">
                        <div className="col-12 col-md-8 p-4">
                            <h2 className="gradient-fill size-36 size-md-40 weight-700 ms-3 mt-4 text-center text-md-left">Prenota una consulenza Gratuita</h2>
                            <p className="size-16 weight-400 text-center text-md-left text-white lh-28 ms-3 mb-5">
                                Il nostro team, ti accompagna nella creazione del software per la tua attività.
                            </p>
                        </div>
                        <div className="d-flex col-12 col-md-4 p-3 pb-5 pb-md-2">
                            <div className="row align-content-center d-flex justify-center mx-auto">
                                <Link href={'/contattaci'}>
                                    <button className="d-block btn btn-nova-fill mx-auto" type="submit">{'Contattaci'}</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>

            <Footer />

        </div>
    )

}

export default BlockChainIntro


