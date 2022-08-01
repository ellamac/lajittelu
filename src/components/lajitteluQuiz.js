import React, { useState, useEffect } from 'react';
import Question from './question';
import Results from './results';
import questions from '../data/questions';

const LajitteluQuiz = props => {

    const [selections, setSelections] = useState('');
    const [questionGoingOn, setQuestionGoingOn] = useState(0);

    useEffect(() => {
        setQuestionGoingOn(questionGoingOn + 1);
        console.log(questionGoingOn);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selections]);


    return (
        <div className="quiz">
            {questionGoingOn < questions.length
                ? <Question question={questions[questionGoingOn]} selections={selections} setSelections={setSelections} />
                : <Results selections={selections} />
            }
        </div>
    );
};

export default LajitteluQuiz;