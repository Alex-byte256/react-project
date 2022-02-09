import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import store from "./redux/state";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        addPost={store.addPost.bind(store)}
        posts={store.getState().profilePage.postData}
        dialogs={store.getState().dialogsPage.dialogsData}
        messages={store.getState().dialogsPage.messagesData}
        friends={store.getState().friendPage.avatarData}
        postText={store.getState().profilePage.newPostText}
        updateNewPostText={store.updateNewPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        messageText={store.getState().dialogsPage.newMessageText}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
