import { connect } from "react-redux";
import {followAC, unfollowAC, setUsersAC , setCurrentPageAC, setUsersTotalCountAC, ToggleIsFetchingAC} from  "../../redux/users-reduser"
import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import preloader from './../../assets/images/preloader.svg';
import Preloader from "../common/preloader/Preloader";
class UsersContainer extends React.Component {

	componentDidMount () {
		this.props.ToggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			 .then(response => {
				 this.props.ToggleIsFetching(false);
				  this.props.setUsers(response.data.items);
				  this.props.setTotalUsersCount(response.data.totalCount);
			 });
	}

		onPageChanged = (pageNumber) => {
			this.props.ToggleIsFetching(true);
			this.props.setCurrentPage(pageNumber)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			 .then(response => {
				  this.props.ToggleIsFetching(false);
				  this.props.setUsers(response.data.items);
			 });
		}

	render(){
		return <>
		{this.props.isFetching ? <Preloader /> : null}
		<Users totalUsersCount={this.props.totalUsersCount}
		pageSize={this.props.pageSize}
		currentPage={this.props.currentPage}
		onPageChanged={this.onPageChanged}
		users={this.props.users}
		follow={this.props.follow}
		unfollow={this.props.unfollow}
		/>
		</>
	}
}


let mapStateToProps = (state) =>{
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	}
}

let mapDispatchToProps = (dispatch) =>{
	return{
		follow: (userId)=> {
			dispatch(followAC(userId));
		},
		unfollow: (userId)=> {
			dispatch(unfollowAC(userId));
		},
		setUsers: (users)=> {
			dispatch(setUsersAC(users));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setUsersTotalCountAC(totalCount))
		},
		ToggleIsFetching: (isFetching) => {
			dispatch(ToggleIsFetchingAC(isFetching))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);