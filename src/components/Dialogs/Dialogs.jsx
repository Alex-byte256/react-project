import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) =>{
	return (
<div className={s.dialogs}>
<div className={s.dialogs_items} >
	<div className={s.dialog + ' ' + s.active} >
		<NavLink to="/dialogs/1" > Alex </NavLink>
	</div>
	<div className={s.dialog} >
	<NavLink to="/dialogs/2" >Bohdan </NavLink>
	</div>
	<div className={s.dialog} >
	<NavLink to="/dialogs/3" >Maxim</NavLink>
	</div>
	<div className={s.dialog} >
	<NavLink to="/dialogs/4" >Vanya</NavLink>
	</div>
	<div className={s.dialog} >
	<NavLink to="/dialogs/5" >Victor</NavLink>
	</div>
	<div className={s.dialog} >
	<NavLink to="/dialogs/6" >Yulian</NavLink>
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