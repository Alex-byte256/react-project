import React from 'react';
import {addMessageActionCreator , updateNewMessageText} from "../../redux/dialogs-reduser"
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';



const DialogsContainer = () =>{

return ( 
<StoreContext.Consumer>
{ (store) => 
{
	let state = store.getState();

	let addMessage = () =>{
		store.dispatch(addMessageActionCreator());
	}

	let onMessageChange = (text) =>{
		store.dispatch(updateNewMessageText(text));
	}
	return(<Dialogs state={state} addMessageActionCreator={addMessage} updateNewMessageText={onMessageChange}/>);
}
}
	</StoreContext.Consumer>
	);
}

export default DialogsContainer;