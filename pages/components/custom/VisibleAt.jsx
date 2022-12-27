import React from 'react';
import { useState, useRef } from 'react';
import { useEffect } from 'react';

const VisibleAt = (props) => {

  const [topValue, setTopValue] = useState(50);
  const [textValue, setTextValue] = useState(0);

  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);



  useEffect(()=>{

      if(positionY==0){
          setCurrentX(innerWidth*0.165)
          setCurrentY(innerHeight/2-50)
      }



  },[])


  const check = (el) =>{

          if (!el) return;

          const { innerWidth: width, innerHeight: height } = window;
          const {x,y} = el.getBoundingClientRect()

          const position = window.pageYOffset;

          const settedX = el.getAttribute('x')

          if(position==0){
              setCurrentX(innerWidth*0.157)
              setCurrentY(innerHeight/2-45)
          }

          setPositionX(window.pageXOffset);
          setPositionY(window.pageYOffset);

          if(y < 600 && y > 70){

              console.log("VISIBILE ",y)
              el.style.zIndex = '1';

          }

          if(y > 600 || y < 70){

            console.log("NASCOSTO ",y)
            el.style.zIndex = 'unset';

        }

  }

  return (
    <div
      // className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${isVisible ? (props.delay ? 'fade-delay-'+props.delay : ''): '' }`}
      ref={(el)=>check(el)}
    >
      {props.children}
    </div>
  )

}


export default VisibleAt;