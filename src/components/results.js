import React, { useEffect, useState } from 'react';
import royhkelikko from '../data/royhkelikko.jpg';
import huiluinen from '../data/huiluinen.jpg';
import kyrwankynsi from '../data/kyrwankynsi.jpg';
import puhkupoh from '../data/puhkupoh.jpg';
import HouseResults from './houseResults';

const Results = ({ selections }) => {
    const [reset, setReset] = useState(false);
    const [results, setResults] = useState([]);
    const [maxHouse, setMaxHouse] = useState({ id: 2, name: "Röyhkelikkö", p: 1 });

    useEffect(() => {
        countResults();
    }, [])

    const returnHouseImage = () => {

        return <div className="house-image-wrapper">
            {maxHouse.name === 'Röyhkelikkö' ? <img src={royhkelikko} alt="Röyhkelikkö" className='house-image' />
                : maxHouse.name === 'Puhkupöh' ? <img src={puhkupoh} alt="Puhkupöh" className='house-image' />
                    : maxHouse.name === 'Huiluinen' ? <img src={huiluinen} alt="Huiluinen" className='house-image' />
                        : <img src={kyrwankynsi} alt="Kyrwänkynsi" className='house-image' />
            }
        </div>
    };

    const countResults = () => {
        const results = [
            { id: 2, name: "Röyhkelikkö", p: (selections.match(/r/g) || []).length },
            { id: 1, name: "Puhkupöh", p: (selections.match(/p/g) || []).length },
            { id: 3, name: "Kyrwänkynsi", p: (selections.match(/k/g) || []).length },
            { id: 4, name: "Huiluinen", p: (selections.match(/h/g) || []).length },
            { id: 5, name: "Kerttuli", p: (selections.match(/e/g) || []).length },
            { id: 6, name: "Tylypuhkun henkilökuntaa", p: (selections.match(/s/g) || []).length },
        ]
        setResults(results);
        setMaxHouse(results.reduce((max, house) => max.p > house.p ? max : house));
    };

    return (
        <div className='result-wrapper'>
            {reset
                ? <>
                    <h1>TYYDY TULOKSIISI</h1>
                    {returnHouseImage()}
                </>
                :
                <>
                    <h2>Tulokset</h2>
                    <div className='stats-wrapper'>{results.map(r => <HouseResults house={r} />)}</div>
                    {returnHouseImage()}
                    <button onClick={() => setReset(true)}>Aloita alusta!</button>
                </>
            }
        </div>);
};

export default Results;