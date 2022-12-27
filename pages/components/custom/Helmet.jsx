import React from 'react';
import Image from "next/image";
import { useState, useEffect } from "react"

const Helmet = ({setPosition}) =>{

    const [topValue, setTopValue] = useState(50);
    const [textValue, setTextValue] = useState(0);

    const [currentX, setCurrentX] = useState(0);
    const [currentY, setCurrentY] = useState(0);

    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);


    useEffect(()=>{

        setPosition({x:currentX, y:currentY})

        if(positionY==0){
            setCurrentX(innerWidth*0.165)
            setCurrentY(innerHeight/2-50)
        }

        if(positionY > 495 && positionY < 580){
            console.log("@@@@@@@@@@@@@@")

            setCurrentX(currentX + 0.5); 
        }

        if(positionY > 581){
            //setCurrentX(currentX+0.5); 
            setCurrentY(currentY-1)
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

            if(y < innerHeight/2){

                //console.log("VISIBILE")

            }else{
                //console.log("NASCOSTO")

            }

    }

    return (
        <div className='helmet' ref={(el)=>check(el)} style={{top:currentY, left:currentX}} x={currentX} y={currentY}>
            <Image src="/imgs/helmet.png" height={60} width={65} alt="nova accademy"/>
        </div>
    )

}


export default Helmet