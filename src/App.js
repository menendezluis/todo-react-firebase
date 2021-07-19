import React, {useState, useEffect} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import Todo from './Todo'
import firebase from 'firebase'

function App() {
  
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  // cuando la app cargue, listaremos la base de datos para actualizar los todos que hay que agregar o remover
  useEffect(()=> {
    //este codigo inicia cuando carga app.js
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id,
      task: doc.data().task,
      timestamp: doc.data().timestamp
      } )))
    })
  },[]);
  
  const addTodo = (event) => {
    // este se disparara al darle clic al boton
    
    event.preventDefault(); //no actualizar la pagina
    
    db.collection('todos').add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    console.log('👽','Funcionando')
    //setTodos([...todos, input])
    setInput('');
  }

  
  return (
    <div className="App">
  
        <p>
          Hello <code>Coders</code>👌
        </p>
        <form>
        <FormControl>
        <InputLabel> Write a Todo</InputLabel>
        <Input value={input}
        onChange={event => setInput(event.target.value)}/>
        
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
      Add Todo
      </Button>
      </form>
      <ul>
      {todos.map(todo => (
      <Todo text={todo}/>
      ))}
      </ul>
        
    </div>
  );
}

export default App;
