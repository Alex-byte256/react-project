import s from './ProfileInfo.module.css';

const ProfileInfo = () =>{
	return(
	<div> 
        <div>
          <img className={s.img} src="https://fourthavenue.org/wp-content/uploads/2017/09/MINT-BANNER-1200-px-x-200px.jpg" />
        </div>
        <div className={s.descriptionBlock} >ava + description</div>    
   </div>
	);
}

export default ProfileInfo;