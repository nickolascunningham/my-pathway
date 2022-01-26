const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
router.get('/selected', (req, res) => {
  //@nickolas todo (from Amanda - thanks)
  //this should select * from the test table,
  //  plus make a join with the questions table to get all the questions on this test.
  //this will be used when a proctor is viewing a test that's already been created
  //use variable req.params.test_id for the test id value
  //send back the results.rows
});
router.get('/all', (req, res) => {
  //@nickolas todo (from Amanda - thanks)
  //get * from the tests table
  //this will be used when a proctor is viewing all the tests that have been created
  //send back the results.rows
});
router.post('/', (req, res) => {
  //@nickolas todo (from Amanda - thanks)
  //post a new entry to the test table
  //this will happen when the proctor is creating a test
  //req.body is the test object. the columns are in:
  //req.body.title, req.body.points_possible, req.body.test_time_limit,
  //req.body.question_shuffle, req.body.test_attempt_limit, and req.body.created_by
  //note that some columns are 'missing' from that list:
  //for create_date you can use NOW() which will create a timestamp
  //for last_modified_by, re-use req.body.created_by
  //for last_modified_date, also use NOW()
  //at the end of the query plz add the following 'RETURNING' stuff
  //which will let me utilize those dates created by NOW() and also the id:
  //  RETURNING id, create_date, last_modified_date;
  //finally plz send back results.rows[0] rather than results.rows
  //i did something similar to all that ^^ for solo so can help with any of that if needed!!
  //same with Chris too, I believe
});
router.put('/:id', (req, res)=> {
  //@nickolas todo (from Amanda - thanks)
  //this runs when a proctor edits any of the fields on the test settings, e.g. time limit.
  //even if they only update one thing, we will update on allll the columns,
  //even if it's to the same value as before (much simpler!)
  //the data you receive here will be very similar to the post, above
  //req.params.id is the id of the test
  //req.body is the test object, again containing almost all the same properties as in the post, above
  //the only difference is instead of created_by, we are sending last_modified_by
  //for last_modified_date use NOW()
  //and don't do anything with create_date or created_by
  //you don't need to do RETURNING
  //send a status 200 back
})
router.delete('/:id', (req,res)=> {
  //@nickolas todo (from Amanda - thanks)
  //delete the test with id req.params.id
  //send back status 200
});


//QUESTIONS
router.get('/question/all', (req, res) => {
  //@nickolas todo (from Amanda - thanks)
  //get all questions for this specific test
  //this will be used when a proctor is viewing an already created test with questions already on it

  //req.params.test_id is the test id
  //send back the results.rows
});
router.post('/question', (req, res) => {
  //@nickolas todo (from Amanda - thanks)
  //post a new entry to the question table
  //this will happen when the proctor is creating a test and adding a question to it

  //req.body is the test object. the columns are in
  //req.body. ...
  // ... point_value, type, required, question, option_one, option_two ... option_six, answer, status
  // ... parent_test_id, created_by

  //like with the test post above:
  //for create_date and last_modified_date, you can use NOW() 
  //for last_modified_by, re-use req.body.created_by

  //at the end of the query plz add the following 'RETURNING' stuff
  //which will let me utilize those dates created by NOW() and also the id:
  //  RETURNING id, create_date, last_modified_date;

  //finally plz send back results.rows[0] rather than results.rows

  //i did something similar to all that ^^ for solo so can help with any of that if needed!!
  //same with Chris too, I believe
});
router.put('/question/:id', (req, res)=> {
  //@nickolas todo (from Amanda - thanks)
  //this is very analogous to the .put for test, higher above.

  //data received is the same as for .post /question, right above.

  //req.params.id is the id of the question

  //req.body is the question object, again containing almost all the same properties as in the post, right above this

  //the only difference is instead of created_by, we are sending last_modified_by
  //for last_modified_date use NOW()

  //and don't do anything with create_date or created_by
  //you don't need to do RETURNING
  //send a status 200 back
})

router.delete('/question/:id', (req,res)=> {
  //@nickolas todo (from Amanda - thanks)
  //delete the question with id req.params.id
  //send back status 200
});
module.exports = router;
