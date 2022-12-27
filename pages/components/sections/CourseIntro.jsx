
import Image from "next/image";
import { useEffect, useState } from "react";
import FadeIn from "../custom/FadeIn";
import Link from "next/link";
import FadeLeft from "../custom/FadeLeft";
import FadeRight from "../custom/FadeRight";
import Footer from "../Footer";
import ScopriNova from "../ScopriNova";

const CourseIntro = () => {

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
                        <div className="col-12 col-lg-8 d-flex justify-items-center align-content-center">
                            <div className="div">
                            <h2 className="section-title text-center">Avvia la tua carriera</h2>
                                <h2 className="section-title text-center text-md-start"><strong>da Full Stack Developer</strong></h2>
                                <p className="d-none d-md-block section-description p-2 text-center text-md-start">
                                    La navicella sta per partire, pronto a diventare il prossimo astronauta?<br/>
                                </p>
                                <Link href="/candidati">
                                    <div className="d-flex justify-content-center justify-content-md-start">
                                        <button className="mt-5 mt-md-0 mb-5 mb-md-0 d-block btn btn-nova-fill" type="submit">{'Candidati ora'}</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                            <div className="section-image-course">
                                <Image className="d-none d-md-block floating-image" src="/imgs/corso-web-developer.png" layout="fill"  alt="nova web agency"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-none d-md-block row bg-nova-dark pt-5 wave-003"></div>

            <div className="d-flex justify-content-center align-content-center bg-nova-light pb-5 bg-nova-light bg-course-info">
                 <ScopriNova customClass="w-100 responsive-show-nova mt-5 mt-md-0 p-5 p-md-0"/>
            </div>

            <div className="row bg-nova-dark">
                <FadeIn delay={1}>
                    <div className="col-12">
                        <h5 className="card-title size-16 weight-400 text-center mt-5 text-uppercase text-gray">FULL STACK ACADEMY SUPERNOVA</h5>
                        <h2 className="text-white size-30 size-md-40 weight-700 text-center pt-4 pt-md-1">Perchè entrare in SuperNova</h2>
                        <div className="row">
                            <p className="col-12 col-md-8 mx-auto size-16 weight-400 text-center text-white lh-28 p-5 p-md-4 mb-5">
                                Perché siamo l&apos;Academy più completa per Full Stack Developer e la prima vera alternativa alle università, che ti trasformerà alla velocità della luce in un programmatore di alto livello, partendo completamente da 0 e in soli 90 giorni. Tutto questo divertendoti grazie alla nostra piattaforma di Gamification!
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>

            <div className="w-100 bg-nova-light pt-3 pt-md-5">
                <div className="col-12 offset-md-1 col-md-11">
                    <div className="row row-nova p-3 m-0">
                        <div className="col-12 col-md-8 mb-0 mb-md-5 p-3 p-md-0 pt-0">
                            <FadeLeft delay={2}>
                                <h4 className="gradient-fill size-34 size-md-40 weight-700 my-4 my-md-5 mt-0 mt-md-5 text-center text-md-start">Come funziona il corso</h4>
                                <h5 className="text-white size-16 weight-800 mt-5 mt-md-3">Il Nostro Corso parte da zero</h5>
                                <p className="size-16 text-white weight-400 lh-28 mt-1 me-3">
                                    È adatto a chiunque e affronta i due ambiti fondamentali per diventare uno <br/>
                                    sviluppatore full stack: Sviluppo Frontend e sviluppo Backend.
                                </p>
                                <h5 className="text-white size-16 weight-800 mt-5 mt-md-3">Durata di 3 mesi</h5>
                                <p className="size-16 text-white weight-400 lh-28 mt-1 me-3">
                                    Le lezioni sono full day dal lunedì al venerdì.
                                </p>
                                <h5 className="text-white size-16 weight-800 mt-5 mt-md-3">Una selezione spaziale</h5>
                                <p className="size-16 text-white weight-400 lh-28 mt-1 me-3">
                                    Le classi sono ristrette e accuratamente selezionate , in questo modo i nostri <br/>
                                    docenti riescono a concentrarsi sul singolo studente garantendo una <br/>
                                    preparazione ottimale di tutta la classe. <br/>
                                    Oltre questo ti offriamo il supporto dei nostri tutor specializzati. Ecco perché ci <br/>
                                    piace dire che il nostro corso è cucito su misura dello studente.
                                </p>
                                <h5 className="text-white size-16 weight-800 mt-5 mt-md-3">Il nostro percorso è Human Oriented </h5>
                                <p className="size-16 text-white weight-400 lh-28 mt-1 me-3">
                                    Non solo programmazione, alla fine del corso organizziamo l&apos;evento nella nostra <br/>
                                    sede a Roma dove andiamo a lavorare insieme sulle tue soft skill <br/>
                                    e sulla redazione del tuo cv, così puoi presentarti al meglio in fase di colloquio.
                                </p>
                            </FadeLeft>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                            <FadeRight delay={1}>
                                    <div className="section-image-course">
                                        <Image className="d-none d-md-block floating-image" src="/imgs/come-funziona-nova.png" layout="fill"  alt="nova web agency"/>
                                    </div>
                            </FadeRight>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 bg-nova-light pt-3 pt-md-5">
                <div className="col-12 offset-md-1 col-md-11">
                    <div className="row row-nova p-2 m-0">
                        <div className="col-12 col-md-4 d-flex justify-items-center align-content-center order-2 order-lg-1" style={{position: 'relative'}}>
                            <FadeIn delay={1}>
                                    <div className="section-image-course">
                                        <Image className="d-none d-md-block floating-image" src="/imgs/devben-webapp.png" layout="fill"  alt="nova web agency"/>
                                    </div>
                            </FadeIn>
                        </div>
                        <div className="col-12 col-md-8 mb-0 mb-md-5 order-1 order-1 order-lg-1 p-4 p-md-3 ">
                            <FadeRight delay={2}>
                                <h4 className="gradient-fill size-30 size-md-40 weight-700 mt-0 my-3 mt-md-5 mb-3 text-center text-md-start">Cosa imparerai con Nova42</h4>
                                <h5 className="text-white size-16 weight-800 mt-2 lh-28">Ecco alcune delle cose che impari frequentando il nostro corso:</h5>
                                <ul className="text-white size-16 weight-400 mt-2 lh-35">
                                    <li>Teoria base di informatica</li>
                                    <li>I principi della programmazione</li>
                                    <li>Web design con HTML e CSS</li>
                                    <li>Programmazione in Javascript moderno</li>
                                    <li>Programmazione e gestione database con MYSQL</li>
                                    <li>Creazione web app e app con React e React Native</li>
                                    <li>Comprensione loghiche legate alla programmazione ad oggetti</li>
                                </ul>
                            </FadeRight>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row bg-nova-dark">
                <div className="col-12">
                    <FadeIn delay={1}>
                        <h5 className="card-title size-16 weight-400 text-center mt-5 text-uppercase text-gray">GLI STUDENTI</h5>
                        <h2 className="text-white size-30 size-md-40 weight-700 text-center pt-4 pt-md-1">Per chi è il corso?</h2>
                    </FadeIn>
                    <div className="row">
                        <div className="col-12 col-md-10 mx-auto">
                             <div className="row">
                                    <div className="col-12 col-md-6 justify-items-center align-content-center">
                                        
                                        <FadeIn delay={1}>
                                            <div className="d-none d-md-block col-12 col-md-6 block-001 m-0 mt-5 mb-5"></div>
                                        </FadeIn>

                                        <FadeLeft delay={2}>
                                            <div className="w-100 p-4 p-lg-0">
                                                <h3 className="size-30 size-md-22 card-title text-center text-md-start">Beginner</h3>
                                                <p className="size-18 weight-400 text-white lh-28 text-center text-md-start mt-4 mt-md-2">
                                                    A coding sei a zero? <br/>
                                                    Don&apos;t worry! Non hai mai scritto una riga di codice ma ti appassiona la <br/>  
                                                    carriera da Web Developer. Ti permetteremo di sfruttare la tua <br/>
                                                    passione e acquisire le competenze giuste per trasformare il tuo futuro.
                                                </p>
                                                <div className="d-flex justify-content-center justify-content-md-start mt-4 mt-md-2">
                                                    <Link href="/candidati">
                                                        <button className="d-block btn btn-nova-fill mb-5" type="submit">{'Candidati ora'}</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </FadeLeft>
                                    </div>
                                    <div className="col-12 col-md-6 justify-items-center align-content-center">

                                        <FadeIn delay={2}>
                                            <div className="d-none d-md-block col-12 col-md-6 block-002 m-0 mt-5 mb-5"></div>
                                        </FadeIn>

                                        <FadeRight delay={2}>
                                            <div className="w-100 p-4 p-lg-0">
                                                <h3 className="size-30 size-md-22 card-title text-center text-md-start">Learner</h3>
                                                <p className="size-18 weight-400 text-white lh-28 text-center text-md-start mt-4 mt-md-2">
                                                    Ne sai già qualcosa? <br/>
                                                    Cool! Hai già alcune competenze in materia di web developing ma <br/>  
                                                    vuoi approfondirle e fare pratica su casi reali.  Con il corso acquisirai<br/>
                                                    competenze e ti preparerai per una carriera di successo.
                                                </p>
                                                <div className="d-flex justify-content-center justify-content-md-start mt-4 mt-md-2">
                                                    <Link href="/candidati">
                                                        <button className="d-block btn btn-nova-fill mb-5" type="submit">{'Candidati ora'}</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </FadeRight>
                                    </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 bg-nova-light py-3 py-md-5">
                <div className="col-12 offset-md-1 col-md-11">
                    <div className="row row-nova p-2 m-0">
                        <div className="col-12 col-md-8 mb-0 mb-md-5 p-4">
                            <FadeLeft delay={2}>
                                <h5 className="text-gray size-16 weight-400 mt-0 mt-md-3 text-capitalize">Pratico innovativo e Human Oriented</h5>
                                <h4 className="gradient-fill size-36 size-md-40 weight-700 mt-2 mb-4 pt-2 pt-md-1">Il corso su misura per te</h4>
                                <p className="size-16 text-white weight-400 lh-28 mt-1 me-3">
                                    Il Corso si svolge in un perfetto equlibrio tra teoria e pratica. <br/>
                                    A fine corso creiamo Team di Lavoro all&apos;interno della classe per collaborare 
                                    ad un progetto finale. <br/>
                                    Questo è il primo step verso il mondo del lavoro. <br/>
                                </p>
                                <p className="size-16 text-white weight-400 lh-28 mt-1 me-3">
                                    Innovativo perché ti mettiamo a disposizione la nostra piattaforma di Gamification, <br/>
                                    così imparare a programmare è per te ancor più divertente. 
                                 </p>
                                 <p className="size-16 text-white weight-400 lh-28 mt-1 me-3">
                                    Il nostro percorso è Human Oriented. <br/>
                                    Non vogliamo solo formarti ma lavorare sulle tue soft skill e fare di te un professionista del settore a 360 gradi.
                                </p>
                            </FadeLeft>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                            <FadeRight delay={1}>
                                    <div className="section-image-course">
                                        <Image className="d-none d-md-block floating-image" src="/imgs/corso-developer.png" layout="fill"  alt="nova web agency"/>
                                    </div>
                            </FadeRight>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 bg-nova-light py-3 py-md-5">
                <div className="col-12 offset-md-1 col-md-11">
                    <div className="row row-nova m-0">
                        <div className="col-12 col-md-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                            <FadeRight delay={1}>
                                    <div className="section-image-course">
                                        <Image className="d-none d-md-block floating-image" src="/imgs/full-stack-developer.png" layout="fill"  alt="nova web agency"/>
                                    </div>
                            </FadeRight>
                        </div>
                        <div className="col-12 col-md-8 mb-0 mb-md-5 p-4 p-md-2 text-center text-md-start">
                            <FadeLeft delay={2}>
                                <h5 className="text-gray size-16 weight-400 mt-3 text-capitalize">La classe</h5>
                                <h4 className="gradient-fill size-36 size-md-40 weight-700 mt-2 mb-4 pt-2 pt-md-1">Scopri la classe</h4>
                                <p className="size-16 text-white weight-400 lh-28 mt-1 me-3">
                                    Le nostre classi sono ristrette e accuratamente selezionate, <br/>
                                    in questo modo i nostri docenti riescono a concentrarsi meglio <br/>
                                    sul singolo studente garantendo un percorso di elevata qualità a tutta la classe.
                                </p>
                                <p className="size-16 text-white weight-400 lh-28 mt-1 me-3">
                                    Oltre questo hai a disposizione il supporto dei nostri tutor specializzati.
                                </p>
                            </FadeLeft>
                        </div>
                      
                    </div>
                </div>
            </div>

            <div className="w-100 bg-nova-light py-3 py-md-5">
                <div className="col-12 offset-md-1 col-md-11">
                    <div className="row row-nova m-0">
                        <div className="col-12 col-md-8 mb-0 mb-md-5 p-4 p-md-2 text-center text-md-start">
                            <FadeLeft delay={2}>
                                <h5 className="text-gray size-16 weight-400 mt-3 text-capitalize">Fine corso</h5>
                                <h4 className="gradient-fill size-36 size-md-40 weight-700 mt-2 mb-4 pt-2 pt-md-1">E a fine corso?</h4>
                                <p className="size-16 text-white weight-400 lh-28 mt-1 me-3">
                                    Il nostro Obiettivo è farti diventare un professionista del settore <br/>
                                    e già nella fase finale del corso ti aiutiamo a curare <br/> 
                                    il tuo CV e il tuo Profilo Linkedin.
                                </p>
                                <p className="size-16 text-white weight-400 lh-28 mt-1 me-3">
                                    Alla fine del percorso formativo ti supportiamo attivamente nell&apos;Inserimento <br/>
                                    nel Mondo del Lavoro mettendoti in contatto con le nostre aziende partner.
                                </p>
                            </FadeLeft>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                            <FadeRight delay={1}>
                                    <div className="section-image-course">
                                        <Image className="d-none d-md-block floating-image" src="/imgs/sviluppatore-javascript.png" layout="fill"  alt="nova web agency"/>
                                    </div>
                            </FadeRight>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row bg-nova-light py-2 py-md-5">
                <div className="col-11 col-lg-8 mx-auto salary">
                    <div className="row">
                        <div className="col-12">
                            <FadeLeft delay={2}>
                                <h4 className="gradient-fill size-30 size-md-40 weight-700 mt-2 mb-4 text-center text-md-start">Quanto guadagna un Developer?</h4>
                                <h5 className="text-white size-16 weight-400 mt-3 text-capitalize lh-28 mx-3 mx-md-0">Ecco alcuni dati, sullo stipendio medio di un Developer Full Stack</h5>
                            </FadeLeft>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row mt-4 space-between box-center">
                        <FadeLeft delay={2}>
                            <div className="nova-box">
                                <h4 className="text-white size-30 size-md-36 weight-700 mt-2 mb-4 text-md-start text-center">€25.000/anno</h4>
                                <h5 className="card-title size-22 weight-700 mt-2 text-capitalize">Developer Junior</h5>
                                <p className="size-16 text-white weight-400 lh-28 mt-1 me-3">
                                    Il tuo stipendio nei primi due anni sarà di circa 1.800€ al mese.
                                </p>
                            </div>
                        </FadeLeft>
                        <FadeIn delay={1}>
                            <div className="nova-box">
                                <h4 className="text-white size-30 size-md-36 weight-700 mt-2 mb-4 text-md-start text-center">€35.000/anno</h4>
                                    <h5 className="card-title size-22 weight-700 mt-2 text-capitalize">Developer Mid-Level</h5>
                                    <p className="size-16 text-white weight-400 lh-28 mt-1 me-3">
                                        Dopo un paio di anni di esperienza arriverai intorno ai 3.000€ al mese.
                                    </p>
                            </div>
                        </FadeIn>
                        <FadeRight delay={2}>
                            <div className="nova-box">
                                    <h4 className="text-white size-30 size-md-36 weight-700 mt-2 mb-4 text-md-start text-center">€50.000/anno</h4>
                                    <h5 className="card-title size-22 weight-700 mt-2 text-capitalize">Developer Senior</h5>
                                    <p className="size-16 text-white weight-400 lh-28 mt-1 me-3">
                                        Superati i 5 anni di esperienza potrai guadagnare più di 4.000€ al mese. 
                                    </p>
                            </div>
                        </FadeRight>
                    </div>
                </div>
            </div>

            <div className="row bg-nova-dark">
                <div className="col-10 mx-auto mt-2 mt-md-5">
                    <FadeIn delay={1}>
                        <h5 className="card-title size-16 weight-400 text-center mt-5 text-uppercase text-gray">LA NOSTRA OFFERTA</h5>
                        <h2 className="gradient-fill size-30 size-md-40 weight-700 mt-2 mb-4 text-center">Scegli il tuo percorso</h2>
                        <p className="size-16 text-white weight-400 lh-28 mt-1 me-3 text-center">
                            Ecco i nostri percorsi di formazione
                        </p>
                    </FadeIn>
                    <div className="d-flex flex-lg-row flex-column mt-4 space-between mb-5">
                        <FadeLeft delay={1}>
                            <div className="nova-box-dark">
                                <p className=""></p>
                                <h5 className="text-white size-22 weight-700 mt-5 text-uppercase text-center">Corso base</h5>
                                <h3 className="text-white size-60 size-md-80 weight-700 mt-2 text-uppercase text-center">€2450</h3>
                                <p className="card-title size-16 weight-400 mt-1 text-capitalize text-center">+ Iva</p>
                                <Link href="/candidati">
                                    <button className="d-block btn btn-nova-fill mx-auto mt-5 mb-5" type="submit">{'Candidati ora'}</button>
                                </Link>
                                <p className="text-gray size-22 weight-700 mt-1 text-uppercase text-left">Cosa include?</p>
                                <h6 className="checked size-14 size-md-22 weight-400 mt-2 text-left">Corso completo</h6>
                                <h6 className="checked size-14 size-md-22 weight-400 mt-2 text-left">Accesso e-learning e gamification Nova42</h6>
                                <h6 className="checked size-14 size-md-22 weight-400 mt-2 text-left">Supporto di Tutor specializzati</h6>
                                <h6 className="unchecked size-14 size-md-22 weight-400 mt-2 text-left">Mobile Coding Master</h6>
                            </div>
                        </FadeLeft>
                        <FadeRight delay={2}>
                            <div className="nova-box-grey">
                                <p className="nova-advise">Nova42 consiglia</p>
                                <h5 className="text-white size-22 weight-700 mt-5 text-uppercase text-center">Full Stack + mobile coding master</h5>
                                <h3 className="text-white size-60 size-md-80 weight-700 mt-2 text-uppercase text-center">€2950</h3>
                                <p className="card-title size-16 weight-400 mt-1 text-capitalize text-center">+ Iva</p>
                                <Link href="/candidati">
                                    <button className="d-block btn btn-nova-fill mx-auto mt-5 mb-5" type="submit">{'Candidati ora'}</button>           
                                </Link>
                                <p className="text-gray size-22 weight-700 mt-1 text-uppercase text-left">Cosa include?</p>
                                <h6 className="checked size-14 size-md-22 weight-400 mt-2 text-left">Corso completo</h6>
                                <h6 className="checked size-14 size-md-22 weight-400 mt-2 text-left">Accesso e-learning e gamification Nova42</h6>
                                <h6 className="checked size-14 size-md-22 weight-400 mt-2 text-left">Supporto di Tutor specializzati</h6>
                                <h6 className="checked size-14 size-md-22 weight-400 mt-2 text-left">Mobile Coding Master</h6>
                            </div>
                        </FadeRight>
                    </div>
                    <div className="row mt-4 space-between mb-5">
                        <FadeIn delay={3}>
                            <div className="nova-section-grey p-3 p-md-4">
                                <h5 className="text-gray size-16 weight-400 mt-2 text-uppercase text-center">Scopri</h5>
                                <h3 className="gradient-fill size-30 weight-700 mt-2 mb-4 text-uppercase text-center">MOBILE CODING MASTER</h3>
                                <p className="text-white size-16 weight-400 mt-1 text-capitalize text-center">
                                    Il nostro percorso di specializzazione dura 1 mese. <br/>
                                    In 30 giorni affronti nuovi argomenti e impari le tecniche della programmazione per mobile con tecnologia React Native.
                                </p>
                                <Link href="/candidati">
                                    <button className="d-block btn btn-nova-fill mx-auto mt-4 mb-4" type="submit">{'Candidati ora'}</button>            
                                </Link>
                            </div>
                        </FadeIn>
                       
                    </div>
                </div>
            </div>

            <div className="row bg-white">
                <div className="col-10 mx-auto mt-2 mt-md-5">
                    <FadeRight delay={1}>
                        <h2 className="gradient-fill size-30 size-md-40 weight-700 mt-5 mt-md-2 mb-4 text-center">Sei un principiante?</h2>
                        <p className="size-16 weight-400 lh-28 mt-1 text-center">
                            Il Corso è rivolto ad aspiranti sviluppatori, anche se non hanno alcuna esperienza o competenza informatica.<br/>
                            Ti serve solo voglia di imparare e 3 mesi di tempo per diventare un professionista del settore.
                        </p>
                        <Link href="/candidati">
                            <button className="d-block btn btn-nova-line mx-auto mt-4 mb-4" type="submit">{'Candidati'}</button>
                        </Link>
                    </FadeRight>
                    <FadeIn delay={2}>
                        <div className="box-center d-flex space-between p-4">
                            <Image className="rounded-image" src={'/imgs/mobile-development.png'} width={300} height={200} objectFit="cover" alt="nova web agency"/>
                            <Image className="rounded-image" src={'/imgs/nova-academy-course.png'} width={300} height={200} objectFit="cover" alt="nova web agency"/>
                            <Image className="rounded-image" src={'/imgs/devben-development.png'} width={300} height={200} objectFit="cover" alt="nova web agency"/>
                        </div>
                    </FadeIn>
                    
                </div>
            </div>

            <div className="w-100 bg-nova-dark py-2 py-md-5">
                <div className="col-12 offset-md-1 col-md-11">
                    <div className="row p-4">
                        <div className="col-12 col-md-8 mb-0 mb-md-5">
                            <FadeLeft delay={2}>
                                <h5 className="text-gray size-16 weight-400 mt-3 text-uppercase text-center text-md-start">Fine corso</h5>
                                <h4 className="gradient-fill size-30 size-md-40 weight-700 mt-2 mb-4 text-center text-md-start">E a fine corso?</h4>
                                <p className="size-16 text-white weight-400 lh-28 mt-1 text-center text-md-start">
                                    Crediamo così tanto nel nostro percorso che se non trovi lavoro entro <br/>
                                    6 mesi dalla fine del corso ti rimborsiamo il 100% del costo di Iscrizione
                                </p>
                                <div className="d-flex justify-content-center justify-content-md-start mt-4 mt-md-2">
                                    <Link href="/candidati">
                                        <button className="d-block btn btn-nova-fill mt-4 mb-4" type="submit">{'Candidati ora'}</button>    
                                    </Link>
                                </div>
                            </FadeLeft>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                            <FadeRight delay={1}>
                                    <div className="section-image-course">
                                        <Image className="d-none d-md-block floating-image" src="/imgs/game-development.png" layout="fill"  alt="nova web agency"/>
                                    </div>
                            </FadeRight>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 bg-nova-dark py-0 py-md-5">
                <div className="col-12 offset-md-1 col-md-11 mb-5">
                    <div className="row">
                        <div className="col-12">
                            <FadeLeft delay={2}>
                                <h4 className="gradient-fill size-30 size-md-40 weight-700 mt-2 mb-4 text-center text-md-start">Frequently Asked Questions</h4>
                                <div className="accordion accordion-flush col-12 col-md-10" id="accordionFlushExample">

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-001" aria-expanded="false" aria-controls="flush-collapseOne">
                                            A chi è aperto il corso di Nova42?
                                        </button>
                                        </h2>
                                        <div id="flush-001" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                A Chiunque nutra una passione  o una curiosità per il mondo dell&apos;informatica e della programmazione e voglia diventare uno sviluppatore nel giro di pochi mesi. Si può partire anche totalmente da zero e ti basta essere maggiorenne per partecipare.
                                                Se non hai mai programmato o se hai già seguito qualche corso ma non ti senti pronto per proporti nel mondo del lavoro come programmatore, questo è il percorso che fa per te.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-002" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Di cosa ho bisogno per seguire il corso? 
                                        </button>
                                        </h2>
                                        <div id="flush-002" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                            <div className="accordion-body">
                                                Ti servono un PC, una webcam e una buona connessione Internet (non inferiore ai 5Mb/s).
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-003" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Si può iniziare il corso senza avere basi di programmazione?
                                        </button>
                                        </h2>
                                        <div id="flush-003" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                            <div className="accordion-body">
                                                Assolutamente sì. Il corso è proprio strutturato per chi parte da zero e non ha esperienza o competenza di programmazione. Ti basta superare la fase di ammissione.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-004" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Serve una laurea?
                                        </button>
                                        </h2>
                                        <div id="flush-004" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                            <div className="accordion-body">
                                                Uno dei tanti fattori positivi del mondo della programmazione è che non ci sono percorsi di carriera che ti sono preclusi se non sei in possesso di una laurea. Le aziende alla ricerca di full stack developer si concentrano molto di più sulle capacità tecniche e sulle soft skill dei candidati, piuttosto che sui loro titoli accademici.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-005" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Posso iscrivermi al corso se studio o lavoro?
                                        </button>
                                        </h2>
                                        <div id="flush-005" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                            <div className="accordion-body">
                                                La nostra Academy per aspiranti Full Stack Developer è full time e si svolge ogni giorno, dal lunedì al venerdì nella finestra 9-18. 
                                                Avere una seconda occupazione o frequentare un altro percorso di studi durante la nostra Academy rende troppo complicato restare al passo con il resto della classe. 
                                                Il nostro obiettivo è che, a fine corso, tu sia pronto a entrare nel mondo del lavoro: il tuo completo coinvolgimento è essenziale.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-006" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Programmare è noioso?
                                        </button>
                                        </h2>
                                        <div id="flush-006" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                            <div className="accordion-body">
                                                Tutt&apos;altro, ti troverai ad affrontare molte sfide e il più delle volte lo farai da membro di un team di sviluppo, ecco perché nel nostro percorso stimoliamo molto il teamwork e ti abituiamo a lavorare di squadra.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-007" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Viene rilasciata una certificazione alla fine del corso?
                                        </button>
                                        </h2>
                                        <div id="flush-007" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                            <div className="accordion-body">
                                                Si, ti rilasciamo un attestato di frequenza che indica il numero di ore di lezione frequentate e la qualifica di full stack developer.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-008" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Troverò lavoro dopo il corso?
                                        </button>
                                        </h2>
                                        <div id="flush-008" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                            <div className="accordion-body">
                                                Il nostro obiettivo è creare dei veri professinisti del settore, dotati sia di hard che di soft skill. Ti seguiamo anche una volta finito il corso per supportati attivamente nella ricerca della posizione lavorativa a te più congeniale. Ovviamente, è determinante il tuo impegno, sia durante il corso che quando questo è finito.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-009" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Come funziona la garanzia Collocato o Rimborsato?
                                        </button>
                                        </h2>
                                        <div id="flush-009" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                            <div className="accordion-body">
                                                Trovi tutti i dettagli all&apos;interno dell&apos;informativa contenuta nel modulo d&apos;iscrizione e i consulenti che ti valuteranno ti spiegheranno nel dettaglio il funzionamento della garanzia collocato o rimborsato.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-010" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Come si svolge l&apos;evento di fine corso?
                                        </button>
                                        </h2>
                                        <div id="flush-010" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                            <div className="accordion-body">
                                                Alla fine del corso è previsto un evento nella nostra sede di Roma dove viene divisa la giornata in due parti. 
                                                Nella prima affrontiamo la parte relativa a cv, soft Skill e profilo LinkedIn; nella seconda parte ti mettiamo in contatto con alcune delle nostre aziende partner.
                                                L&apos;evento è gratuito ed è previsto anche un rinfresco offerto da noi.
                                                Ti daremo maggiori dettagli su data e logistica durante il corso
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-011" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Posso frequentare il corso di Nova42 gratuitamente?
                                        </button>
                                        </h2>
                                        <div id="flush-011" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                                            <div className="accordion-body">
                                                Sì, per ogni classe mettiamo a disposizione una borsa di studio che viene assegnata allo studente più meritevole e che non riesce a sostenere il costo del corso.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </FadeLeft>
                        </div>
                    </div>
                </div>


            </div>
        

            <Footer bg={'bg-nova-dark'} />

           
        </>
    )

}

export default CourseIntro


