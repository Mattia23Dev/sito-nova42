import React from 'react';
import { useState, useRef } from 'react';
import { useEffect } from 'react';

const FadeIn = (props) => {

  const [isVisible, setVisible] = useState(false);
  const [complete, setComplete] = useState(false);

  const domRef = useRef();

  const check = (visible) =>{

    if(!props.infinity & !complete){

      if(visible){
        setVisible(true);
        setComplete(true)
      }

    }

  }

  useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => check(entry.isIntersecting));
      });
      observer.observe(domRef.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${isVisible ? (props.delay ? 'fade-delay-'+props.delay : ''): '' }`}
      ref={domRef}
    >
      {props.children}
    </div>
  )
}


export default FadeIn;