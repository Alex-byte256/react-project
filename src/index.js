import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let postData = [
  { id: 1, message: "Hi, how are you?", likesCount: 12 },
  { id: 2, message: "I'ts my first post", likesCount: 11 },
  { id: 3, message: "I'm use arr map", likesCount: 18 },
  { id: 4, message: "I'ts work", likesCount: 23 },
];

let dialogsData = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Bohdan" },
  { id: 3, name: "Maxim" },
  { id: 4, name: "Vanya" },
  { id: 5, name: "Victor" },
  { id: 6, name: "Yulian" },
];

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How is your react" },
  { id: 3, message: "yo" },
  { id: 4, message: "yo" },
  { id: 5, message: "yo" },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      postData={postData}
      messagesData={messagesData}
      dialogsData={dialogsData}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
