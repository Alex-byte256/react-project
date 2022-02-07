import s from './../Dialogs.module.css';


const Message = (props) =>{
	return(
<div className={s.message}>
	<span className={s.wrapper}>
	{props.message}
	</span>

	</div>

	);
}

export default Message;