import s from './Dialogs.module.css';

const Dialogs = (props) =>{
	return (
<div className={s.dialogs}>
<div className={s.dialogs_items} >
	<div className={s.dialog + ' ' + s.active} >
		Alex
	</div>
	<div className={s.dialog} >
		Bohdan
	</div>
	<div className={s.dialog} >
		Maxim
	</div>
	<div className={s.dialog} >
		Vanya
	</div>
	<div className={s.dialog} >
		Victor
	</div>
	<div className={s.dialog} >
		Yulian
	</div>
</div>
<div className={s.messages}>
	<div className={s.message}>Hi</div>
	<div className={s.message}>How is your react</div>
	<div className={s.message}>yo</div>
</div>
</div>
);
}

export default Dialogs;