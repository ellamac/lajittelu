import React from 'react';
import Option from './option';

const Question = ({ question, selections, setSelections }) => {

    return (
        <>
            <h2 className="question">{question.question}</h2>

            {Object.entries(question.options).map(o => <Option option={o} setSelections={setSelections} selections={selections} />)}

        </>
    );
};

export default Question;