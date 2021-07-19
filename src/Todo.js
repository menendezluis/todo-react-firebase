import React from 'react'
import {List, ListItem,ListItemText} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import db from './firebase';
import Swal from 'sweetalert2'

function Todo(props){

  const edit = (e) => {
     Swal.fire({
  icon: 'error',
  title: 'Editar...',
  text: 'Carnet incorrecto!',
  showConfirmButton: false
})
}
  return (
    <>
    
    <List>
      <ListItem>
      <ListItemText primary={props.text.task} secondary="Deadline" />
      </ListItem>
      <button onClick={(e) => edit()}> Edit </button>
      <HighlightOffIcon onClick = {event => db.collection('todos').doc(props.text.id).delete()}> </HighlightOffIcon>
      </List>
      
      </>
    )
}

export default Todo