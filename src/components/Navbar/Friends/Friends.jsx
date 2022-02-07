import Avatar from "./Avatar/Avatar";
import f from "./Friends.module.css";

const Friends = (props) =>{
return(
<div>
	<h1 className={f.item}>Friends</h1>
<Avatar friends={props.friends}/>
</div>
);
}


export default Friends;