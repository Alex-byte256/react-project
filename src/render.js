import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/state";

export let rerenderEntireTree = (state) => {
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
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
