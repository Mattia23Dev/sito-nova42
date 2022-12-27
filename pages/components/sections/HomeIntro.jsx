
import Image from "next/image";
import { useEffect, useState } from "react";
import Website from "./Website";
import Link from "next/link";

const HomeIntro = () => {

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
                            <div className="col-12 col-lg-6 d-flex justify-items-center align-content-center">

                                <div className="div">
                                    <h3 className="gradient-fill size-lg-20 weight-700 ms-3 mb-4 mb-md-2 text-center text-md-start"></h3>
                                    <h2 className="section-title text-center text-md-start">Entra nella <strong>community</strong> di <strong>Nova42</strong></h2>
                                    <p className="d-none d-md-block section-description p-2 text-center text-md-start">
                                    Per aspiranti programmatori e appassionati di informatica. <br />
                                    Impara le basi della programmazione in maniera semplice e divertente
                                    </p>
                                    <Link href={'/corso'}>
                                        <div className="d-flex justify-content-center justify-content-md-start">
                                            <button className="mt-5 mt-md-0 mb-5 mb-md-0 d-block btn btn-nova-fill" type="submit">{'Scopri di più >'}</button>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                            <div className="col-12 col-lg-6 d-flex justify-items-center align-content-center" style={{position: 'relative'}}>
                                <div className="section-image">
                                    <Image src="/imgs/3d_place_holder.png" className="floated-image" layout="fill" alt="nova accademy" />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <Website />
        
        </>
    )

}

export default HomeIntro


