import styled from "styled-components";
import ProfileIcon from '../../images/Back.svg';

import { useHistory } from "react-router-dom";

const Bar = styled.div`
display: flex;
align-items: flex-start;
padding: 8px 4px;
height: 100%;
gap: 24px;
width: 100%;
`

const Container = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 11px 17px 11px 10px;
gap: 8px;

background: #FFFFFF;
border: none;
cursor: pointer;
`

function BackBar(){
    const history = useHistory();
    function handleBack(){
        history.goBack();
    }
    return(
        <Bar>
            <Container onClick={handleBack}>
                <img src={ProfileIcon} alt="back" />
            </Container>
        </Bar>
    )
}
export default BackBar;