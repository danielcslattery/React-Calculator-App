import React from 'react';

export default function MathButton(props) {
    return (
        <button className="button" onClick={props.onClick}>
            {props.value}
        </button>
    );
}