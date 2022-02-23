const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFFOLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoURL: "https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png",
      followed: true,
      fullName: "Alex",
      status: "prosto waiting",
      location: { city: "Lviv", country: "Ukraine" },
    },
    {
      id: 2,
      photoURL: "https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png",
      followed: false,
      fullName: "Bohdan",
      status: "I am taxi driver",
      location: { city: "Kiev", country: "Ukraine" },
    },
    {
      id: 3,
      photoURL: "https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png",
      followed: false,
      fullName: "Maxim",
      status: "go to trip",
      location: { city: "Krakov", country: "Poland" },
    },
  ],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReduser;
