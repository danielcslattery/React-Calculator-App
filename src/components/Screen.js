import React from 'react';

export default function Screen(props) {
    let entriesString = props.entriesString;
    entriesString = entriesString.replace(/([+/*])[+/*]/g, '$1')
    entriesString = entriesString.replace(/([-])[+/*]/g, '$1')
    entriesString = entriesString.replace(/([-])\1{2}/g, '--')
    return (
        <input data-testid = 'screen' value = {entriesString} onChange={props.onChange}/>
    );
}