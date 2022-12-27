
import Image from "next/image";
import { useEffect, useState } from "react";
import FadeIn from "../custom/FadeIn";
import FadeLeft from "../custom/FadeLeft";
import FadeRight from "../custom/FadeRight";
import Bouble from "../custom/Bouble";
import Footer from "../Footer";
import Card from "../custom/Card";
import Link from "next/link";
import ContattaComponent from "./../../components/sections/ContattaComponent";

const ServicesIntro = () => {

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
            <div className="row d-flex nova-section-service">
                    <div className="col-12 offset-md-1 col-md-10">
                        <div className="row">
                            <div className="col-12 d-flex-column justify-items-center align-content-center">
                                <h4 className="nova-muted size-16 weight-400 ms-3 text-uppercase text-center mt-0 mt-md-5">I nostri servizi</h4>
                                <h1 className="gradient-fill size-34 size-md-40 weight-700 ms-3 mt-4 text-center">La migliore soluzione IT per il tuo business</h1>
                                <p className="text-white size-16 weight-400 text-center mt-4">Scopri le nostre soluzioni più adatte alla tua azienda</p>
                                <div className="box-center">
                                    <Link href={'/contattaci'}>
                                        <button className="btn btn-nova-outline text-capitalize p-3 px-4 mt-3" type="submit">Richiedi una consulenza gratuita</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>                        
            </div>

            <div className="d-none d-md-block w-100 wave-004"></div>

            <div className="section-image translate-service-pupet">
                    <Image src='/imgs/3d_place_holder.png' width={500} height={500} className='floating-image' />
            </div>

            <div className="row nova-section-dark">
                <FadeIn delay={1}>
                    <div className="col-12 bg-nova-dark-service pt-5 mt-3">
                        <h5 className="card-title size-16 weight-400 text-center mt-0 text-uppercase text-gray pb-3 pb-md-0">COSA FACCIAMO</h5>
                        <h2 className="gradient-fill size-30 size-md-40 weight-700 text-center text-uppercase">Le nostre soluzioni</h2>
                        <div className="row">
                            <p className="col-12 col-md-8 mx-auto size-16 weight-400 text-center text-white lh-28 p-4 pt-0 mb-5">
                                Supportiamo aziende e professionisti nel loro processo di digitalizzazione
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>

            <div className="row nova-section-dark">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-md-1 col-md-8">
                                <FadeLeft delay={1}>
                                    <Bouble position="right" title="formazione" text="Scopri il corso di Nova42 per diventare  <span class='text-purple'>Full Stack Developer</span> in 3 mesi!" />
                                </FadeLeft>
                                <div className="d-flex justify-content-center justify-content-md-start">
                                    <FadeIn delay={2}>
                                        <Link href={'/corso'}>
                                            <button className="btn btn-nova-fill size-16 mx-auto" type="submit">{'Scopri il corso'}</button>
                                        </Link>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-block col-12 col-md-6 p-5">
                        <FadeRight delay={3}>
                          <img className="d-none d-md-block floating-image" src="/imgs/service-info.png"  alt="nova web agency" width={600} height={400}/>
                        </FadeRight>
                    </div>
                </div>
            </div>

            <div className="row nova-section-dark">
                <div className="row m-0">
                    <div className="col-12 col-md-6 p-2 p-md-5">
                        <FadeLeft delay={3}>
                            <img className="d-none d-md-block floating-image" src="/imgs/service-editor.png" width={600} height={400} alt="nova web agency"/>
                        </FadeLeft>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-md-1 col-md-8">
                                <FadeRight delay={2}>
                                    <Bouble position="left" title="sviluppo software su misura" text="Sviluppiamo software <span class='text-purple'>personalizzati</span> per aziende e professionisti." />
                                </FadeRight>
                                <div className="d-flex justify-content-center justify-content-md-start">
                                    <FadeIn delay={1}>
                                        <Link href={'/software-development'}>
                                            <button className="btn btn-nova-fill size-16 mx-auto" type="submit">{'Scopri di più'}</button>
                                        </Link>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row nova-section-dark">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <FadeLeft delay={2}>
                            <div className="col-12 col-md-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                                <div className="floated-image">
                                    <Image className="d-none d-md-block floating-image" src="/imgs/universe-nova.png" layout="fill"  alt="nova web agency"/>
                                </div>
                            </div>
                        </FadeLeft>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-md-1 col-md-8">
                                <FadeRight delay={2}>
                                    <Bouble position="left" title="TIME & MATERIAL" text="Sviluppiamo progetti IT a corpo o in modalità “Time and Material”, in house o nella sede dei nostri clienti." />
                                </FadeRight>
                                <div className="d-flex justify-content-center justify-content-md-start">
                                    <FadeIn delay={1}>
                                        <Link href={'/contattaci'}>
                                            <button className="btn btn-nova-fill size-16 mx-auto" type="submit">{'Contattaci'}</button>
                                        </Link>
                                    </FadeIn>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row nova-section-dark">
                <div className="row m-0">
                    <div className="col-12 offset-md-6 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-md-1 col-md-8">
                                <FadeRight delay={2}>
                                    <Bouble position="left" title="Blockchain" text="Progettiamo e sviluppiamo applicazioni blockchain per proteggere i dati della tua azienda e agevolarne l'innovazione attraverso i sistemi di sicurezza attualmente presenti sul mercato." />
                                </FadeRight>
                                <div className="d-flex justify-content-center justify-content-md-start">
                                    <FadeIn delay={1}>
                                        <Link href={'/blockchain'}>
                                            <button className="btn btn-nova-fill size-16 mx-auto" type="submit">{'Scopri di più'}</button>
                                        </Link>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row nova-section-dark">
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
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-md-1 col-md-8">
                                <FadeRight delay={2}>
                                    <Bouble position="left" title="App development" text="Ti supportiamo nell'individuare all'interno dei tuoi processi aziendali le procedure da ottimizzare per la tua organizzazione e per i tuoi clienti, progettando e realizzando per te app integrate al tuo gestionale interno e alla tua struttura di impresa." />
                                </FadeRight>
                                <div className="d-flex justify-content-center justify-content-md-start">
                                    <FadeIn delay={1}>
                                        <Link href={'/app-development'}>
                                            <button className="btn btn-nova-fill size-16 mx-auto" type="submit">{'Scopri di più'}</button>
                                        </Link>
                                    </FadeIn>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row nova-section-dark">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-md-1 col-md-8">
                                <FadeLeft delay={2}>
                                    <Bouble position="right" title="Siti web" text="Sviluppiamo siti e web app su misura per aziende e professionisti. Creare il sito da codice ci consente di personalizzarlo al massimo e renderlo unico aumentando la brand awareness della tua azienda." />
                                </FadeLeft>
                                <div className="d-flex justify-content-center justify-content-md-start">
                                    <FadeIn delay={1}>
                                        <Link href={'/app-development'}>
                                            <button className="btn btn-nova-fill size-16 mx-auto" type="submit">{'Crea un sito spaziale'}</button>
                                        </Link>
                                    </FadeIn>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
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

            <div className="row nova-section-dark">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <FadeLeft delay={2}>
                            <div className="col-12 col-md-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                                <div className="floated-image">
                                    <Image className="d-none d-md-block floating-image" src="/imgs/ux-ui.png" layout="fill"  alt="nova web agency"/>
                                </div>
                            </div>
                        </FadeLeft>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-md-1 col-md-8">
                                <FadeRight delay={2}>
                                    <Bouble position="left" title="Ux/UI" text="Rendiamo il tuo sito inimitabile grazie ai nostri servizi di UX e UI." />
                                </FadeRight>
                                <div className="d-flex justify-content-center justify-content-md-start">
                                    <FadeIn delay={1}>
                                        <Link href={'/ux-ui'}>
                                            <button className="btn btn-nova-fill size-16 mx-auto" type="submit">{'Parlaci del tuo progetto'}</button>
                                        </Link>
                                    </FadeIn>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row bg-nova-dark-service">
                <div className="col-12 col-md-6 mx-auto p-5 p-md-0">
                    <ContattaComponent bg={'bg-nova-dark-service'}/>
                </div>
            </div>

            <Footer />

        </>
    )

}

export default ServicesIntro


