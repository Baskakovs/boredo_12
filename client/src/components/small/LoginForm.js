import styled from "styled-components";

//import redux
import { useDispatch, useSelector } from "react-redux"
import { setLoginForm, setUser } from "../../slices/loginSlice"
import { setErrors } from "../../slices/errorsSlice"

import { useHistory } from "react-router-dom";

//components
import InputBox from "./Input";
import ButtonBlueLarge from "./ButtonBlueLarge";
import NoBorderBlueButton from "./NoBorderBlueButton";
import BoredoTitle from "./BoredoTitle";
const Box = styled.div`
width: 338px;
height: 259px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 8px;
`

function LoginForm(){
    const dispatch = useDispatch()
    const history = useHistory()
    const loginForm = useSelector((state) => state.login.loginForm)

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch(setLoginForm({
            ...loginForm,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(loginForm),
        })
        .then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    dispatch(setUser(user))
                });
            }else{
                res.json().then((errors) => {
                    dispatch(setErrors(errors))
                });
            }
        })
    }

    return(
        <Box>
            <BoredoTitle>Boredo</BoredoTitle>
            <InputBox
            placeholder="Email"
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleChange}
            />
            <InputBox
            placeholder="Password"
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleChange}
            />
            <ButtonBlueLarge onClick={handleSubmit}>Log In</ButtonBlueLarge>
            <NoBorderBlueButton>Forgot Password?</NoBorderBlueButton>
        </Box>
    )
}
export default LoginForm;