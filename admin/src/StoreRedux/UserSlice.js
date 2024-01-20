// reducers/userReducer.js
import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'user',
  initialState: {
    // Define your initial state here
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Define your actions and reducers here
    setUser: (state, action) => { //action 1
      state.data =  action.payload;
    },
    setLoading: (state, action) => { //action 2
      state.loading = action.payload;
    },
    setError: (state, action) => { //action 3
      state.error = action.payload;
    },
  },
});


export const selectUser=(state) => state.user.data; //useselector to access globbally user data
export const selectUserLoading=(state) => state.user.loading; //useselector to access globbally user data
export const selectUserError=(state) => state.user.error; //useselector to access globbally user data

export const { setUser, setLoading, setError } = userSlice.actions; // actions 
export default userSlice.reducer;

// userSlice.js CRUD=======>

// import { createSlice } from '@reduxjs/toolkit';

// const userSlice = createSlice({
//   name: 'users',
//   initialState: [],
//   reducers: {
//     addUser: (state, action) => {
//       state.push(action.payload);
//     },
//     updateUser: (state, action) => {
//       const { id, updatedData } = action.payload;
//       const userIndex = state.findIndex((user) => user.id === id);

//       if (userIndex !== -1) {
//         state[userIndex] = { ...state[userIndex], ...updatedData };
//       }
//     },
//     removeUser: (state, action) => {
//       return state.filter((user) => user.id !== action.payload);
//     },
//   },
// });

// export const { addUser, updateUser, removeUser } = userSlice.actions;
// export const selectUsers = (state) => state.users;
// export default userSlice.reducer;
