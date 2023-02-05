import FadeIn from "../custom/FadeIn";
import FadeLeft from "../custom/FadeLeft";
import FadeRight from "../custom/FadeRight";
import { useRouter } from 'next/router'
import Helmet from "../custom/Helmet";
import Link from 'next/link';
import Footer from "../Footer";
import Image from "next/image";
import CodeBar from "../custom/CodeBar";
import Typical from 'react-typical'
import { useState, useEffect } from "react";
import ActiveCampain from "../custom/ActiveCampain";
import ScopriNova from "../ScopriNova";

const Website = () => {

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

            console.log("SERVICE VISIBLE AT ",y)

        }else{
           
        }
        
    }

    useEffect(()=>{
        
    },[helmetPosition]);


    return(
        <>
            {/* <Helmet setPosition={setHelmetPosition}/> */}

            <div className="d-none d-md-block w-100 wave-001 row">
                <div className="col-12 offset-md-1 col-md-11">
                    <h3 id="trail001" className="step-001 size-20 text-white weight-400">local/nova/website.html</h3>
                </div>
            </div>

            <div className="w-100 bg-nova-dark pb-5 pb-lg-0">
                <div className="col-12 offset-lg-1 col-lg-11 vertical-bar p-4 p-md-0">
                    <div className="row step-002">
                        <div className="col-12 col-md-10 col-lg-4 block-step-002 block-live">
                            <FadeLeft delay={3}>
                                <h4 className="size-22 text-purple weight-700 block-title">Corso online in diretta</h4>
                                <p className="size-16 text-white weight-400 lh-35 mt-3">
                                Segui le lezioni online da dove vuoi con la tua classe.<br /> Docenti e tutor al tuo fianco per trasformarti in soli 3 mesi in un Full Stack Developer.
                                </p>
                            </FadeLeft>
                        </div>
                        <div className="col-12 col-md-10 col-lg-4 block-step-002 block-nova">
                            <FadeIn delay={2}>
                                <h4 className="size-22 text-purple weight-700 block-title">E-Learning e Gamification Nova42</h4>
                                <p className="size-16 text-white weight-400 lh-35 mt-3">
                                Le nostre piattaforme sono agili e student friendly, ti permettono di seguire il corso su qualsiasi device ed esercitarti divertendoti superando delle sfide a livelli.                            
                                </p>
                            </FadeIn>
                        </div>
                        <div className="col-12 col-md-10 col-lg-4 block-step-002 block-pro">
                            <FadeRight delay={3}>
                                <h4 className="size-22 text-purple weight-700 block-title">Inserimento professionale</h4>
                                <p className="size-16 text-white weight-400 lh-35 mt-3">
                                Il nostro obiettivo è creare professionisti. Dopo il corso sei pronto ad entrare nel mondo del lavoro tramite le nostre aziende partner e non solo.
                                </p>
                            </FadeRight>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-none d-md-block w-100 bg-nova-dark pb-5 pb-lg-0">
                <div className="col-12 offset-md-1 col-md-11">
                    <h3 className="block-bullet size-20 text-white weight-400 m-0">local/nova/scopri</h3>
                </div>
            </div>

            <div className="w-100 bg-nova-dark pt-0 pt-md-5">
                <div className="col-12 mx-sx-auto offset-md-1 col-md-11 vertical-bar">
                    <div className="row row-nova pb-5 pb-lg-0">
                    <div className="col-12 col-md-4 text-white size-14 weight-200 lh-35 p-5 pt-0 p-md-4 mt-md-3">
                            <FadeLeft delay={1}>
                                <Image src='/imgs/svg/code-block.svg' width={338} height={295} alt="code-block"/>
                            </FadeLeft>
                        </div>
                        <div className="mt-5 mt-md-0 col-11 mx-auto offset-md-1 col-md-7 text-center text-md-start">
                            <FadeIn delay={2}>
                                <h4 className="gradient-fill size-30 size-md-40 weight-700 text-center text-md-start">Scopri il nostro percorso</h4>
                                <p className="size-16 text-white weight-400 lh-35 mt-3 text-start">
                                    Ecco alcuni dei dati che testimoniano <br/>la grande opportunità del settore informatico.
                                </p>
                                <ol className="size-16 text-white weight-400 lh-35 mt-3 ol-bullet text-start mx-auto mx-md-0">
                                    <li>26% Crescita annua della richiesta di professionisti ITC</li>
                                    <li>40% Di aziende che non trovano il professionista TECH</li>
                                    <li>49.000 Posizioni scoperte in Italia per sviluppatori!</li>
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

            <div className="d-none d-md-block w-100 bg-nova-dark pb-5 pb-lg-0">
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
                                    <h4 className="gradient-fill size-30 size-md-40 weight-700">Inserimento professionale</h4>
                                    <p className="size-16 text-white weight-400 lh-35 mt-3">
                                        Tantissime aziende hanno bisogno di developer e tu puoi essere uno di questi. <br/>
                                        Lavoriamo insieme alle tue soft skill, alla presentazione <br/>
                                        del tuo CV e alla fine del corso ti supportiamo attivamente <br/>
                                        nella ricerca del posto giusto per te.<br/>
                                    </p>
                                </FadeIn>
                            </div>
                            <div className="col-lg-2 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                                <div className="d-none d-lg-block section-image-code-bg-001">
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
                                <CodeBar value={75} text={'Html5'}/>
                                <CodeBar value={60} text={'Javascript'}/>
                                <CodeBar value={90} text={'React'}/>
                            </div>
                            <div className="col-11 mx-auto col-md-8 d-flex justify-items-center align-content-center order-1 order-md-2 p-4 text-center text-md-start" style={{position: 'relative'}}>
                                <FadeIn delay={2}>
                                    <h4 className="gradient-fill size-30 size-md-40 weight-700">Le tecnologie più richieste</h4>
                                    <p className="size-16 text-white weight-400 lh-35 mt-3">
                                    Il nostro corso è al passo con le tecnologie più innovative del web. <br />
                                    Imparerai a programmare usando i linguaggi di programmazione <br/>
                                    più usati e le tecnologie più richieste dal mercato.
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
                                    <Link href='https://discord.gg/xfgYftPkTq'>
                                        <button className="d-block btn btn-nova-fill mx-auto" type="submit">{'Vai al canale'}</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
                <div className="col-11 mx-auto">
                    <h5 className="gradient-fill size-22 weight-700 text-center mt-5">Tutti i nostri servizi</h5>
                    <h2 className="text-white size-30 size-md-40 weight-700 text-center mb-5">Scopri tutti i servizi di NOVA42</h2>
                    <div className="row mt-4 pb-0 pb-md-5">
                        <div className="col-12 col-lg-3 box-center pb-5 pb-lg-0">
                            <FadeIn delay={1}>
                            <Image src='/imgs/nova-web-development.png' width={250} height={170} alt="nova-web-development" />
                                <h3 className="card-title size-22 weight-700 text-center text-md-left mt-3">Full Stack Accademy</h3>
                                <p className="size-16 text-white weight-400 mt-2 text-center text-md-left">
                                A coding sei a zero?<br/>
                                    Don&apos;t worry!
                                </p>
                                <Link href={'/corso'}>
                                    <div className="d-flex justify-content-center justify-content-md-start">
                                        <button className="btn btn-nova-fill size-16 mx-auto" type="submit">{'Scopri di più'}</button>
                                    </div>
                                </Link>
                            </FadeIn>
                        </div>
                        <div className="col-12 col-lg-3 box-center pb-5 pb-lg-0">
                            <FadeIn delay={2}>
                                <Image src='/imgs/nova-devben-development.png' width={250} height={170} alt="nova-devben-development" />
                                <h3 className="card-title size-22 weight-700 text-center text-md-left mt-3">App Development</h3>
                                <p className="size-16 text-white weight-400 mt-2 text-center text-md-left">
                                    Ottieni una consulenza <br/>
                                    gratuita per la tua app 
                                </p>
                                <Link href={'/app-development'}>
                                    <div className="d-flex justify-content-center justify-content-md-start">
                                        <button className="btn btn-nova-fill size-16 mx-auto" type="submit">{'Scopri di più'}</button>
                                    </div>
                                </Link>
                            </FadeIn>
                        </div>
                        <div className="col-12 col-lg-3 box-center pb-5 pb-lg-0">
                            <FadeIn delay={3}>
                            <Image src='/imgs/nova-ux-ui.png' width={250} height={170} alt="nova-ux-ui" />
                                <h3 className="card-title size-22 weight-700 text-center text-md-left mt-3">Ux/Ui Design</h3>
                                <p className="size-16 text-white weight-400 mt-2 text-center text-md-left">
                                    Curiamo UX e UI del tuo  <br/>
                                    Sito web o della tua App
                                </p>
                                <Link href={'/ux-ui'}>
                                    <div className="d-flex justify-content-center justify-content-md-start">
                                        <button className="btn btn-nova-fill size-16 mx-auto" type="submit">{'Scopri di più'}</button>
                                    </div>
                                </Link>
                            </FadeIn>
                        </div>
                        <div className="col-12 col-lg-3 box-center pb-5 pb-lg-0">
                            <FadeIn delay={3}>
                            <Image src='/imgs/nova-software-development.png' width={250} height={170} alt="nova-software-development" />
                                <h3 className="card-title size-22 weight-700 text-center text-md-left mt-3">Software Development</h3>
                                <p className="size-16 text-white weight-400 mt-2 text-center text-md-left">
                                    Costruiamo il software su misura <br/>
                                    per la tua azienda
                                </p>
                                <Link href={'/software-development'}>
                                    <div className="d-flex justify-content-center justify-content-md-start">
                                        <button className="btn btn-nova-fill size-16 mx-auto" type="submit">{'Scopri di più'}</button>
                                    </div>
                                </Link>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="d-flex justify-content-center align-content-center bg-nova-dark pb-5 bg-course-info">
                <ScopriNova customClass="w-100 responsive-show-nova mt-5 mt-md-8 p-5 p-md-0"/>
            </div>

            <div className="w-100 bg-nova-dark pt-2 m-0 pb-5 pb-md-0">
                <FadeLeft delay={3}>
                    <div className="col-10 mx-auto bg-nova-gray p-2 py-4 p-md-5 round-20">
                        <h2 className="text-white size-30 size-md-40 weight-700 text-center">Scopri Nova 42</h2>
                        <p className="size-16 text-white weight-400 lh-35 mt-3 text-center">
                        Abbiamo Creato un Percorso che ti porta da 0 a diventare uno Sviluppatore Full Stack in 3 mesi. <br />
                        Oltre questo, ti troviamo Lavoro e ti Aiutiamo Concretamente ad accrescere la tua Self Confidence <br />
                        e le tue Soft Skill. Non solo formazione. Realizziamo servizi IT ad aziende e professionisti.. <br/>
                        </p>
                        <div className="d-flex justify-content-center align-content-center">
                            <Link href={'/corso'}>
                                <button className="btn btn-nova-white mt-3 mx-auto" type="submit">
                                    <p className="size-16 weight-700 text-center">Il corso Nova42</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </FadeLeft>
            </div>

            <div className="d-none d-md-block w-100 bg-nova-dark pt-5 wave-002"></div>

            <div className="w-100 row bg-white second-vertical-trail pb-5 m-0">
                <div className="d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                    <div className="section-online-course">
                        <Image className="d-none d-md-block floating-image" src="/imgs/nova-corso-online.png" width={800} height={800} alt="nova web agency"/>
                    </div>
                </div>
                <div className="col-12 col-md-10 offset-md-2">
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
                                    <p className="size-16 weight-700 text-center social-tik-tok">TikTok</p>
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

                        <FadeRight delay={1}>
                            <button className="d-flex btn btn-social mt-3 mx-auto" type="submit">
                                <Link href={'https://www.facebook.com/nova42.it'}>
                                    <p className="size-16 weight-700 text-center social-facebook">Facebook</p>
                                </Link>
                            </button>
                        </FadeRight>

                    </div>
                
                </div>
            </div>

            <Footer />
            
        </>
    )

}

export default Website