
import Image from "next/image";
import FadeLeft from "../custom/FadeLeft";
import FadeRight from "../custom/FadeRight";
import FadeIn from "../custom/FadeIn";
import Footer from "../Footer";
import Link from "next/link";

const UxUiIntro = () => {

    return (

        <div className="bg-nova-dark-service">

            <div className="row d-flex nova-section-candidati">
                <div className="col-12 offset-md-1 col-md-10">
                    <div className="row">
                        <div className="col-12 d-flex-column justify-items-center align-content-center">
                            <h4 className="nova-muted size-16 weight-400 ms-3 text-uppercase text-center mt-0 mt-md-5">UX UI</h4>
                            <h1 className="gradient-fill size-34 size-md-40 weight-700 ms-3 mt-4 text-center">Il miglior look per il tuo sito</h1>
                            <p className="text-white size-16 weight-400 text-center mt-4">Rendiamo unica l&apos;esperienza di navigazione dei tuoi utenti</p>
                            <div className="box-center">
                                <Link href={'/contattaci'}>
                                    <button className="btn btn-nova-outline text-capitalize p-3 px-4 mt-3 bg-nova" type="submit">Richiedi una consulenza gratuita</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>                        
            </div>

            <div className="row nova-section-dark">
                <FadeIn delay={1}>
                    <div className="col-12 bg-nova-dark-service pt-2 pt-md-5 mt-2 mt-md-3">
                        <h2 className="gradient-fill size-30 size-md-40 weight-700 text-center">Vuoi una pagina web unica?</h2>
                        <div className="row">
                            <p className="col-12 col-md-8 mx-auto size-16 weight-400 text-center text-white lh-28 p-4 mb-5">
                                Grazie ai nostri servizi di user experience e user interface realizziamo il tuo sito da zero o ne facciamo un restyling 
                                per permettere ai tuoi utenti di vivere un&apos;esperienza di navigazione indimenticabile
                            </p>
                        </div>
                    </div>
                </FadeIn>
                <div className="w-100 mt-4 pb-5">
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-12 col-md-4 box-center pb-5 pb-lg-0">
                                    <FadeLeft delay={2}>
                                        <Image src='/imgs/progetto-ux-ui.png' width={256} height={175} />
                                    </FadeLeft>
                                </div>
                                <div className="col-12 col-md-4 box-center pb-5 pb-lg-0">
                                    <FadeIn delay={1}>
                                        <Image src='/imgs/sviluppo-ui.png' width={256} height={175} />
                                    </FadeIn>
                                </div>
                                <div className="col-12 col-md-4 box-center pb-5 pb-lg-0">
                                    <FadeRight delay={3}>
                                        <Image src='/imgs/analisi-ux.png' width={256} height={175} />
                                    </FadeRight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-8 col-lg-8 mx-auto">
                    <div className="row">
                        <div className="col-12 col-lg-4 nova-left-curve d-none d-lg-block"></div>
                        <div className="d-none d-md-block col-12 col-lg-4 nova-center-curve">
                            <FadeIn delay={2}>
                                <h2 className="gradient-fill size-36 size-md-40 weight-700 ms-3 mt-4 text-center ux-ui-center">Ux - Ui</h2>
                            </FadeIn>
                        </div>
                        <div className="d-block d-md-none col-12 col-lg-4">
                            <FadeIn delay={2}>
                                <h2 className="gradient-fill size-36 size-md-40 weight-700 text-center">Ux - Ui</h2>
                            </FadeIn>
                        </div>
                        <div className="col-12 col-lg-4 nova-right-curve d-none d-lg-block"></div>
                    </div>
                </div>
            </div>

            <div className="row nova-section-dark pt-0">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 subtitle-candidati">
                                <FadeLeft delay={1}>
                                    <div className="row">
                                        <div className="col-12 d-flex-column justify-items-center align-content-center p-4 bg-nova-dark-service">
                                            <h4 className="nova-muted size-16 weight-400 ms-3 text-uppercase text-center text-md-start mt-5">Fase 1</h4>
                                            <h1 className="gradient-fill size-30 size-md-40 weight-700 ms-3 mt-4 text-center text-md-start">Analisi</h1>
                                            <p className="text-white size-16 weight-400 ms-3 mt-4 text-center text-md-start">Capiamo quali sono i tuoi obiettivi e analizziamo l’utente tipo a cui ti rivolgi</p>
                                        </div>
                                    </div>
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pb-5 pb-md-0">
                        <FadeRight delay={3}>
                            <div className="d-flex flex-column justify-center col-12 col-md-6 order-2 order-lg-1 relative box-image bg-nova-dark">
                                <Image src="/imgs/ux-ui-group.png" layout="fill"  objectFit="contain" alt="nova web agency"/>
                            </div>
                        </FadeRight>
                    </div>
                </div>
            </div>

            <div className="d-none d-md-block w-100 bg-nova-dark-service pt-5 wave-002"></div>

            <div className="row nova-section-light pt-0 less-1">
                <div className="row m-0">
                    <div className="d-none d-md-block col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 subtitle-candidati">
                                <FadeRight delay={3}>
                                    <div className="d-flex flex-column justify-center col-12 col-md-6 order-2 order-lg-1 relative box-image">
                                        <div className="col-12 col-md-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                                            <div className="section-image-course">
                                                <Image className="d-none d-md-block floating-image" src="/imgs/corso-web-developer.png" layout="fill"  alt="nova web agency"/>
                                            </div>
                                        </div>
                                    </div>
                                </FadeRight>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 subtitle-candidati">
                                <FadeLeft delay={1}>
                                    <div className="row">
                                        <div className="col-12 d-flex-column justify-items-center align-content-center p-4 bg-white">
                                            <h4 className="nova-muted size-16 weight-400 ms-3 text-uppercase text-center text-md-start mt-5">Fase 2</h4>
                                            <h1 className="gradient-fill size-30 size-md-40 weight-700 ms-3 mt-4 text-center text-md-start">Dal codice al design</h1>
                                            <p className="text-nova-dark size-16 weight-400 ms-3 mt-4 text-center text-md-start">Creiamo il tuo sito da zero o ne facciamo un restyling per unire praticità e design, così il tuo sito sarà inimitabile</p>
                                        </div>
                                    </div>
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row bg-white pt-0 less-1 pb-5">
                <div className="col-12 offset-md-1 col-md-10">
                    <div className="row bg-white order-2 order-lg-1">
                        <div className="col-12 col-md-6 mx-auto d-flex-column justify-items-center align-content-center p-4">
                            <h4 className="nova-muted size-16 weight-400 ms-3 text-uppercase text-center mt-0 mt-md-5">CONTATTACI</h4>
                            <h1 className="gradient-fill size-30 size-md-40 weight-700 ms-3 mt-4 text-center">Inizia ora il tuo progetto</h1>
                            <p className="text-nova-dark size-16 weight-400 text-center mt-3">Che sia un sito web vetrina per la tua azienda o il tuo nuovo progetto, Nova42 ti aiuta a realizzarlo</p>
                            <Link href={'/contattaci'}>
                                    <button className="d-block btn btn-nova-fill mx-auto" type="submit">{'Contattaci'}</button>
                            </Link>
                        </div>
                    </div>
                    <FadeRight delay={3}>
                        <div className="d-flex flex-column justify-center col-12 col-md-6 order-2 order-lg-1 relative box-image translate-box-right">
                            <div className="col-12 col-md-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                                <div className="section-image-course">
                                    <Image className="d-none d-md-block floating-image" src="/imgs/come-funziona-nova.png" layout="fill"  alt="nova web agency"/>
                                </div>
                            </div>
                        </div>
                    </FadeRight>
                </div>      
            </div>

            <Footer />


        </div>
    )

}

export default UxUiIntro