
import { useEffect, useState } from "react";
import ChiSiamoSection from "../sections/ChiSiamoSection";

const ChiSiamoIntro = () => {

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
        <ChiSiamoSection />

    )

}

export default ChiSiamoIntro


