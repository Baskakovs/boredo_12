import styled from "styled-components"
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

import { useParams } from "react-router-dom"
import {useEffect} from "react"

//import redux
import { useDispatch } from "react-redux"
import { setPost } from "../slices/furtherSlice"

//components
import FurtherText from "../components/large/FurtherText"
import CommentSection from "../components/large/CommentSection"
import BackNav from "../components/large/BackNav"


const ScrollableContainer = styled(Box)`
width: 90%
flex-grow: 1;
overflow-y: auto;  
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 58px;
margin-bottom: 100px;
overflow-x: hidden;
`

const FixedContainer = styled(Box)`
position: sticky;
top: 0;
z-index: 1;
background-color: #ffffff;
marin-bottom: 100px;
width: 100px;
`



function ReadFurther() {
    const { id } = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`/posts/${id}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json().then((post)=>{
                    dispatch(setPost(post))
                })
            }
        })
    },[dispatch])

    return (
        <Box>
        <FixedContainer>
        <BackNav destination={'/'}/>
        </FixedContainer>
        <ScrollableContainer>
            <FurtherText/>
            <CommentSection />
        </ScrollableContainer>
        </Box>
    )
}
export default ReadFurther;