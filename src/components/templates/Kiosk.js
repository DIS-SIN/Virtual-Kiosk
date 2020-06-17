import React, { useState, useRef, useEffect } from 'react';
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";
import kioskGlow from '../../assets/kioskGlow.png';
import ImageMap from '../molecules/ImageMap';

export default function Kiosk(props) {

  const [count, setCount] = useState(0);
  const glowRef = useRef(null);
  const kioskRef = useRef(null);
  const ariaRef = useRef(null);

function imageLoaded() {
    let newCount = count + 1;
    setCount(newCount);    
  }

useEffect(() => {
  if (count > 1) {
    glowRef.current.hidden = false;
    kioskRef.current.hidden = false;
    ariaRef.current.hidden = true;

  } 
}, [count]);
    return (
        <div className="home" aria-busy={(count<2)}>
          <span className={"sr-only"} ref={ariaRef}>Loading Content</span>
            <RingLoader
              size={150}
              color={"#a630a6"}
              loading={(count<2)}
            />          
          <div className="map">
              <img className="kioskGlow" aria-hidden={true} src={kioskGlow} useMap="#image-map" onLoad={() => imageLoaded()} hidden ref={glowRef}/>
              <img src={props.kiosk} alt="Virtual Kiosk" hidden ref={kioskRef} onLoad={() => imageLoaded()}/>
          </div>
          <ImageMap t={props.t} />
        </div>
    );
}