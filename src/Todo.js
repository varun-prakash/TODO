import { ListItem, ListItemText, List, } from '@material-ui/core'
import React, {useState} from 'react'
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';


function Todo(props) {

    const useStyles = makeStyles((theme) => ({
        paper: {
          margin: 'auto',
          marginTop: 100,
          width: '50%',
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));


    const classes = useStyles();
    const [open, setopen] = useState(false);
    const [input, setinput] = useState('');

    const updateTodo = ()=>{

        db.collection('todos').doc(props.todo.id).set({todo: input}
            , {merge: true})
        setopen(true);
    }

    return (
        <div>
             <Modal
        open={open}
        onClose={e => setopen(false)}
      >
           <div  className={classes.paper}>
      <h2 >Edit TODO</h2>
      <input placeholder ={props.todo.todo} value={input} onChange={ event => setinput(event.target.value)} /> 
      
      <DoneIcon onClick = {updateTodo} />
      <CancelIcon onClick= {e => setopen(false)} />
      
    </div>

      </Modal>

      
            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary = "Deadline 🕗"  />
                </ListItem>
                <EditIcon onClick= {e=>setopen(true)}/>
                <DeleteForeverIcon onClick={(event)=>{db.collection('todos').doc(props.todo.id).delete()}} />
            </List>

        </div>
    )
}

export default Todo
