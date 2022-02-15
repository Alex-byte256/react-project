import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) => {

console.log(props.posts)

	let postElements =props.posts
.map(p => <Post message={p.message} like={p.likesCount} />)

let newPostElement = React.createRef();

let onAddPost = () => {
	props.addPost();
}

let onPostChange = () =>{
	let text = newPostElement.current.value;
   props.updateNewPostText(text);
}

	return (
		<div className={s.postsBlock} >
			<h3>My post</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postElements}
			</div>
		</div>
	);
}

export default MyPosts;