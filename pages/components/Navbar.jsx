import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import {useRouter} from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from "react-redux";
import { addPath } from "./../../redux/historySlice";

const Navbar = ({altStyle}) => {
    
    const router = useRouter();
    const dispatch = useDispatch();

    const [isVisible, setIsVisible] = useState(false);
    const [togleMenu, setTogleMenu] = useState(false);
    const [dropClass, setDropClass] = useState('hideMenu');

    const mobile = useMediaQuery({ query: '(max-width: 992px)' });

    const clickMenu = ()=> {
        setTogleMenu(!togleMenu);

        if(togleMenu){
            setDropClass("showMenu");
            setIsVisible(false);
        }else{
            setDropClass("hideMenu");
            setIsVisible(false);
        }

    }

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    useEffect(() => {
        setTimeout(()=>{
            setDropClass("hideMenu");
            setIsVisible(false);
        },6000);
    },[togleMenu]);

    const clickLink = (path)=> {
        dispatch(addPath({path}));
    }


    mobile ? altStyle="noMobile" : null;

    return (
        <nav className={`col-12 offset-lg-1 col-lg-11 navbar navbar-expand-lg navbar-dark bg-trasparent mt-5 z-9 ${altStyle}`}>
            <div className="row d-flex container-fluid">
                <div className="d-flex col-6 col-md-9 ">
                    
                    <Image src="/imgs/logo-nova.png" className="helmet mr-3" height={35} width={40} alt="nova accademy"/>

                    <Link href="/">
                        <a className="align-self-center navbar-brand size-20 weight-800 brand-separator" target="_top" onClick={()=>{clickLink('/')}}>Nova42</a>
                    </Link>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 brand-menu">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className={`nav-link ${router.pathname=='/' ? 'active' :''}`} target="_top" onClick={()=>{clickLink('/')}}>Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/corso">
                                    <a className={`nav-link ${router.pathname=='/corso' ? 'active' :''}`} target="_top" onClick={()=>{clickLink('/')}}>Il corso</a>
                                </Link>
                            </li>
                            <li className="nav-item" onClick={()=>clickMenu()}>
                                <Link href="/servizi">
                                    <a className={`nav-link drop-icon ${router.pathname=='/servizi' ? 'active' :''}`} onClick={()=>{clickLink('/servizi')}}>Servizi</a>
                                </Link>
                                <div className={`dropdown-menu ${dropClass}`}>
                                    <Link href="/software-development">
                                        <a className="dropdown-item" target="_top" onClick={()=>{handleClick(); clickLink('/servizi')}}>Svilippo Software</a>
                                    </Link>

                                    <div className="dropdown-divider"></div>

                                    <Link href="/app-development">
                                        <a className="dropdown-item" target="_top" onClick={()=>{handleClick(); clickLink('/servizi')}}>Svilippo App</a>
                                    </Link>

                                    <div className="dropdown-divider"></div>

                                    <Link href="/web-site">
                                        <a className="dropdown-item" target="_top" onClick={()=>{handleClick(); clickLink('/servizi')}}>Sviluppo Siti Web</a>
                                    </Link>

                                    <div className="dropdown-divider"></div>

                                    <Link href="/ux-ui">
                                        <a className="dropdown-item" target="_top" onClick={()=>{handleClick(); clickLink('/servizi')}}>Ux - Ui</a>
                                    </Link>

                                    <div className="dropdown-divider"></div>

                                    <Link href="/blockchain">
                                        <a className="dropdown-item" target="_top" onClick={()=>{handleClick(); clickLink('/servizi')}}>Svilippo BlockChain</a>
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link href="/gamification">
                                    <a className={`nav-link ${router.pathname=='/gamification' ? 'active' :''}`} target="_top" onClick={()=>{clickLink('/')}}>Gamification</a>
                                </Link>
                            </li>
                            {
                                router.pathname !== '/whoweare' && (
                                    <li className="nav-item">
                                        <Link href="/chi-siamo">
                                            <a className={`nav-link ${router.pathname=='/chi-siamo' ? 'active' :''}`} target="_top" onClick={()=>{clickLink('/servizi')}}>Chi siamo</a>
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    
                </div>

                {altStyle!=="laptop-top-margin" && ( 
                    <div className="d-flex col-6 col-md-3 justify-content-end">
                        <button className="navbar-toggler" onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse">
                            <div className="d-flex col-3 justify-content-between">
                                <Link href="/accedi">
                                    <button className="btn btn-nova-outline btn-nova-small">Accedi</button>
                                </Link>
                                <Link href="/contattaci">
                                    <a className="btn btn-nova-fill ms-3 btn-nova-small" target="_top" onClick={()=>{clickLink('/contattaci')}}>Contattaci</a>
                                </Link>
                            </div>
                        </div>
                    </div>)}
            </div>
            {
                isVisible && (
                    <div className="col-8 col-md-4 mx-auto mobile-navbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 brand-menu">
                            <li className="nav-item w-100">
                                <Link href="/">
                                    <a className="nav-link" target="_top" onClick={()=>{handleClick(); clickLink('/')}}>Home</a>
                                </Link>
                            </li>
                            <li className="nav-item w-100">
                                <Link href="/corso">
                                    <a className="nav-link" target="_top" onClick={()=>{handleClick(); clickLink('/corso')}}>Corso</a>
                                </Link>
                            </li>
                            <li className="nav-item w-100">
                                <Link href="/chi-siamo">
                                    <a className="nav-link" target="_top" onClick={()=>{handleClick(); clickLink('/servizi')}}>Chi siamo</a>
                                </Link>
                            </li>
                            <li className="nav-item w-100">
                                <Link href="gamification">
                                    <a className="nav-link" target="_top" onClick={()=>{handleClick(); clickLink('/servizi')}}>Gamification</a>
                                </Link>
                            </li>
                            <li className="nav-item w-100">
                                <Link href="/servizi">
                                    <a className="nav-link" target="_top" onClick={()=>{handleClick(); clickLink('/servizi')}}>Servizi</a>
                                </Link>
                            </li>
                            <li className="nav-item w-100">
                                <Link href="/software-development">
                                    <a className="nav-link" target="_top" onClick={()=>{handleClick(); clickLink('/servizi')}}>Svilippo Software</a>
                                </Link>
                            </li>
                            <li className="nav-item w-100">
                                <Link href="/app-development">
                                    <a className="nav-link" target="_top" onClick={()=>{handleClick(); clickLink('/servizi')}}>Svilippo App</a>
                                </Link>
                            </li>
                            <li className="nav-item w-100">
                                <Link href="/web-site">
                                    <a className="nav-link" target="_top" onClick={()=>{handleClick(); clickLink('/servizi')}}>Sviluppo Siti Web</a>
                                </Link>
                            </li>
                            <li className="nav-item w-100">
                                <Link href="/ux-ui">
                                    <a className="nav-link" target="_top" onClick={()=>{handleClick(); clickLink('/servizi')}}>Ux - Ui</a>
                                </Link>
                            </li>
                            <li className="nav-item w-100">
                                <Link href="/blockchain">
                                    <a className="nav-link" target="_top" onClick={()=>{handleClick(); clickLink('/servizi')}}>Svilippo BlockChain</a>
                                </Link>
                            </li>
                            <li className="nav-item w-100">
                                <Link href="/accedi">
                                    <a className="nav-link" target="_top" onClick={()=>{handleClick(); clickLink('/accedi')}}>Accedi</a>
                                </Link>
                            </li>
                            <li className="nav-item w-100">
                                <Link href="/contattaci">
                                    <a className="nav-link" target="_top" onClick={()=>{handleClick(); clickLink('/contattaci')}}>Contattaci</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )
                }
        </nav>
    )

}



export default Navbar