import React from 'react';

const Option = ({ option, selections, setSelections }) => {

    return (

        <button className="option" onClick={() => setSelections(selections + option[0])}>{option[1]}</button>

    );
};

export default Option;