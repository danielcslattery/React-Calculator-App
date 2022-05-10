import React from 'react';
import { processEntries } from './ResultHelpers';


export default function Result(props) {
    const result = processEntries(props.entriesString)

    return (
        <h2 data-testid = 'result'>
            {result}
        </h2>
    )
}

