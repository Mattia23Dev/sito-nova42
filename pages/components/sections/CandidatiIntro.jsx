
import Image from "next/image";
import { useEffect, useState } from "react";
import FadeLeft from "../custom/FadeLeft";
import FadeRight from "../custom/FadeRight";
import Box from "../custom/Box";
import Footer from "../Footer";
import { useRef } from 'react';
import CandidatiForm from "./CandidtatiForm";

const CandidatiIntro = () => {

    const inputRef = useRef();

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    const video000 = '/imgs/step-000.png';
    const video001 = '/imgs/step-001.png';
    const video002 = '/imgs/step-002.png';
    const video003 = '/imgs/step-003.png';
    const video004 = '/imgs/step-004.png';

    const [video, setVideo] = useState(0);
    const [videoImage, setVideoImage] = useState(video000);
    const [step1, setStep1] = useState(0);
    const [step2, setStep2] = useState(0);
    const [step3, setStep3] = useState(0);
    const [step4, setStep4] = useState(0);
    const [videoComponent, setVedeComponent] = useState(null);

    const check = (el,setStep) =>{

        if (!el) return;    
        
        const { innerWidth: width, innerHeight: height } = window;
        const {x,y} = el.getBoundingClientRect()
        const position = window.pageYOffset;

        setStep(y)

        if(videoComponent && step1 < innerHeight/2 && step4 > innerHeight/2) { 

            videoComponent.style.position='fixed';
            videoComponent.style.zIndex='999';
            videoComponent.style.top=innerHeight/2-50+'px';
            videoComponent.style.right='2rem';

            innerHeight/2 > video ? setVideoImage(video000) : null;
            step1 < video ? setVideoImage(video001) : null;
            step2 < video ? setVideoImage(video002) : null;
            step3 < video ? setVideoImage(video003) : null;
            step4 <= video ? setVideoImage(video004) : null;            

        }else{

            if(videoComponent){

                videoComponent.style.position='fixed';
                videoComponent.style.zIndex='999';
                videoComponent.style.right='2rem';

                if(step1 > innerHeight/2){
                    videoComponent.style.top=step1+'px';
                    setVideoImage(video000);
                }

                if(step4 < innerHeight/2){
                    videoComponent.style.top=step4+'px';
                    setVideoImage(video004);
                }
               
            }

        }

}

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (

        <div className="bg-nova-dark-service">
            <div className="row d-flex nova-section-candidati">
                <div className="col-12 offset-md-1 col-md-10">
                    <div className="row">
                        <div className="col-12 d-flex-column justify-items-center align-content-center">
                            <h4 className="nova-muted size-16 weight-400 ms-3 text-uppercase text-center mt-0 mt-md-5">Candidati al</h4>
                            <h1 className="gradient-fill size-34 size-md-40 weight-700 ms-3 mt-4 text-center">Corso Developer Full Stack</h1>
                            <p className="text-white size-16 weight-400 text-center mt-4"><span className="text-violet">Nova</span>&#47;&#47; Corso/come_iscriversi</p>
                        </div>
                    </div>
                </div>                        
            </div>

            <div className="row nova-section-dark pt-0">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 subtitle-candidati">
                                <FadeLeft delay={1}>
                                    <h2 className="gradient-fill size-36 size-md-40 weight-700 ms-3 mt-4 text-center text-md-left py-5">Test di ammissione</h2>
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <FadeRight delay={3}>
                            <Box position="left" title="Come iscriversi" text="Le classi di Nova42 per il corso da Full Stack Developer sono a numero chiuso e per potersi iscrivere è necessario superare un processo di ammissione." />
                        </FadeRight>
                    </div>
                </div>
            </div>

            <div className="row nova-section-dark pt-0">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 subtitle-candidati">
                                <FadeLeft delay={1}>
                                    <h2 className="gradient-fill size-36 size-md-40 weight-700 ms-3 mt-4 text-center text-md-left py-5">Competenze richieste</h2>
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <FadeRight delay={3}>
                            <Box position="left" title="Requisiti" text="Puoi affrontare l&apos;intero processo anche se parti da zero e non hai alcuna competenza di programmazione." />
                        </FadeRight>
                    </div>
                </div>
            </div>

            <div className="row nova-section-dark pt-0">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 subtitle-candidati">
                                <FadeLeft delay={1}>
                                    <h2 className="gradient-fill size-36 size-md-40 weight-700 ms-3 mt-4 text-center text-md-left py-5">Motivazione</h2>
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <FadeRight delay={3}>
                            <Box position="left" title="L&apos;obiettivo" text="Motivazione, passione, abilità logiche e tempo da dedicare sono fondamentali per riuscire a cambiare vita in 3 mesi." />
                        </FadeRight>
                    </div>
                </div>
            </div>

            <div className="row nova-section-dark pt-0">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 subtitle-candidati">
                                <FadeLeft delay={1}>
                                    <h2 className="gradient-fill size-36 size-md-40 weight-700 ms-3 mt-4 text-center text-md-left py-5">Dove arriverai</h2>
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <FadeRight delay={3}>
                            <Box position="left" title="L&apos;obiettivo" text="Grazie al nostro iter di selezione ti aiuteremo a capire se hai talento per la programmazione e se il corso fa per te." />
                        </FadeRight>
                    </div>
                </div>
            </div>

            <div className="d-none d-lg-block row d-flex nova-section-curve-candidati"></div>

            <div className="d-none d-lg-block row nova-section-dark-dynamic pt-0">
                <div className="row m-0">
                    <div className="col-12 d-flex-column justify-items-center align-content-center">
                        <h1 className="gradient-fill size-30 size-md-40 weight-700 ms-3 mt-4 text-center text-uppercase">Come candidarti</h1>
                    </div>
                    <div className="col-12 col-md-6" ref={(el)=>check(el,setStep1,'STEP-001')}>
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 offset-xl-4 col-xl-8 subtitle-candidati">
                                <FadeLeft delay={1}>
                                    <h2 className="gradient-fill size-36 size-md-40 weight-700 ms-3 mt-4 text-center text-md-left py-5">Compila il form</h2>
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-block col-12 col-md-6" ref={(el)=>{
                            check(el,setVideo,'VIDEO');
                            setVedeComponent(el);
                        }}>
                        <FadeRight delay={2}>
                            <div className="col-12 col-md-4 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                                <div className="floated-image scale-10 scale-lg-12 scale-xl-14">
                                    <img className="img-course" src={videoImage}  alt="nova web agency"/>
                                </div>
                            </div>
                        </FadeRight>
                    </div>
                </div>
            </div>

            <div className="d-none d-lg-block row nova-section-dark-dynamic pt-0">
                <div className="row m-0">
                    <div className="col-12 col-md-6" ref={(el)=>check(el,setStep2,'STEP-002')}>
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 offset-xl-4 col-xl-8 subtitle-candidati">
                                <FadeLeft delay={1}>
                                    <h2 className="gradient-fill size-36 size-md-40 weight-700 ms-3 mt-4 text-center text-md-left py-5">Colloquio</h2>
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        
                    </div>
                </div>
            </div>

            <div className="d-none d-lg-block row nova-section-dark-dynamic pt-0">
                <div className="row m-0">
                    <div className="col-12 col-md-6" ref={(el)=>check(el,setStep3,'STEP-003')}>
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 offset-xl-4 col-xl-8 subtitle-candidati">
                                <FadeLeft delay={1}>
                                    <h2 className="gradient-fill size-36 size-md-40 weight-700 ms-3 mt-4 text-center text-md-left py-5">Completa il test</h2>
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        
                    </div>
                </div>
            </div>

            <div className="d-none d-lg-block row nova-section-dark-dynamic pt-0">
                <div className="row m-0">
                    <div className="col-12 col-md-6" ref={(el)=>check(el,setStep4,'STEP-004')}>
                        <div className="row">
                            <div className="d-flex flex-column justify-center col-12 offset-0 offset-md-2 col-md-10 offset-xl-4 col-xl-8 subtitle-candidati">
                                <FadeLeft delay={1}>
                                    <h2 className="gradient-fill size-36 size-md-40 weight-700 ms-3 mt-4 text-center text-md-left py-5">Iscrizione</h2>
                                </FadeLeft>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        
                    </div>
                </div>
            </div>

            <div className="d-none d-lg-block row d-flex nova-section-curve-candidati-2"></div>

            <div className="col-12 offset-md-1 col-md-10 mt-5 mt-md-0">
                <div className="row m-0">
                    <div className="col-12 d-flex-column justify-items-center align-content-center">
                        <h4 className="nova-muted size-16 weight-400 ms-0 ms-md-3 text-uppercase text-center mt-0 mt-md-5">Candidati al</h4>
                        <h1 className="gradient-fill size-36 size-md-40 weight-700 ms-0 ms-md-3 mt-4 text-center">Corso Full Stack Developer</h1>
                        <p className="text-white size-16 weight-400 text-center mt-3">Candidati qui al corso di Nova42</p>
                    </div>
                </div>
            </div>      

            <div className="row">
                <div className="col-12 col-md-10 mx-auto">
                    <div className="row p-5 pt-0 pt-md-5">
                        <div className="d-flex flex-column justify-center col-12 col-md-6 order-2 order-lg-1 relative">
                            <Image src="/imgs/form-here.png" layout="fill"  objectFit="contain" alt="nova web agency"/>
                        </div>
                        <div className="d-flex flex-column justify-center col-12 col-md-6 order-1 order-lg-2">
                            <FadeLeft delay={2}>
                               <CandidatiForm />
                            </FadeLeft>
                        </div>
                    </div>
                </div>
            </div>

            <Footer bg={'bg-nova-dark-service'}/>

        </div>
    )

}

export default CandidatiIntro


