import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) =>{
	return (
		<div className={s.dialog + ' ' + s.active} >
		<NavLink to={"/dialogs/" + props.id} >{props.name}</NavLink>
	</div>
	);
}

const Message = (props) =>{
	return(
<div   className={s.message}>{props.message}</div>
	);
}



const Dialogs = (props) =>{

	let dialogsData = [
		{id:1, name:"Alex"},
		{id:2, name:"Bohdan"},
		{id:3, name:"Maxim"},
		{id:4, name:"Vanya"},
		{id:5, name:"Victor"},
		{id:6, name:"Yulian"}
	]

	let messagesData = [
		{id:1, message:"Hi"},
		{id:2, message:"How is your react"},
		{id:3, message:"yo"},
		{id:4, message:"yo"},
		{id:5, message:"yo"}
	]

	let dialogsElements = dialogsData
	.map((d)=><DialogItem name={d.name} id={d.id} />);
	
	
	let messagesElements = messagesData
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