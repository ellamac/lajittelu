import React, { useState } from 'react';

const Results = ({ selections }) => {
    const [reset, setReset] = useState(false);

    const countResults = () => {
        const results = [
            { id: 1, name: "Puhkupöh", p: (selections.match(/p/g) || []).length },
            { id: 1, name: "Röyhkelikkö", p: (selections.match(/r/g) || []).length },
            { id: 1, name: "Kyrwänkynsi", p: (selections.match(/k/g) || []).length },
            { id: 1, name: "Huiluinen", p: (selections.match(/h/g) || []).length },
        ]

        const maxHouse = results.reduce((max, house) => max.p > house.p ? max : house);

        return (<div><p>Puhkupöh: {results[0].p}</p>
            <p>Röyhkelikkö: {results[1].p}</p>
            <p>Kyrwänkynsi: {results[2].p}</p>
            <p>Huiluinen: {results[3].p}</p>
            <p>Sinun tupasi on: {maxHouse.name}</p></div>);
    };

    return (<div>
        {reset
            ? <h1>TYYDY TULOKSIISI</h1>
            : <div>
                {countResults()}
                <button onClick={() => setReset(true)}>Aloita alusta!</button>
            </div>
        }

    </div>);
};

export default Results;