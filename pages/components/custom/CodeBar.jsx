
import React from 'react';
import { useState } from "react"

const CodeBar = ({value, text}) => {

    const [widthValue, setWidth] = useState(0);
    const [textValue, setTextValue] = useState(0);

    const check = (el) =>{
            if (!el) return;

            const { innerWidth: width, innerHeight: height } = window;
            const {y} = el.getBoundingClientRect()

            if(y < innerHeight/2){

                let delta = parseInt(y - (innerHeight/2)+value);
                    delta < 0 ? delta = 0 : null;

                    value > 100 ? value = 100 : null;   

                const deltaP = parseInt(delta*100/value)
                
                setTextValue(parseInt(value-delta));
                setWidth(parseInt((value-deltaP)*250/100));
            }else{
                setWidth(0);
                setTextValue(0);
            }
            
    }

    return (
        
        <div className="card-language" ref={(el)=>check(el)}>
            <div className="card-bg" />
            <div className="card-rate" style={{width:widthValue}}/>
            <div className="row card-row">
                <div className="col-8">
                    <p className="bar-bullet text-2 text-capitalize">{text}</p>
                </div>
                <div className="col-4">
                    <p className="text-3">{textValue + '%'}</p>
                </div>
            </div>
        </div>
    )
      
  }

export default CodeBar