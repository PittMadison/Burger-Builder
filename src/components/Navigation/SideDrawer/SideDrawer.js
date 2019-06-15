import React from 'react'
import classes from './SIdeDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Modal from '../../../UI/Modal/Modal';
import Auxiliary from '../../../hoc/Auxiliary';


const sideDrawer = (props) => {
    return (
        <Auxiliary>
            <Modal/>
            <div className={props.open ?
            [classes.SideDrawer, classes.Open].join(' ') :
            [classes.SideDrawer, classes.Close].join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
            {props.open && <Backdrop hide={props.closed}/>}
        </Auxiliary>
    );
};

export default sideDrawer
