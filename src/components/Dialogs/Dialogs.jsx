import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) =>{

	console.log(props.state);
	
	let mesres = React.createRef();



	let addMessage = () =>{
		props.addMessageActionCreator();
	}

	let onMessageChange = () =>{
		let text = mesres.current.value;
		props.updateNewMessageText(text);
	}
	
	let dialogsElements = props.state.dialogsPage.dialogsData
	.map((d)=><DialogItem name={d.name} id={d.id} />);
	
	
	let messagesElements = props.state.dialogsPage.messagesData
	.map((m) => <Message message={m.message} />);

	return (
<div className={s.dialogs}>
	<div className={s.dialogs_items} >
  		{
		 	 dialogsElements
 		 }
	</div>
	<div className={s.messages}>
		{messagesElements}
		<div>
		<textarea onChange={onMessageChange} ref={mesres} value={props.state.dialogsPage.newMessageText} />
	</div>
	<div>
		<button onClick={addMessage}>Add message</button>
		</div>
	</div>
</div>
);
}

export default Dialogs;