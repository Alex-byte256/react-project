import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{
	return(
        <div>
          My post
          <div>
				 <textarea></textarea>
				 <button>Add post</button>
			 </div>
          <Post message='Hi, how are you?' like='13' />
          <Post message="I'ts my first post" like='43' />
        </div>
	);
}

export default MyPosts;