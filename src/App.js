import React, { useState, useEffect } from 'react';
import Todo from './Todo'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  //const sum = 1 + 1;
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(''); //more like the input area(2)
  //console.log('🔪', input);

 // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
 useEffect(()=> {
   //this code will fire once the app loads
   db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot=> {
     //console.log(snapshot.docs.map(doc => doc.data()));
     setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
   })
  }, []); 

  const addTodo = (event) => {
    // this will fire off when we click the button

    event.preventDefault(); //wont refresh the page when u submit
    ///console.log( '💀' , 'AAHH!!');

    db.collection('todos').add({
      todo: input, //THIS WILL ADD TO THE DB WHICH WILL FIRE OFF A SNAPSHOT
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    //setTodos([...todos, input /*spread operator, basically we have the array and the spread keeps what ever we have in the short term memory*/ 
    //]);
    setInput(''); //clears the input filed after hitting enter
  }

  return (
    <div className="App">
      <h1> 📝 TO-DO LIST 📝  </h1>

      <form>
      
        <FormControl>
          <InputLabel> 🖊️ Write a Todo</InputLabel>
          <Input value = {input} onChange= {event => setInput(event.target.value)} /> 
        </FormControl>


        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      {/* <button type='submit' onClick={addTodo}> Add Todo </button> */}
      </form>
      
      <ul>
        {todos.map(todo => ( //map is a looping function, map goes through that array, gives the first element of the array and then the second element in the array (1)
          <Todo todo={todo}/>
         // <li>{todo}</li> //going through the todos array 

        ))} 
        
      </ul> 
    </div>
  );
}
export default App;
