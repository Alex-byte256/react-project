import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { addPost } from "./redux/state";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friends={props.friends} />
        <div className="app-wrapper-content">
          <Routes>
            {/*  <Route path="/profile" render={() => <Profile />} />
            <Route path="/dialogs/*" render={() => <Dialogs />} /> */}
            <Route
              element={
                <Profile
                  addPost={props.addPost}
                  postText={props.postText}
                  posts={props.posts}
                  updateNewPostText={props.updateNewPostText}
                />
              }
              path="/profile"
            />
            <Route
              element={
                <Dialogs dialogs={props.dialogs} messages={props.messages} />
              }
              path="/dialogs/*"
            />
            <Route element={<News />} path="/news" />
            <Route element={<Music />} path="/music" />
            <Route element={<Settings />} path="/settings" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
