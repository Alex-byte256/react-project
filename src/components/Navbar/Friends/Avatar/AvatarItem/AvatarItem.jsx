import i from "./AvatarItem.module.css"


const AvatarItem = (props) => {
	return (
<div className={i.person}>
		<div className={i.avatar_img}>
    <img src={props.img} alt="no img"/>
	</div>
	<div className={i.name}>
{props.name}
	</div>
		</div>
	
	);
}

export default AvatarItem;