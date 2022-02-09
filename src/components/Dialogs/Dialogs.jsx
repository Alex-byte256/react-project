import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';




const Dialogs = (props) =>{

	let mesres = React.createRef();

	let addMessage = () =>{
		props.addMessage();
	}

	let onMessageChange = () =>{
		let text = mesres.current.value;
		props.updateNewMessageText(text);
	}
	
	let dialogsElements = props.dialogs
	.map((d)=><DialogItem name={d.name} id={d.id} />);
	
	
	let messagesElements = props.messages
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
	</div>
	<div>
		<textarea onChange={onMessageChange} ref={mesres} value={props.messageText} />
	</div>
	<div>
		<button onClick={addMessage}>Add message</button>
		</div>
</div>
);
}

export default Dialogs;