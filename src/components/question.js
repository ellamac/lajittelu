import React from 'react';
import Option from './option';

const Question = ({ question, selections, setSelections }) => {

    return (
        <>
            <h2 className="question">{question.question}</h2>
            <div className='options-wrapper'>
                {Object.entries(question.options).map(o => <Option option={o} setSelections={setSelections} selections={selections} />)}
            </div>
        </>
    );
};

export default Question;