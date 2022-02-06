import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) =>{

/* 	let postData = [
		{id:1, message:"Hi, how are you?", likesCount: 12},
		{id:2, message:"I'ts my first post", likesCount: 11},
		{id:3, message:"I'm use arr map", likesCount: 18},
		{id:4, message:"I'ts work", likesCount: 23}
	] */

  let postElements = props.posts
  .map(p => <Post message={p.message} like={p.likesCount} />)
	


  return(
        <div className={s.postsBlock} >
          <h3>My post</h3>
          <div>
				 <div>
				 	<textarea></textarea>
				 </div>
				 <div>
				 	<button>Add post</button>
				 </div>
			 </div>
			 <div className={s.posts}>
          	{postElements}
			 </div>
        </div>
	);
}

export default MyPosts;