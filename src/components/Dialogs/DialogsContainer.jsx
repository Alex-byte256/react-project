import React from 'react';
import {addMessageActionCreator , updateNewMessageText} from "../../redux/dialogs-reduser"
import Dialogs from './Dialogs';



const DialogsContainer = (props) =>{

	let state = props.store.getState();

	let addMessage = () =>{
		props.store.dispatch(addMessageActionCreator());
	}

	let onMessageChange = (text) =>{
		props.store.dispatch(updateNewMessageText(text));
	}
	
	return ( <Dialogs state={state} addMessageActionCreator={addMessage} updateNewMessageText={onMessageChange}/> );
}

export default DialogsContainer;