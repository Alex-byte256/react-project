import { addPost } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) =>{

	return(
<div>
	<ProfileInfo/>
	<MyPosts  postText={props.postText} dispatch={props.dispatch} posts={props.posts} />
</div>
	);
}

export default Profile;