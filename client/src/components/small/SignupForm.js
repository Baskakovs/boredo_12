import styled from "styled-components";

import BoredoTitle from "./BoredoTitle";
import InputBox from "./Input";
import ButtonBlueLarge from "./ButtonBlueLarge";
import DoBInput from "./DateOfBirthInput";

//imoport redux
import { useDispatch, useSelector } from "react-redux";
import { setSignupForm, setUser } from "../../slices/loginSlice";

import { useHistory } from "react-router-dom";
import { setErrors } from "../../slices/errorsSlice";

const Box = styled.div`
/* Auto layout */

width: 338px;
height: 259px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 8px;
`

function SignUpForm(){

    const signUpForm = useSelector((state) => state.login.signUpForm)
    console.log(signUpForm, "signUpForm")
    const history = useHistory();
    function handleNext() {
        fetch("/users", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: signUpForm.name,
                email: signUpForm.email,
                date_of_birth: signUpForm.date_of_birth,
                password: signUpForm.password,
                password_confirmation: signUpForm.password_confirmation,
            })
        })
            .then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    dispatch(setUser(user))
                    dispatch(setErrors([]))
                    history.push("/");
                });
            }else{
                res.json().then((errors) => {
                    dispatch(setErrors(errors.errors))
                });
            }
        })
    }
          
    const dispatch = useDispatch();
    function handleChange(e) {
        const { name, value } = e.target;
        let updatedValue = value;
      
        // Convert date string to Date object
        if (name === "date_of_birth") {
          const date = new Date(value);
          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const year = date.getFullYear();
          updatedValue = `${day}/${month}/${year}`;
        }
      
        dispatch(
          setSignupForm({
            ...signUpForm,
            [name]: updatedValue,
          })
        );
      }
    return(
        <>
            <BoredoTitle>Boredo</BoredoTitle>
            <InputBox placeholder="Full Name" 
            name="name"
            value={signUpForm.name}
            onChange={handleChange}/>

            <InputBox placeholder="Email"
            name="email"
            value={signUpForm.email}
            onChange={handleChange}/>

            <DoBInput
            placeholder="Date of Birth"
            value={signUpForm.date_of_birth} 
            handleChange={handleChange}/>

            <InputBox
            placeholder="Passowrd"
            name="password"
            value={signUpForm.password}
            type="password"
            onChange={handleChange}/>

            <InputBox 
            name="password_confirmation"
            value={signUpForm.password_confirmation}
            placeholder="Repeat password"
            type="password"
            onChange={handleChange}/>
            <ButtonBlueLarge onClick={handleNext}>Next</ButtonBlueLarge>
        </>
    )
}
export default SignUpForm