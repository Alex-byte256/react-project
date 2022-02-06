import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';

const Message = (props) =>{
	return(
<div   className={s.message}>{props.message}</div>
	);
}



const Dialogs = (props) =>{

	

	let dialogsElements = props.dialogsData
	.map((d)=><DialogItem name={d.name} id={d.id} />);
	
	
	let messagesElements = props.messagesData
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
</div>
);
}

export default Dialogs;