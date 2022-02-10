const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReduser = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageText = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text,
  };
};

export default dialogsReduser;
