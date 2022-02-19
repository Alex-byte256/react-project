import React from 'react';
import { connect } from 'react-redux';
import {addPostActionCreator , updateNewPostTextActionCreator} from "../../../redux/profile-reduser"
import MyPosts from './MyPosts';




let mapStateToProps = (state) =>{
	return{
		posts:state.profilePage.postData,
		newPostText: state.profilePage.newPostText
	}
}
let mapDispatchToProps = (dispatch) =>{
	return{
		addPost: () => {
			dispatch(addPostActionCreator());
		},
		updateNewPostText: (text) => {
			let action = updateNewPostTextActionCreator(text);
			dispatch(action);
		}
	}
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;