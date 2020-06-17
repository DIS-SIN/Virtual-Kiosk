import React from 'react';

export default function RichPreview(props) {

    return (
        <div className={`richPreview ${props.reference ? "hide" : "mobile"}`} aria-hidden={true} ref={props.reference}>
            {props.data ?
                <React.Fragment>
                    <img src={props.data.image}/>
                    <p>{props.data.cta}</p>
                </React.Fragment>
            : undefined}
        </div>
    );
}