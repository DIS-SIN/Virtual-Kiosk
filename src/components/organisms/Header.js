import React from 'react';
import LangSwitch from '../molecules/LangSwitch';

export default function Header(props) {

    return (
        <div className="header">
            <h1>{props.t.headerTitle}</h1>
            <LangSwitch t={props.t}/>
        </div>
    );
}