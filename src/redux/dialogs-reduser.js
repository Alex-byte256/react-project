const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your react" },
    { id: 3, message: "yo" },
    { id: 4, message: "yo" },
    { id: 5, message: "yo" },
  ],
  newMessageText: "message from state",
  dialogsData: [
    { id: 1, name: "Alex" },
    { id: 2, name: "Bohdan" },
    { id: 3, name: "Maxim" },
    { id: 4, name: "Vanya" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Yulian" },
  ],
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 6,
        message: state.newMessageText,
      };
      let copyState = { ...state };
      copyState.messagesData = [...state.messagesData];
      copyState.messagesData.push(newMessage);
      copyState.newMessageText = "";
      return copyState;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let copyState = { ...state };
      copyState.newMessageText = action.newMessageText;
      return copyState;
    }
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
