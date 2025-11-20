import styled from "styled-components";

const ButtonBlueLarge = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

width: 338px;
max-width: 100%;
height: 48px;
box-sizing: border-box;

background: #609CFA;
border-radius: 4px;
border: none;

font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
align-items: center;
text-align: center;

color: #FFFFFF;
cursor: pointer;

@media (max-width: 400px) {
  width: 100%;
  padding: 10px 20px;
}
`
export default ButtonBlueLarge;