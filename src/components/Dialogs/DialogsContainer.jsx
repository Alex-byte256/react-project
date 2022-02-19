import React from 'react';
import { connect } from 'react-redux';
import {addMessageActionCreator , updateNewMessageText} from "../../redux/dialogs-reduser"
import Dialogs from './Dialogs';




let mapStateToProps = (state) => {
return {
state: state,
}
}
let mapDispatchToProps = (dispatch) => {
return {
	addMessageActionCreator: () => {
		dispatch(addMessageActionCreator());
	},
	updateNewMessageText: (text) => {
		dispatch(updateNewMessageText(text));
	}
}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;