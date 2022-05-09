import React from 'react';
import { processEntries } from './ResultHelpers';


export default function Result(props) {
    return (
        <h2 data-testid = 'result'>
            {processEntries(props.entriesString)}
        </h2>
    )
}

