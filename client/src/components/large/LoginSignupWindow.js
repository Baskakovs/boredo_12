import styled from "styled-components";
import LoginForm from "../small/LoginForm"
import SignUpForm from "../small/SignupForm"
import Divider from "../small/Divider";
import AlternativeLogin from "../large/AlternativeLogin";
import NoBorderBlueButton from "../small/NoBorderBlueButton";

//redux imports
import { useSelector, useDispatch } from "react-redux"
import { setLogin, setUser } from "../../slices/loginSlice"

import { useHistory } from "react-router-dom";


import { useEffect } from "react"
const Box = styled.div`
  box-sizing: border-box;
  width: 360px;
  display: flex;
  flex-direction: column; /* Adjusted to column layout */
  justify-content: center;
  align-items: center; /* Adjusted to center alignment */
  padding: 32px;
  gap: 10px;
  background: #FFFFFF;
  border-radius: 4px;
`;

const ChangeAcion = styled.span`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;

width: 338px;
height: 48px;
font-style: normal;
font-size: 14px;
line-height: 17px;
`

function LoginSignupWindow({children}){
    const history = useHistory();
    const login = useSelector((state) => state.login.login)
    const dispatch = useDispatch();
    function handleActionChange(){
        dispatch(setLogin(!login))
    }

    // const signInCallback = (result) => {
    //     if (result.credential) {
    //       const params = { token: result.credential };
    //       fetch(`/users/google`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(params),
    //       })
    //       .then((res) => {if(res.ok){
    //         res.json().then((data) => {
    //             dispatch(setUser(data))
    //             history.push("/")
    //         })
    //       }
    //     })
    //     }
    // }

    // useEffect(() => {
        /* global google */
        // if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
        //     google.accounts.id.initialize({
        //     client_id:"767405110986-cl5aotldrqd1k03p18tsc7apq3leedpr.apps.googleusercontent.com",
        //     callback: signInCallback,
        //     cancel_on_tap_outside: false,
        //     })
            // google.accounts.id.prompt() // prompt the user to sign in with a google popup
    //         google.accounts.id.renderButton(document.getElementById("signInDiv"), {
    //         theme: "outline",
    //         size: "large",
    //         });
    //     }   
    //   }, []);

    return(
        <Box>
            {
                login ? <LoginForm/> : <SignUpForm/>
            }
            {/* <Divider/> */}
            <AlternativeLogin/>
            <ChangeAcion>
                {
                    login ? 
                    <>
                    <p>Don't have an account?</p>
                    <NoBorderBlueButton onClick={handleActionChange}>
                        Signup
                    </NoBorderBlueButton>
                    </>
                    : 
                    <>
                    <p>Already have an account?</p>
                    <NoBorderBlueButton onClick={handleActionChange}>
                        Log In
                    </NoBorderBlueButton>
                    </>
                }
            </ChangeAcion>
            <div className="App">
      <div id="signInDiv" />
    </div>
        </Box>
    )
}

export default LoginSignupWindow