import styled from "styled-components";
import { useEffect } from "react";
const DateOfBirthInput = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 338px;
  height: 48px;
`;

const DateOfBirthLabel = styled.label`
  position: absolute;
  top: -7px;
  left: 10px;
  background: #FBFBFB;
  padding: 0 5px;
  font-size: 12px;
  color: #9F9F9F;
`;

const DateOfBirthField = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #FBFBFB;
  border: 1px solid #9F9F9F;
  border-radius: 4px;
  color: #959595;
`;

function DoBInput({ value, handleChange}) {
  let formattedDate
  useEffect(()=>{
    formattedDate = value.split("-").reverse().join("/");
  },[value])
  return (
    <DateOfBirthInput>
        <DateOfBirthLabel>Date of Birth</DateOfBirthLabel>
        <DateOfBirthField type="date"
        name="date_of_birth"
        value={formattedDate}
        onChange={(e)=>handleChange(e)}/>
    </DateOfBirthInput>
  );
}

export default DoBInput;