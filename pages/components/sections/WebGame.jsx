import FadeIn from "../custom/FadeIn";
import FadeLeft from "../custom/FadeLeft";
import FadeRight from "../custom/FadeRight";
import { useRouter } from 'next/router'
import Link from 'next/link';
import Footer from "../Footer";
import Image from "next/image";
import CodeBar from "../custom/CodeBar";
import { useState, useEffect } from "react";
import ScopriNovaLight from "../ScopriNovaLight";

const WebGame = () => {

    const [helmetPosition, setHelmetPosition] = useState({x:0,y:0});
    const [servicePosition, setservicePosition] = useState({x:0,y:0});

    const router = useRouter()

    const isVisible = (el) =>{
        if (!el) return;

        const { innerWidth: width, innerHeight: height } = window;
        const {x,y} = el.getBoundingClientRect()
        
        
        console.log(helmetPosition.y, ' ---- ',y)

        if(y == helmetPosition.y){

            //setservicePosition({x:x,y:y});

        }else{
           
        }
        
    }

    useEffect(()=>{
        
    },[helmetPosition]);


    return(
        <>
            <div id="gameInfo" className="d-none d-md-block w-100 wave-001 row">
                <div className="col-12 offset-md-1 col-md-11">
                    <h3 id="trail001" className="step-001 size-20 text-white weight-400">local/nova/website.html</h3>
                </div>
            </div>

            <div className="w-100 bg-nova-dark pb-5 pb-lg-0">
                <div className="col-12 offset-lg-1 col-lg-11 vertical-bar p-4 p-md-0">
                    <div className="row step-002">
                        <div className="col-12 col-md-10 col-lg-4 block-step-002 block-live">
                            <FadeLeft delay={3}>
                                <h4 className="size-22 text-purple weight-700 block-title">Interattiva</h4>
                                <p className="size-16 text-white weight-400 lh-35 mt-3">
                                    Ottieni feedback istantanei,
                                    apprendi velocmente le basi della programmazione e mettiti alla prova 
                                    per superare livelli e ottenere premi.
                                    Programmare non sarà più solo roba da nerd.
                                </p>
                            </FadeLeft>
                        </div>
                        <div className="col-12 col-md-10 col-lg-4 block-step-002 block-nova">
                            <FadeIn delay={2}>
                                <h4 className="size-22 text-purple weight-700 block-title">Efficace</h4>
                                <p className="size-16 text-white weight-400 lh-35 mt-3">
                                    Le nostre piattaforme sono agili e student friendly, ti permettono di seguire il corso su qualsiasi device ed esercitarti divertendoti superando delle sfide a livelli.                               
                                </p>
                            </FadeIn>
                        </div>
                        <div className="col-12 col-md-10 col-lg-4 block-step-002 block-pro">
                            <FadeRight delay={3}>
                                <h4 className="size-22 text-purple weight-700 block-title">Agile</h4>
                                <p className="size-16 text-white weight-400 lh-35 mt-3">
                                    Puoi utilizzare la nostra app dove e quando vuoi, sia da smartphone che da pc. Ogni momento della giornata diventa un&apos;occasione per sviluppare le tue skill da programmatore. 
                                </p>
                            </FadeRight>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-none d-md-block w-100 bg-nova-dark pb-5 pb-lg-0">
                <div className="col-12 offset-md-1 col-md-11">
                    <h3 className=" block-bullet size-20 text-white weight-400 m-0">local/nova/scopri</h3>
                </div>
            </div>

            <div className="w-100 bg-nova-dark pt-0">
                <div className="col-12 mx-sx-auto offset-md-1 col-md-11 vertical-bar">
                    <div className="row row-nova pb-5 pb-lg-0">
                        <div className="col-12 col-md-4 text-white size-14 weight-200 lh-35 p-5 pt-0 p-md-4 mt-md-3">
                            <FadeLeft delay={1}>
                                <Image src='/imgs/svg/code-block.svg' width={338} height={295}/>
                            </FadeLeft>
                        </div>
                        <div className="mt-5 mt-md-0 col-11 mx-auto offset-md-1 col-md-7">
                            <FadeIn delay={2}>
                                <h4 className="gradient-fill size-30 size-md-40 weight-700">Divertiti a Programmare</h4>
                                <p className="size-16 text-white weight-400 lh-35 mt-3 text-start">
                                Affronta e supera sfide step by step per apprendere rapidamente le basi <br/>
                                della programmazione e mettiti in gioco con esercizi sempre più stimolanti. <br/>
                                Bastano pochi minuti al giorno!
                                </p>
                                <ol className="size-16 text-white weight-400 lh-35 mt-2 ol-bullet">
                                    <li>Unisciti alla Community</li>
                                    <li>Ottieni Premi e Vantaggi</li>
                                    <li>Partecipa ai nostri percorsi formativi e avvia la tua carriera da developer</li>
                                </ol>
                                <Link href="/candidati">
                                    <div className="d-flex justify-content-center justify-content-md-start mt-5 mt-md-2">
                                        <button className="btn btn-nova-fill size-16" type="submit">{'Candidati ora'}</button>   
                                    </div>     
                                </Link>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-none d-md-block  w-100 bg-nova-dark pb-5 pb-lg-0">
                <div className="col-12 offset-md-1 col-md-11">
                    <h3 className="block-bullet second-level size-20 text-white weight-400 mb-0">local/nova/dopo_il_corso</h3>
                </div>
            </div>

            <div className="w-100 bg-nova-dark">
                <div className="col-12 offset-md-1 col-md-11 vertical-bar-second-level">
                    <div className="margin-level">
                        <div className="row row-nova pb-5 pb-lg-0">
                            <div className="col-12 col-lg-9 code-bg-001">
                                <FadeIn delay={1}>
                                    <h4 className="gradient-fill size-30 size-md-40 weight-700">GAMIFICATION & MICROLEARNING</h4>
                                    <p className="d-none d-md-block size-16 text-white weight-400 lh-35 mt-3">
                                        Lo scopo del progetto è la creazione di una piattaforma per <br/>
                                        la community di Nova42, composta da appassionati del mondo digitale,<br/>
                                        studenti ed aspiranti sviluppatori, che unisce il microlearning ai principi <br/>
                                        della &apos;Gamification&apos;, per consentire a chiunque di esercitarsi con quiz e giochi <br/>
                                        di programmazione. In questo modo creiamo un sistema di apprendimento <br/>
                                        accattivante per facilitare la progressione di competenze informatiche <br/>
                                        tra i membri della nostra Community e non solo.
                                    </p>
                                    <p className="d-block d-md-none size-14 text-white weight-400 lh-35 mt-3 p-2">
                                        Lo scopo del progetto è la creazione di una piattaforma per
                                        la community di Nova42, composta da appassionati del mondo digitale,
                                        studenti ed aspiranti sviluppatori, che unisce il microlearning ai principi 
                                        della &apos;Gamification&apos;, per consentire a chiunque di esercitarsi con quiz e giochi 
                                        di programmazione. In questo modo creiamo un sistema di apprendimento
                                        accattivante per facilitare la progressione di competenze informatiche
                                        tra i membri della nostra Community e non solo.
                                    </p>
                                </FadeIn>
                            </div>
                            <div className="col-lg-2 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                                <div className="section-image-code-bg-001">
                                    <Image className="d-none d-md-block floating-image" src="/imgs/nova-academy-javascript.png" width={800} height={800} alt="nova web agency"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-none d-md-block w-100 bg-nova-dark pb-5 pb-lg-0">
                <div className="col-12 offset-md-1 col-md-11">
                    <h3 className="block-bullet second-level-row size-20 text-white weight-400 mb-0">local/nova/linguaggi</h3>
                </div>
            </div>

            <div className="w-100 bg-nova-dark">
                <div className="col-12 offset-md-1 col-md-11">
                    <div className="margin-level">
                        <div className="row row-nova m-0 pb-0 pb-md-5 pb-lg-0">
                            <div className="col-8 mx-auto col-md-4 z-index-9 order-2 order-md-1">
                                <CodeBar value={80} text={'Java'}/>
                                <CodeBar value={86} text={'Css'}/> 
                                <CodeBar value={75} text={'Html5 '}/>
                                <CodeBar value={60} text={'Javascript'}/>
                                <CodeBar value={90} text={'React'}/>
                            </div>
                            <div className="col-12 col-md-8 d-flex justify-items-center align-content-center order-1 order-md-2 p-4 p-md-auto" style={{position: 'relative'}}>
                                <FadeIn delay={2}>
                                    <h4 className="gradient-fill size-30 size-md-40 weight-700 text-center text-md-start">Aperta a Tutti</h4>
                                    <p className="size-16 text-white weight-400 lh-35 mt-3">
                                        La nostra piattaforma è versatile e abbraccia sia le esigenze <br/>
                                        di chi vuole solo divertirsi sia quelle di chi vuole avviare la propria <br/>
                                        carriera nel mondo della programmazione o è già un programmatore avviato <br/>
                                        e vuole dilettarsi con esercizi più complessi.<br/>
                                        Imparerai a programmare usando i linguaggi di programmazione  <br/>
                                        e le tecnologie più richieste dal mercato.
                                    </p>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 bg-nova-dark pt-5 pt-md-0" ref={(el)=>isVisible(el)}>
                <div className="col-12 offset-md-1 col-md-11 block-link"></div>
                <div className="row bg-white">
                    <FadeIn delay={1}>
                        <div className="row">
                            <div className="col-12 col-md-8 p-4">
                                <h2 className="gradient-fill size-36 size-md-40 weight-700 ms-3 mt-4 text-center text-md-start">Unisciti alla community di Nova42</h2>
                                    <p className="size-18 weight-400 text-center text-md-start lh-28 ms-3 mb-2 mb-md-5">
                                        Entra nel nostro canale discord per non perderti aggiornamenti e novità nel mondo dell&apos;informatica.
                                    </p>
                            </div>
                            <div className="d-flex col-12 col-md-4 p-3">
                                <div className="row align-content-center d-flex justify-center mx-auto mb-5 mb-md-0">
                                    <Link href={'/contattaci'}>
                                        <button className="d-block btn btn-nova-fill mx-auto" type="submit">{'Vai al Canale'}</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
                <div className="col-11 mx-auto">
                    <div className="row bg-nova-dark">
                        <div className="col-11 col-md-12 mx-auto mt-5">
                            <div className="d-flex flex-lg-row flex-column mt-4 space-evenly mb-5">
                                <FadeLeft delay={1}>
                                    <div className="nova-box-dark">
                                        <p className=""></p>
                                        <h5 className="text-white size-22 weight-700 mt-5 text-uppercase text-center">Versione Base</h5>
                                        <h3 className="text-white size-40 size-md-60 weight-700 mt-2 text-uppercase text-center">Free</h3>
                                        <p className="text-gray size-22 weight-700 mt-3 mt-md-5 text-uppercase text-left mt-5-rem">Cosa include?</p>
                                        <div className="h-250-px">
                                            <h6 className="checked size-14 size-md-22 weight-400 mt-2 text-left">Modalità avventura</h6>
                                            <h6 className="checked size-14 size-md-22 weight-400 mt-2 text-left">5 Vite</h6>
                                            <h6 className="checked size-14 size-md-22 weight-400 mt-2 text-left">Canale Discord</h6>
                                            <h6 className="unchecked size-14 size-md-22 weight-400 mt-2 text-left">Approfondimento aggiuntivo 1 mese</h6>
                                        </div>
                                    </div>
                                </FadeLeft>
                                <FadeRight delay={2}>
                                    <div className="nova-box-grey">
                                        <p className="nova-advise">Nova42 consiglia</p>
                                        <h5 className="text-white size-22 weight-700 mt-5 text-uppercase text-center">Versione</h5>
                                        <h3 className="text-white size-40 size-md-60 weight-700 mt-2 text-uppercase text-center">Premium</h3>
                                        <p className="text-gray size-22 weight-700 mt-3 mt-md-5 text-uppercase text-left mt-5-rem">Cosa include?</p>
                                        <div className="h-250-px">
                                            <h6 className="checked size-14 size-md-22 weight-400 mt-2 text-left">Modalità avventura</h6>
                                            <h6 className="checked size-14 size-md-22 weight-400 mt-2 text-left">Modalità MatchMaking</h6>
                                            <h6 className="checked size-14 size-md-22 weight-400 mt-2 text-left">Vite Infinite</h6>
                                            <h6 className="checked size-14 size-md-22 weight-400 mt-2 text-left">Canale Discord</h6>
                                            <h6 className="checked size-14 size-md-22 weight-400 mt-2 text-left">Sconti a Eventi e Percorsi Nova42</h6>
                                        </div>
                                    </div>
                                </FadeRight>
                            </div>
                        </div>
                    </div>
                    <div className="row bg-nova-dark">
                        <div className="col-10 col-md-12 mx-auto mt-5">
                            <div className="d-flex flex-column mt-4 space-between mb-5">
                                <h5 className="gradient-fill size-22 weight-700 text-center">Community</h5>
                                <h2 className="text-white size-30 size-md-40 weight-700 text-center">Unisciti alla Community Nova42 </h2>
                            </div>
                            <div className="row mt-2 space-between mb-5 px-1 px-md-5">
                                <FadeIn delay={3}>
                                    <div className="nova-section-grey p-3 p-md-5">
                                        <h5 className="text-gray size-16 weight-400 mt-2 text-uppercase text-center">Unisciti</h5>
                                        <h3 className="gradient-fill size-30 weight-700 mt-2 mb-4 text-uppercase text-center">Canale Discord</h3>
                                        <p className="text-white size-16 weight-400 mt-1 text-capitalize text-center">
                                            Unisciti alla Community! <br/>
                                            Ricevi contenuti gratuiti sul mondo tech e delle programmazione <br/>
                                            e resta aggiornato sull&apos;uscita dell&apos;app 
                                        </p>
                                        <Link href="/contattaci">
                                            <button className="d-block btn btn-nova-fill mx-auto mt-4 mb-4" type="submit">{'Entra nella community'}</button>            
                                        </Link>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-none d-md-block w-100 bg-nova-dark pt-5 wave-002"></div>

            <div className="w-100 row bg-white pb-5 m-0">

                <div className="w-100 bg-white pt-5">
                    <div className="col-12 offset-md-1 col-md-11 mb-5">
                        <div className="row row-nova">
                            <div className="col-12">
                                <FadeLeft delay={2}>
                                    <h4 className="gradient-fill size-30 size-md-40 weight-700 mt-2 mb-4 text-center text-md-start">Frequently Asked Questions</h4>
                                    <div className="gamification accordion accordion-flush col-12 col-md-10" id="accordionFlushExample">

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-001" aria-expanded="false" aria-controls="flush-collapseOne">
                                                L&apos;app è aperta a tutti o solo a programmatori?
                                            </button>
                                            </h2>
                                            <div id="flush-001" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    Aperta a tutti! Da chi vuole semplicemente svagarsi con giochi di programmazione a chi vuole capire se il mondo dell&asp;informatica fa per lui a chi ha già skill di coding e vuole testarle.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-002" aria-expanded="false" aria-controls="flush-collapseOne">
                                                L&apos;app è gratuita o a pagamento?
                                            </button>
                                            </h2>
                                            <div id="flush-002" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                                <div className="accordion-body">
                                                    L&apos;app è gratuita con possibilità di passare alla versione premium pagando un canone annuale per sbloccare vari vantaggi come vite illimitate, sconti sui nostri percorsi formativi, accesso alla modalità matchmaking e tanto altro.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-003" aria-expanded="false" aria-controls="flush-collapseOne">
                                                L&apos;app funziona solo da pc o anche da telefono?
                                            </button>
                                            </h2>
                                            <div id="flush-003" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                                <div className="accordion-body">
                                                    Abbiamo deciso di unire due mondi, quello del Microlearning processo per cui l&apos;oggetto di apprendimento viene frammentato in porzioni minime per favorirne lo studio e l&apos;assimilazione) e quello della Gamification per dar vita ad un sistema di apprendimento accattivante e snello che ti consente di imparare nozioni di programmazione in maniera rapida e divertente.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-004" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Che cos&apos;è il Microlearning? e cosa c&apos;entra con quest&apos;app?
                                            </button>
                                            </h2>
                                            <div id="flush-004" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                                <div className="accordion-body">
                                                    Abbiamo deciso di unire due mondi, quello del Microlearning (processo per cui l&apos;oggetto di apprendimento viene frammentato in porzioni minime per favorirne lo studio e l&apos;assimilazione) e quello della Gamification per dar vita ad un sistema di apprendimento accattivante e snello che ti consente di imparare nozioni di programmazione in maniera rapida e divertente.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-005" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Vengono rilasciati certificati al superamento degli esercizi?
                                            </button>
                                            </h2>
                                            <div id="flush-005" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                                <div className="accordion-body">
                                                Si, per ogni modulo completato ti rilasciamo un certificato, sempre in modalità gamification, dove attestiamo l&apos;avvenuto superamento del modulo stesso.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-006" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Avete anche un corso per programmatori?
                                            </button>
                                            </h2>
                                            <div id="flush-006" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                                <div className="accordion-body">
                                                Si, la nostra academy SuperNova crea full stack developer da zero tramite un percorso live intensivo di 60 giorni effettivi di aula virtuale dove al completamento dello stesso ti supportiamo nell&apos;inserimento in una delle nostre aziende partner e non solo. Per avere più informazioni sul corso clicca sul seguente link (link pagina del sito dove si parla del corso)
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-100 bg-white first-vertical-trail ps-4">
                    <FadeRight delay={2}>
                        <div className="col-12 offset-md-1 col-md-11 bg-white">
                            <ScopriNovaLight />
                        </div>
                    </FadeRight>
                </div>

                <div className="d-flex justify-items-center align-content-center mt-5" style={{position: 'relative'}}>
                    <div className="section-online-course">
                        <Image className="d-none d-md-block floating-image" src="/imgs/nova42-gaming.png" width={800} height={800} alt="nova web agency"/>
                    </div>
                </div>

                <div className="col-12 offset-md-1 col-md-11 mt-5">
                    <h2 className="text-dark size-30 size-md-40 weight-700 text-center">Contattaci</h2>
                    <div className="d-flex flex-column flex-md-row space-around mt-4">

                        <FadeLeft delay={1}>
                            <button className="d-flex btn btn-social mt-3 mx-auto" type="submit">
                                <Link href={'https://www.linkedin.com/company/nova42-it/'}>
                                    <p className="size-16 weight-700 text-center social-lk">Linkedin</p>
                                </Link>
                            </button>
                        </FadeLeft>
                        
                        <FadeIn delay={2}>
                            <button className="d-flex btn btn-social mt-3 mx-auto" type="submit" onClick={() => router.push('mailto:info@nova42.it')}>
                                <p className="size-16 weight-700 text-center social-email">Email</p>
                            </button>
                        </FadeIn>

                        <FadeRight delay={1}>
                            <button className="d-flex btn btn-social mt-3 mx-auto" type="submit">
                                <Link href={'https://www.tiktok.com/@nova42.it'}>
                                    <p className="size-16 weight-700 text-center social-tik-tok">Tik Tok</p>
                                </Link>
                            </button>
                        </FadeRight>

                        <FadeIn delay={2}>
                            <button className="d-flex btn btn-social mt-3 mx-auto" type="submit">
                                <Link href={'https://www.instagram.com/nova42.it/'}>
                                    <p className="size-16 weight-700 text-center social-instagram">Instagram</p>
                                </Link>
                            </button>
                        </FadeIn>

                        <FadeLeft delay={1}>
                            <button className="d-flex  btn btn-social mt-3 mx-auto" type="submit">
                                <Link href={'https://www.facebook.com/nova42.it'}>
                                    <p className="size-16 weight-700 text-center social-facebook">Facebook</p>
                                </Link>
                            </button>
                        </FadeLeft>

                    </div>
                
                </div>

            </div>

            <Footer />
            
        </>
    )

}

export default WebGame