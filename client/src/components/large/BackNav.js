import styled from "styled-components";
import Back from "../../images/Back.svg";
import TitleM from "../small/TitleM";

import { useHistory } from "react-router-dom";

const Nav = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: #FFFFFF;
    gap: 16px;
`

const Icon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 16px;
`

const Text = styled.p`
    font-family: "Inter" sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #656565;
    cursor: pointer;
`

function BackNav(props) {
    const history = useHistory();
    function handleBack(){
        history.push(`${props.destination}`);
    }
    return (
        <Nav onClick={props.onClick}>
            <Icon src={Back} alt="Back" onClick={handleBack}/>
            <Text onClick={handleBack}>Back</Text>
        </Nav>
    );
}

export default BackNav;