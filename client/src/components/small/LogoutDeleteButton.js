import styled from "styled-components"

const Box = styled.div`
padding: 8px 16px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
border-top: 1px solid #DDDFE4;
position: fixed;
width: 390px;
bottom: 68px;
z-index: 2;
background: #FFFFFF;
`

const Button = styled.button`
display: flex;
flex-direction: row;
align-items: center;
padding: 3px 8px;


border: none;
background: transparent;

font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 15px;
text-decoration: underline;
display: flex;
align-items: center;

color: #FA6060;
cursor: pointer;
`
const Footer = styled.div`
position: fixed;
width: 390px;
bottom: 68px;
z-index: 1;
`
function LogoutDeleteButton({onClick, text}){
    return(
        <Box>
            <Button onClick={onClick}>{text}</Button>
        </Box>
    )
}

export default LogoutDeleteButton