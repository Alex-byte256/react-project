import { addPost } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) =>{

	return(
<div>
	<ProfileInfo/>
	<MyPosts addPost={props.addPost} posts={props.posts} />
</div>
	);
}

export default Profile;