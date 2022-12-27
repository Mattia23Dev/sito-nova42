import Image from "next/image";
import { useEffect, useState } from "react";
import FadeIn from "../custom/FadeIn";
import FadeLeft from "../custom/FadeLeft";
import Link from "next/link";
import FadeRight from "../custom/FadeRight";
import Bouble from "../custom/Bouble";
import Footer from "../Footer";
import VisibleAt from "../custom/VisibleAt";
import Box from "../custom/Box";


const ChiSiamoSection = () => {

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
            <div className="row d-flex bg-nova-dark" >
                <div className="col-12 offset-md-1 col-md-10">
                    <div className="row mt-5">
                        <div className="col-12 d-flex-column justify-items-center align-content-center">
                            <h1 className="gradient-fill size-40 size-md-40 size-md-60 size-lg-100 weight-700 ms-3 mt-4 mb-0 text-center">Noi siamo <br/> Nova 42</h1>
                            <p className="text-white size-16 weight-400 text-center lh-lg p-5 p-md-4 p-lg-0 pb-0">La nostra mission è creare una community per fornire a <br/>
persone e aziende competenze e opportunità nel mondo IT</p>
                            <div className="box-center pb-5 pb-md-3">
                                <VisibleAt>
                                    <Link href="/servizi">
                                        <button className="btn btn-nova-outline text-capitalize p-3 px-4 mt-5" type="submit">scopri</button>
                                    </Link>
                                </VisibleAt>
                            </div>
                        </div>
                    </div>
                </div>                        
            </div>

            <div className="d-none d-md-block w-100 bg-nova-dark wave-002"></div>

            <div className="row bg-white">
                <FadeIn delay={1}>
                    <div className="col-12 bg-white my-3">
                        <h5 className="card-title size-16 weight-400 text-center mt-5 mt-md-0 text-uppercase text-gray pb-3 pb-md-2">Chi siamo</h5>
                        <h2 className="gradient-fill size-30 size-md-40 weight-700 text-center text-uppercase">I NOSTRI VALORI</h2>
                    </div>
                </FadeIn>
            </div>

            <div className="row bg-white pt-0 pt-md-2">
                <div className="row m-0">
                    <div className="col-12 col-md-6 mt-0 mt-md-5">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-md-1 col-md-8 mx-auto">
                                <FadeLeft delay={1}>
                                    <Box position="left" style="my-3" title="Innovazione" text="Il nostro focus è sulla creazione di una Community per dare a persone e aziende competenze nel settore IT." />
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-block col-12 col-md-6 p-5">
                        <FadeRight delay={2}>
                            <div className="col-12 col-md-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                                <div className="floated-image">
                                    <Image className="d-none d-md-block floating-image" src="/imgs/data-nova.png" layout="fill"  alt="nova web agency"/>
                                </div>
                            </div>
                        </FadeRight>
                    </div>
                </div>
            </div>

            <div className="row bg-white pt-0 pt-md-5">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <FadeLeft delay={2}>
                            <div className="col-12 col-md-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                                <div className="floated-image">
                                    <Image className="d-none d-md-block floating-image" src="/imgs/phone-nova.png" layout="fill"  alt="nova web agency"/>
                                </div>
                            </div>
                        </FadeLeft>
                    </div>
                    <div className="col-12 col-md-6 mt-0 mt-md-5">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-md-1 col-md-8 mx-auto">
                                <FadeRight delay={2}>
                                    <Box position="left" style="my-3" title="Cooperazione" text="Collaboriamo con Aziende e privati alla ricerca delle migliori soluzioni IT." />
                                </FadeRight>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row bg-white pt-0 pt-md-5">
                <div className="row m-0">
                    <div className="col-12 col-md-6 mt-0 mt-md-5">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-md-1 col-md-8 mx-auto">
                                <FadeRight delay={2}>
                                    <Box position="left" style="my-3" title="Crescita" text="Stiamo creando una community per fornire a persone e aziende competenze e opportunità nel mondo IT." />
                                </FadeRight>
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

            <div className="row bg-white">
                <FadeIn delay={1}>
                    <div className="col-12 bg-white pt-5 my-3">
                        <h5 className="card-title size-16 weight-400 text-center mt-0 text-uppercase text-gray pb-3 pb-md-2">NOVA 42</h5>
                        <h2 className="gradient-fill size-30 size-md-40 weight-700 text-center text-uppercase">CHI SIAMO</h2>
                    </div>
                </FadeIn>
            </div>

            <div className="row bg-white pt-0 pt-md-5">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <FadeLeft delay={2}>
                            <div className="col-12 col-md-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                                <div className="floated-image">
                                    <Image className="d-none d-md-block floating-image" src="/imgs/3d_place_holder.png" layout="fill"  alt="nova web agency"/>
                                </div>
                            </div>
                        </FadeLeft>
                    </div>
                    <div className="col-12 col-md-6 mt-0 mt-md-5">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-md-1 col-md-8 mx-auto">
                                <FadeRight delay={2}>
                                    <Box position="left" style="my-3" title="Nova 42" text="Startup informatica che ha l'obiettivo di creare una community per fornire a persone e aziende competenze e opportunità nel mondo IT." />
                                </FadeRight>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row bg-white bg-md-white-none py-3 pt-5">
                <div className="col-10 mx-auto">
                    <FadeIn delay={2}>
                        <h3 className="gradient-fill size-34 size-md-40 weight-700 text-center py-3">Inizia ora il tuo progetto</h3>
                        <p className="size-16 weight-400 text-center py-2">
                        Raccontaci il tuo progetto siamo felici di aiutarti a realizzarlo
                        </p>
                        <div className="box-center">
                            <VisibleAt>
                                <Link href="/contattaci">
                                    <button className="btn btn-nova-fill size-16" type="submit">{'Contattaci'}</button>
                                </Link>
                            </VisibleAt>
                        </div>
                    </FadeIn>
                </div>
            </div>
            
            <Footer />


            
        </>
    )

}

export default ChiSiamoSection


