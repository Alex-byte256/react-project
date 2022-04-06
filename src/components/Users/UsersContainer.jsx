import { connect } from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC, setUsersAC} from  "../../redux/users-reduser"

let mapStateToProps = (state) =>{
	return {
		users: state.usersPage.users
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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);