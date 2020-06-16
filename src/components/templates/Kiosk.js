import React, { useState, useRef, useEffect } from 'react';
import kioskGlow from '../../assets/kioskGlow.png';
import background from '../../assets/background.jpg';
import ImageMap from '../molecules/ImageMap';

export default function Kiosk(props) {

  const [count, setCount] = useState(0);
  const glowRef = useRef(null);
  const kioskRef = useRef(null);

function imageLoaded() {
    let newCount = count + 1;
    setCount(newCount);    
  }

useEffect(() => {
  if (count > 1) {
    glowRef.current.hidden = false;
    kioskRef.current.hidden = false;
    console.log("Unhide the Images");
  } 
}, [count]);
    return (
      <div className="home" style={{ backgroundImage: `url(${background})` }}>
        <div className="map">
          <img
            className="kioskGlow"
            src={kioskGlow}
            onLoad={() => imageLoaded()}
            useMap="#image-map"
            ref={glowRef}
            hidden
          />
          <img src={props.kiosk} onLoad={() => imageLoaded()} ref={kioskRef} hidden/>
        </div>
        <ImageMap t={props.t} />
      </div>
    );
}