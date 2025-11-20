import styled from "styled-components";
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

//redux import
import { useDispatch, useSelector } from "react-redux";
import { setUserPosts } from '../slices/settingsSlice'

import Post from '../components/large/Post'
import BackNav from '../components/large/BackNav'
import ButtonBlueLarge from '../components/small/ButtonBlueLarge'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

  
  const ScrollableContainer = styled(Box)`
    width: 90%;
    max-width: 100%;
    margin: 0 auto;
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 58px 0px 69px 0px; /* Adjust this value based on the height of the NavBar */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const EmptyMessage = styled.div`
    color: #BFBFBF;
    font-size: 16px;
    text-align: center;
    padding: 40px 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  `

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
    flex-shrink: 0;
  `
  
  const FixedContainer = styled(Box)`
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #ffffff;
    marin-bottom: 100px;
    width: 100px;
  `

function UserPosts(){

    const dispatch = useDispatch()
    const history = useHistory()
    const user_id = useSelector((state) => state.login.user.id)
    const userName = useSelector((state) => state.login.user.name)
    const userPosts = useSelector((state) => state.settings.userPosts)

    function handleCreatePost() {
        history.push('/write')
    }

    useEffect(()=>{
        fetch(`/users/${user_id}/posts`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res=>{
            if(res.ok){
                res.json().then((posts)=>{
                    dispatch(setUserPosts(posts))
                })
            }
        })
    },[])
    return(
        <Box>
        <FixedContainer>
          <BackNav destination={'/profile'}/>
        </FixedContainer>
        <ScrollableContainer>
          {Array.isArray(userPosts) && userPosts.length === 0 ? (
            <>
              <ButtonContainer>
                <ButtonBlueLarge onClick={handleCreatePost}>
                  Create Post
                </ButtonBlueLarge>
              </ButtonContainer>
              <EmptyMessage>
                {userName}, you currently don't have a post
              </EmptyMessage>
            </>
          ) : (
            <Grid container spacing={2} sx={{display: 'flex', justifyContent:'center'}}>
              {
                Array.isArray(userPosts) ? 
                userPosts.map((post, index) => (
                  <Grid item xs={12} md={6} lg={4} sx={{display: 'flex', justifyContent:'center'}} key={index}>
                    <div>
                      <Post post={post} edit/>
                    </div>
                  </Grid>
                )) 
                : null
              }
            </Grid>
          )}
        </ScrollableContainer>
      </Box>
    )
}

export default UserPosts