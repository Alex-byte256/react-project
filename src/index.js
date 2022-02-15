import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import store from "./redux/redux-store";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        store={store}
        dispatch={store.dispatch.bind(store)}
        dialogs={store.getState().dialogsPage.dialogsData}
        messages={store.getState().dialogsPage.messagesData}
        friends={store.getState().friendPage.avatarData}
        messageText={store.getState().dialogsPage.newMessageText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
/* 
store.subscribe(rerenderEntireTree); */
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
