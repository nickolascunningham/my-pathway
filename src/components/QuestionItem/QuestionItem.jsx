import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

//Material-UI imports 
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function QuestionItem(props) {

  const store = useSelector(store => store);
  const test = useSelector(store => store.test.selected);
  
  const question = props.question;
  
  const dispatch = useDispatch();
  const [heading, setHeading] = useState('Functional Component');
  
  const selectedQuestion = useSelector(store => store.question.selected);

  const setSelectedQuestion = (_question) => {
    console.log('clicked edit question');
    dispatch({ type: 'SET_SELECTED_QUESTION', payload: _question });
  }

  const deleteQuestion = () => {
    dispatch({ type: 'DELETE_QUESTION', payload: { question_id: question.id, parent_test_id: test.id } }); 
  }

  return (
    <div>
      <h2>I'm a question</h2>
      <p>stringified question:{JSON.stringify(question)}</p>

      <Link to="/test" onClick={() => setSelectedQuestion(question)}>
        {/* when the edit button is clicked, this will move user to the /test page, and set the selectedTest to this one */}
        <button>Edit this Question</button>
        <button onClick={deleteQuestion}>Delete this Question</button>
      </Link>
    </div>
    
  );
}

export default QuestionItem;