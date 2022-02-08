import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) => {



	let postElements =props.posts
.map(p => <Post message={p.message} like={p.likesCount} />)

let newPostElement = React.createRef();

let addPost = () => {
	let text = newPostElement.current.value;
	alert(text);
}

	return (
		<div className={s.postsBlock} >
			<h3>My post</h3>
			<div>
				<div>
					<textarea ref={newPostElement}></textarea>
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