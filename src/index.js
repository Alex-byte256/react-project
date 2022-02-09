import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./redux/state";
import "./index.css";
import {
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessageText,
} from "./redux/state";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        addPost={addPost}
        posts={state.profilePage.postData}
        dialogs={state.dialogsPage.dialogsData}
        messages={state.dialogsPage.messagesData}
        friends={state.friendPage.avatarData}
        postText={state.profilePage.newPostText}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        messageText={state.dialogsPage.newMessageText}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
