import React from 'react'
import classes from './Modal.css';
import Auxiliary from '../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';



const modal = (props) => {
    return (
        <Auxiliary>
        <div onClick={props.hide} className={classes.Modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div> 
        {props.show && <Backdrop hide={props.hide}/>}
        </Auxiliary>
    )
} 

export default modal
