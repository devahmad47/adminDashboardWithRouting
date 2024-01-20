// // reducers/userReducer.js
// import { createSlice } from '@reduxjs/toolkit';
// const productSlice = createSlice({
//   name: 'product',
//   initialState: {
//     // Define your initial state here
//     data: [],
//     // loading: false,
//     error: null,
//   },
//   reducers: {
//     // Define your actions and reducers here
//     setUser: (state, action) => { //action 1
//       state.data =  action.payload;
//     },
//     setLoading: (state, action) => { //action 2
//       state.loading = action.payload;
//     },
//     setError: (state, action) => { //action 3
//       state.error = action.payload;
//     },
//   },
// });


// export const selectUser=(state) => state.user.data; //useselector to access globbally user data
// export const selectUserLoading=(state) => state.user.loading; //useselector to access globbally user data
// export const selectUserError=(state) => state.user.error; //useselector to access globbally user data

// export const { setUser, setLoading, setError } = productSlice.actions; // actions 
// export default productSlice.reducer;
