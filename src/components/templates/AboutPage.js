import React from 'react';
import { GCFooter, GCHeader } from 'gc-tortilla';

export default function AboutPage(props) {

    return (
        <div className="about">
            <GCHeader/>
            <h1>{props.t["About Page"]}</h1>
            <GCFooter/>
        </div>
    );
}