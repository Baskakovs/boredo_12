import styled from "styled-components"
import WriteIcon from "../../images/BlueEditIcon.svg"

const Button = styled.button`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 3px 8px;
gap: 4px;

width: 54px;
height: 24px;

border: 1px solid #609CFA;
border-radius: 129px;
background: #FFFFFF;
`
const Icon = styled.img`
width: 11px;
height: 11.37px;

color: #609CFA;
`

const Text = styled.p`
width: 23px;
height: 15px;

font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
/* identical to box height */

display: flex;
align-items: center;

color: #609CFA;
`

function EditPostButton(){
    return(
        <Button>
            <Text>Edit</Text>
            <Icon src={WriteIcon} alt="Write Icon" />
        </Button>
    )
}

export default EditPostButton;