import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        login: true,
        signup: false,
        signUpForm: {
            name: "",
            email: "",
            date_of_birth: "dd-mm-yyyy",
            password: "",
            password_confirmation: "",
        },
        loginForm:{
            email: "",
            password: "",
            date_of_birth: "",
        },
        user: null
    },
    reducers: {
        setLogin: (state) => {
            state.login = !state.login;
            state.signup = !state.signup;
        },
        setSignupForm: (state, action) => {
            state.signUpForm = action.payload;
        },
        setLoginForm: (state, action) => {
            state.loginForm = action.payload;
        },
        setUser: (state, action) =>{
            state.user = action.payload;
        }
    }
});

export const { setLogin, setSignupStage1, setSignupForm, setUser, setLoginForm } = loginSlice.actions;
export default loginSlice.reducer;
