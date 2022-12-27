
import Image from "next/image";
import FadeLeft from "../custom/FadeLeft";
import FadeIn from "../custom/FadeIn";
import FadeRight from "../custom/FadeRight";
import Box from "../custom/Box";
import SingleBouble from "../custom/SingleBouble";
import Footer from "../Footer";
import Link from "next/link";

const SitoWebIntro = () => {

    return (
        <div className="bg-nova-dark-service">
            <div className="row d-flex nova-section-default">
                <div className="col-12 offset-md-1 col-md-10">
                    <div className="row">
                        <div className="col-12 d-flex-column justify-items-center align-content-center">
                            <h4 className="nova-muted size-16 weight-400 ms-3 text-center mt-0 mt-md-5">https://www...</h4>
                            <h1 className="gradient-fill size-34 size-md-40 weight-700 ms-3 mt-4 text-center">Il tuo sito web? Ci pensiamo noi.</h1>
                            <p className="text-white size-16 weight-400 text-center mt-4">Che sia un sito web vetrina per la tua azienda o il tuo nuovo progetto, <br/> Nova42 ti aiuta a realizzarlo</p>
                            <div className="box-center">
                                <Link href={'/contattaci'}>
                                    <button className="btn btn-nova-outline text-capitalize p-3 px-4 mt-3" type="submit">Richiedi una consulenza gratuita</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>                        
            </div>

            <div className="row nova-section-dark pt-0">
                <div className="row p-2 p-md-5 m-0">
                    <div className="col-12 col-md-8  mx-auto">
                        <div className="d-flex flex-column justify-center mx-auto">
                            <FadeIn delay={1}>
                                <Image src='/imgs/editor-web-site.png' width={800} height={500} objectFit={'cover'} />
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row nova-section-dark pt-0">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <FadeLeft delay={2}>
                            <div className="header-message">
                                <h3 className="size-16 weight-400 text-start"><span className="color-access-blue">Nova42</span><span className="color-access-gray">&frasl;&frasl;  servizi/development</span></h3>
                            </div>
                            <Box position="left" style="mt-1" title="Responsive" text="Realizziamo siti web in grado di adattarsi graficamente in modo automatico al dispositivo coi quali vengono visualizzati." />
                        </FadeLeft>
                    </div>
                    <div className="col-12 col-md-6">
                        <FadeRight delay={3}>
                            <div className="header-message">
                                <h3 className="size-16 weight-400 text-start"><span className="color-access-blue">Nova42</span><span className="color-access-gray">&frasl;&frasl;  servizi/development</span></h3>
                            </div>
                            <Box position="left" style="mt-1" title="UX/UI" text="Quriamo la UX/UI del tuo sito." />
                        </FadeRight>
                    </div>
                </div>
            </div>

            <div className="row min-100-px nova-section-dark mt-5 pt-md-0">
                <div className="row m-0">
                    <div className="col-12 offset-md-1 col-md-10">
                        <div className="row bg-nova-dark-service">
                            <div className="col-12 d-flex-column justify-items-center align-content-center">
                                <h4 className="nova-muted size-16 weight-400 ms-3 text-uppercase text-center mt-0 mt-md-5">COSA FACCIAMO</h4>
                                <h1 className="gradient-fill size-30 size-md-40 weight-700 ms-3 mt-3 text-center">Di cosa ci occupiamo</h1>
                                <p className="py-3"></p>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
            
            <div className="row nova-image-code pt-0">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 subtitle-candidati">
                                <FadeLeft delay={1}>
                                    <SingleBouble title='Front-end' text='Curiamo la parte visibile del tuo sito web' />
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6"></div>
                </div>
                <div className="row m-0">
                    <div className="col-12 col-md-6"></div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 subtitle-candidati">
                                <FadeRight delay={1}>
                                    <SingleBouble title='Back-end' text='Ci occupiamo di tutto ciò che riguarda il “dietro le quinte” del tuo sito' />
                                </FadeRight>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 subtitle-candidati">
                                <FadeLeft delay={1}>
                                    <SingleBouble title='SEO' text='Gestione SEO delle tue pagine web e dei tuoi progetti online' />
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6"></div>
                </div>
            </div>

            <div className="d-none d-lg-block row d-flex nova-section-curve-candidati"></div>

            <div className="row nova-section-dark-dynamic pt-0">
                <div className="row m-0 pb-5">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 subtitle-candidati">
                                <FadeLeft delay={1}>
                                    <SingleBouble title='il tuo sito su misura' text='Sviluppiamo il tuo sito da codice, questo ci permette di personalizzarlo il più possibile' />
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                    <div className="d-block col-12 col-md-6">
                        <FadeRight delay={2}>
                            <div className="col-12 justify-items-center align-content-center" style={{position: 'relative'}}>
                                <Image src='/imgs/coding-web-site.png' width={800} height={500} objectFit={'cover'} />
                            </div>
                        </FadeRight>
                    </div>
                </div>
            </div>

            <div className="d-none d-lg-block row d-flex nova-section-curve-candidati-white less-10"></div>

            <div className="row bg-white pt-0 less-1 pb-5">
                <div className="col-12 offset-md-1 col-md-10">
                    <div className="row bg-white order-2 order-lg-1">
                        <div className="col-12 col-md-6 mx-auto d-flex-column justify-items-center align-content-center p-4">
                            <h4 className="nova-muted size-16 weight-400 ms-3 text-uppercase text-center mt-3 mt-md-5">CONTATTACI</h4>
                            <h1 className="gradient-fill size-30 size-md-40 weight-700 ms-3 mt-4 text-center">Prenota la tua consulenza Gratuita</h1>
                            <p className="text-nova-dark size-16 weight-400 text-center mt-3">Che sia un sito web vetrina per la tua azienda o il tuo nuovo progetto, <br/> Nova42 ti aiuta a realizzarlo</p>
                            <Link href={'/contattaci'}>
                                    <button className="d-block btn btn-nova-fill mx-auto" type="submit">{'Contattaci'}</button>
                            </Link>
                        </div>
                    </div>
                </div>      
            </div>

            <Footer bg={'bg-white'}/>

        </div>
    )
}

export default SitoWebIntro


