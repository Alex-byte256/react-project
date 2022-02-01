import s from './Post.module.css';

const Post = () =>{
	return(       
            <div className={s.item}>
					<img src='https://cdn-icons-png.flaticon.com/512/236/236832.png'/>
					post 1
					<div>
					<span>like</span>
					</div>
					</div>
	);
}

export default Post;