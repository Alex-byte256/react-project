import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) => {



	let postElements =props.posts
.map(p => <Post message={p.message} like={p.likesCount} />)

let newPostElement = React.createRef();

let addPost = () => {
	props.dispatch({type:"ADD-POST"});
}

let onPostChange = () =>{
	let text = newPostElement.current.value;
	props.dispatch({type:"UPDATE-NEW-POST-TEXT", newText: text});
}

	return (
		<div className={s.postsBlock} >
			<h3>My post</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.postText} />
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postElements}
			</div>
		</div>
	);
}

export default MyPosts;