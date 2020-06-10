import React from 'react';
import { GCHeader, GCFooter } from 'gc-tortilla';

export default function Home(props) {

    return (
        <div className="home">
            <GCHeader/>
            <h1>{props.t["Hello World!"]}</h1>
            <GCFooter/>
        </div>
    );
}