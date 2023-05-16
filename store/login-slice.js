import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
	isValid: true,
};

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		login(state, _) {
			state.isAuth = true;
		},
		logout(state, _) {
			state.isAuth = false;
		},
		setIsValid(state,action) {
			state.isValid = action.payload;
		},
	},
});

export const loginActions = loginSlice.actions;
export default loginSlice;
