import styled from "styled-components";

const LineBoxRight = styled.div`
position: absolute;
width: 142px;
height: 0px;
left: 192.95px;
top: 292px;
`

const Line = styled.hr`
position: absolute;
left: 0%;
right: 0%;
top: nan%;
bottom: nan%;
border: 1px solid #9F9F9F;
`

const LineBoxLeft = styled.div`
position: absolute;
width: 142px;
height: 0px;
left: 10.05px;
top: 292px;
`
const Text = styled.p`
position: absolute;
width: 15px;
height: 17px;
left: 164.95px;
top: 278px;

font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #9F9F9F;
`

function Divider(){
    return(
        <div>
            <LineBoxLeft>
                <Line/>
            </LineBoxLeft>
            <Text>OR</Text>
            <LineBoxRight>
                <Line/>
            </LineBoxRight>
        </div>
    )
}
export default Divider;