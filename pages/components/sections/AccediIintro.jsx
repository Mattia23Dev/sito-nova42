
import Image from "next/image";
import FadeLeft from "../custom/FadeLeft";
import FadeRight from "../custom/FadeRight";
import FadeIn from "../custom/FadeIn";
import Footer from "../Footer";
import Link from "next/link";

const AccediIintro = () => {

    return (

        <div className="bg-nova-dark-service">

            <div className="row mb-5">
                <div className="col-12 col-md-8 col-lg-8 mx-auto">
                    <div className="row">   
                        <div className="col-12 nova-access-full"></div>
                    </div>
                    <div className="row move-up">   
                        <div className="col-12 col-lg-4 p-4">
                            <h2 className="size-16 weight-400 text-center"><span className="color-access-blue">Nova42</span><span className="color-access-gray">&frasl;&frasl;accedi/gamification</span></h2>
                            <div className="box-access p-2">
                                <h3 className="size-20 size-lg-18 weight-800 text-center text-white lh-35 my-4">Piattaforma Studenti</h3>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">1</span><span className="code-white">&frasl;**</span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">2</span><span className="code-violet">Accedi alla nostra</span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">3</span><span className="code-violet">piattaforma</span><span className="code-white"> di Gamification</span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">4</span><span className="code-white">per</span><span className="code-orange"> imparare a programmare </span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">5</span><span className="code-white">divertendoti </span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">6</span><span className="code-green">o mettere alla prova le tu.</span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">7</span><span className="code-white">abilità di coding.</span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">8</span><span className="code-green"></span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">9</span><span className="code-green"></span></p>
                                {/* <div className="d-flex justify-content-evenly jus mt-4">
                                    <Link href="/">
                                        <button className="col-4 col-lg-5 mx-auto btn-nova-outline mt-4 mb-4 py-2 px-3">{'Accedi'}</button>    
                                    </Link>
                                    <Link href="/">
                                        <button className="col-4 col-lg-5 mx-auto btn btn-nova-fill mt-4 mb-4 py-2 px-3">{'Registrati'}</button>    
                                    </Link>
                                </div> */}
                                 <div className="d-flex justify-center mt-4">
                                    <h5 className="col-8 mx-auto d-block text-center text-white mt-4 mb-4 py-2">{'Coming Soon!'}</h5>    
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 p-4">
                            <h2 className="size-16 weight-400 text-center"><span className="color-access-blue">Nova42</span><span className="color-access-gray">&frasl;&frasl;accedi/studenti</span></h2>
                            <div className="box-access p-2">
                                <h3 className="size-20 size-lg-18 weight-800 text-center text-white lh-35 my-4">Piattaforma Studenti</h3>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">1</span><span className="code-white">&frasl;**</span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">2</span><span className="code-violet">Accedi alla nostra</span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">3</span><span className="code-violet">piattaforma</span><span className="code-white"> e-learning se</span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">4</span><span className="code-white">sei un nostro</span><span className="code-orange"> studente per </span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">5</span><span className="code-orange">seguire le lezioni live, </span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter"></span><span className="code-green">scaricare i materiali  </span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter"></span><span className="code-white">informativi e rivedere le </span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter"></span><span className="code-green">lezioni registrate  </span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter"></span><span className="code-green"></span></p>
                                {/* <div className="d-flex justify-center mt-4">
                                    <Link href="/">
                                        <button className="col-4 col-lg-6 mx-auto d-block btn btn-nova-fill mt-4 mb-4 py-2">{'Accedi'}</button>    
                                    </Link>
                                </div> */}
                                <div className="d-flex justify-center mt-4">
                                    <h5 className="col-8 mx-auto d-block text-center text-white mt-4 mb-4 py-2">{'Coming Soon!'}</h5>    
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 p-4">
                            <h2 className="size-16 weight-400 text-center"><span className="color-access-blue">Nova42</span><span className="color-access-gray">&frasl;&frasl;accedi/aziende</span></h2>
                            <div className="box-access p-2">
                                <h3 className="size-20 size-lg-18 weight-800 text-center text-white lh-35 my-4">Piattaforma Studenti</h3>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">1</span><span className="code-white">&frasl;**</span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">2</span><span className="code-violet">Accedi alla nostra</span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">3</span><span className="code-violet">piattaforma</span><span className="code-white"> per cercare il </span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">4</span><span className="code-white">professionista IT </span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">5</span><span className="code-white">divertendoti </span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">6</span><span className="code-green">per la tua azienda.</span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter">7</span><span className="code-white"></span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter"></span><span className="code-green"></span></p>
                                <p className="size-16 size-lg-14 m-0"><span className="counter"></span><span className="code-green"></span></p>
                                {/* <div className="d-flex justify-content-evenly jus mt-4">
                                    <Link href="/">
                                        <button className="col-4 col-lg-5 mx-auto btn-nova-outline mt-4 mb-4 py-2 px-3">{'Accedi'}</button>    
                                    </Link>
                                    <Link href="/">
                                        <button className="col-4 col-lg-5 mx-auto btn btn-nova-fill mt-4 mb-4 py-2 px-3">{'Registrati'}</button>    
                                    </Link>
                                </div> */}
                                 <div className="d-flex justify-center mt-4">
                                    <h5 className="col-8 mx-auto d-block text-center text-white mt-4 mb-4 py-2">{'Coming Soon!'}</h5>    
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </div>
            </div>

            <Footer  bg={'bg-nova-dark-service'}/>

        </div>
    )

}

export default AccediIintro