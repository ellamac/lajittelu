import React from 'react';

const Option = ({ option, selections, setSelections }) => {

    return (
        <div className="options-wrapper">
            <button className="option" onClick={() => setSelections(selections + option[0])}>{option[1]}</button>
        </div>
    );
};

export default Option;