import a from "./Avatar.module.css"
import AvatarItem from "./AvatarItem/AvatarItem";


const Avatar = (props) => {
	
	let watchAvatar = props.friends
	.map((a)=><AvatarItem name={a.name} img={a.img} />)
	return(
<div>
	<div className={a.wrapper}>
	{watchAvatar}
	</div>
	
</div>
	);
}

export default Avatar;