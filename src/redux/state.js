import { rerenderEntireTree } from "./../render";

let state = {
  profilePage: {
    postData: [
      { id: 1, message: "Hi, how are you?", likesCount: 12 },
      { id: 2, message: "I'ts my first post", likesCount: 11 },
      { id: 3, message: "I'm use arr map", likesCount: 18 },
      { id: 4, message: "I'ts work", likesCount: 23 },
    ],
    newPostText: "this area take value from state",
  },
  dialogsPage: {
    messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your react" },
      { id: 3, message: "yo" },
      { id: 4, message: "yo" },
      { id: 5, message: "yo" },
    ],
    dialogsData: [
      { id: 1, name: "Alex" },
      { id: 2, name: "Bohdan" },
      { id: 3, name: "Maxim" },
      { id: 4, name: "Vanya" },
      { id: 5, name: "Victor" },
      { id: 6, name: "Yulian" },
    ],
  },
  friendPage: {
    avatarData: [
      {
        id: 1,
        name: "Alex",
        img: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
      },
      {
        id: 2,
        name: "Bohdan",
        img: "https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg",
      },
      {
        id: 3,
        name: "Stepan",
        img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
      },
      {
        id: 4,
        name: "Robert",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcMKh11l9FLRwa2kTls-6aFrVZPyiZZ6RKBuCUpHruEvKcw9-Y37ckv-ZrlxCLTS4Vw0&usqp=CAU",
      },
      {
        id: 5,
        name: "Ivan",
        img: "https://cdn-icons-png.flaticon.com/512/194/194931.png",
      },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;

//props.updateNewPostText("");
