
import Image from "next/image";
import { useEffect, useState } from "react";
import FadeIn from "../custom/FadeIn";
import FadeLeft from "../custom/FadeLeft";
import FadeRight from "../custom/FadeRight";
import Footer from "../Footer";
import ContattaComponent from "./ContattaComponent";
import ContattaComponentGeneral from "./ContattaComponentGeneral";

import { useSelector } from 'react-redux';

const Contatta = () => {
    
    const lastPath = useSelector(state=>state.history.lastPath);

    console.log("LAST PATH, ",lastPath)

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

    const bg = 'bg-nova-dark';

    return (

        <>

            <div className={`w-100 bg-trasparent nova-row`}>

                    <div className="d-block d-md-none row justify-center pb-4">
                        <FadeIn delay={2}>
                            <h3 className="gradient-fill size-34 size-md-40 weight-700 text-center text-uppercase my-3">Contattami</h3>
                        </FadeIn>
                    </div>
            
                    <div className="col-12 col-md-8 mx-auto">
                        <div className="row nova-form w-100 mx-0">
                                <div className={`col-11 mx-auto col-md-8 ${bg} round-20 p-3 order-2 order-md-1`}>
                                    <FadeLeft delay={2}>
                                        {lastPath == '/servizi' && ( <ContattaComponent />)}
                                        {lastPath !== '/servizi' && ( <ContattaComponentGeneral />)}
                                    </FadeLeft>
                                </div>
                                <div className="col-12 col-md-4 box-center order-1 order-md-2">
                                    <FadeRight delay={3}>
                                        <div className="w-100">
                                            <h5 className="gradient-fill size-22 weight-700 mt-2 text-capitalize">E-mail</h5>
                                            <p className="size-16 text-white weight-400 lh-28 mt-1">
                                                info@nova42.it
                                            </p>
                                        </div>
                                        {/* <div className="w-100">
                                            <h5 className="gradient-fill size-22 weight-700 mt-2 text-capitalize">Indirizzo</h5>
                                            <p className="size-16 text-white weight-400 lh-28 mt-1">
                                                Via della grotta, 14 <br/>
                                                Milano (MI), 10040 <br/>
                                                Italia
                                            </p>
                                        </div> */}
                                        <div className="w-100">
                                            <h5 className="gradient-fill size-22 weight-700 mt-2 text-capitalize">Numero di telefono</h5>
                                            <p className="size-16 text-white weight-400 lh-28 mt-1">
                                            +39 333 23 42 431
                                            </p>
                                        </div>
                                    </FadeRight>
                                </div>
                        </div>
                    </div>
                    
            </div>

            <Footer bg={'bg-trasparent w-100'}/>

        </>
    )

}

export default Contatta


