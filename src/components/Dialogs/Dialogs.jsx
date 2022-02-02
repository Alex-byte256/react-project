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
	return (
<div className={s.dialogs}>
<div className={s.dialogs_items} >
	<DialogItem name="Alex" id="1" />	
	<DialogItem name="Bohdan" id="2" />	
	<DialogItem name="Maxim" id="3" />	
	<DialogItem name="Vanya" id="4" />	
	<DialogItem name="Victor" id="5" />	
	<DialogItem name="Yulian" id="6" />	
</div>
<div className={s.messages}>
	<Message message="Hi" />
	<Message message="How is your react" />
	<Message message="yo" />
	<Message message="yo" />
	<Message message="yo" />
</div>
</div>
);
}

export default Dialogs;