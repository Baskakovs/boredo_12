//redux import
import { useSelector } from "react-redux";
import { useEffect } from "react";
//components
import styled from "styled-components";
import HeaderText from "../small/HeaderSmall";
import PublisherBox from "../small/PublisherBox";
import NoBorderBlueButton from "../small/NoBorderBlueButton"


const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 0px;
gap: 24px;

width: 362px;
height: 217px;
left: 16px;
top: 8px;
`
const HeaderBox = styled.div`
/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 362px;
height: 22px;


/* Inside auto layout */

flex: none;
flex-grow: 0;
`

const TextBox = styled.div`
/* Auto layout */
width: 360px;
height: 132px;

font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 22px;
/* or 183% */

display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #000000;


/* Inside auto layout */

flex: none;
flex-grow: 0;
`

const Text = styled.span`
/* MainText */


width: 360px;
height: 132px;

font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 22px;
/* or 183% */

display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #000000;


/* Inside auto layout */

flex: none;
flex-grow: 0;
`
function FurtherText(){
    const post = useSelector(state => state.further.post)

    return(
        <>
        {
            post.length  == 0 ? null :
            <Box>
            <HeaderBox>
                <HeaderText>
                {`${post.geography.name} | ${post.category.name} | ${post.title.name}`}
                </HeaderText>
            </HeaderBox>
            <TextBox>
                <Text>
                {post.text}
                </Text>
            </TextBox>
            <PublisherBox user={post.user.name} date={post.created_at}/>
            </Box>
        }
        </>
    )
}
export default FurtherText;