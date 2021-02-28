import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import { FormControl, Input, InputLabel, Button } from '@material-ui/core';
import firebase from 'firebase';

function App() {
  const [todos, setTodo] = useState([]);
  const [input, setinput] = useState('');
  
  //hook, that runs when app loads
  useEffect(()=>{
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodo(snapshot.docs.map(doc =>( { id: doc.id, todo: doc.data().todo})))
    })
  }, []);




  const addTodo = (event)=>
  {
  event.preventDefault(); 

    db.collection('todos').add(
      {
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
    )
    //setTodo([ ...todos, input]);
    setinput('');
  }

  return (
    <div className="App">

      <h1> TODO APP 🔥 </h1>
      <br>
      </br>
      <form>
      <FormControl>
  <InputLabel>Write ToDo's ✅ </InputLabel>
    <Input value={input} onChange={event => setinput(event.target.value)} />
    <Button disabled={!input} type ="submit" onClick={addTodo} variant="contained" color="primary">
      Add TODO
</Button>
  </FormControl>

     
      </form>
      
      <ul>
        {todos.map(todo =>(
       <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
