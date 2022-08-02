import React from 'react';

const HouseResults = ({ house }) => {

    return (
        <div className={house.id === 1 ? 'hundredp puhkupoh'
            : house.id === 2 ? 'hundredp royhkelikko'
                : house.id === 3 ? 'hundredp kyrwankynsi'
                    : house.id === 4 ? 'hundredp huiluinen'
                        : 'hundredp extra'}
            style={{ width: `${16 / 16 * 100}%` }}
        >
            {
                house.id === 5
                    ? <div>{house.p > 0 ? `Olet ${house.name}!` : ''}</div>
                    : house.id === 6
                        ? <div>{house.p > 0 ? `Olet jo ${house.name}!` : ''}</div>
                        : <>
                            <div className='house-name'>{house.name}:</div>
                            <div className='house-score'>{house.p}/16</div>
                            <div className="resultp" style={{ width: `${house.p / 16 * 100}%` }}></div>
                        </>
            }
        </div >
    );
};

export default HouseResults;