import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom" 

import EditPostButton from "../small/EditPostButton";

const PostBox = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 8px;

width: 360px;

border-width: 0.2px 0px;
border-style: solid;
border-color: #656565;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin-right: 8px;
margin-left: 8px;
`

const Header = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 3px 0px;

width: 370px;
height: 26px;

background: #FBFBFB;
`
const HeaderText = styled.div`
/* Auto layout */

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 9px;
margin-left: 4px
`

const Author = styled.p`
width: 45px;
height: 12px;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
display: flex;
align-items: center;
color: #000000;
`

const Date = styled.p`
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
display: flex;
align-items: center;
`
const TextBox = styled.div`
/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 48px 0px;
gap: 12px;

width: 376px;
height: 217px;

background: #FFFFFF;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`

const Text = styled.p`
width: 366px;
height: 132px;

font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 22px;
/* or 183% */

display: flex;
align-items: center;
letter-spacing: 0.04em;
text-align: left;
margin-left: 16px;

color: #000000;
`

const Footer = styled.div`
/* Auto layout */

display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;

width: 376px;
height: 24px;

background: #FBFBFB;

/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 0;
`

const ReadFurther = styled.button`
width: auto;
height: 13px;

font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 13px;
display: flex;
align-items: center;
text-align: right;
letter-spacing: 0.04em;
border: none;
margin-right: 8px;

color: #000000;
cursor: pointer;
`

const EditButtonBox = styled.div`
margin-right: 4px;
`

function Post({post, edit}){
const [date, setDate] = useState("");
useEffect(() => {
    const dateString = post.created_at
    const [year, month, day] = dateString.split("T")[0].split("-");
    const formattedDate = `${day}-${month}-${year}`;
    setDate(formattedDate);
}, [post.created_at]);

    return(
        <PostBox>
            <Header>
                <HeaderText>
                    <Author>{post.user.name}</Author>
                    <Date>{date}</Date>
                </HeaderText>
                {
                    edit ? 
                    <Link to={`/edit/${post.id}`}>
                        <EditButtonBox>
                            <EditPostButton/>
                        </EditButtonBox> 
                    </Link>
                    : null
                }
            </Header>
            <TextBox>
                <Text>
                    {post.text}
                </Text>
            </TextBox>
            <Footer>
                <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
                    <ReadFurther>Read Further</ReadFurther>
                </Link>
            </Footer>
        </PostBox>
    );
}
export default Post;