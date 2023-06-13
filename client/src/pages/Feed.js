import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useEffect } from 'react';

//redux import
import { useDispatch, useSelector } from "react-redux";
import { setFeed } from '../slices/feedSlice';

import SearchAndSort from '../components/large/SearchAndSort';
import Post from '../components/large/Post';
import NavBar from '../components/large/NavBar';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))
  
  const ScrollableContainer = styled(Box)`
    width: 90%
    margin: auto;
    flex-grow: 1;
    overflow-y: auto;
    padding-bottom: 100px
  `
  
  const FixedContainer = styled(Box)`
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #ffffff;
    margin-bottom: 160px;
  `

function Feed(){

  //accessing states from the redux store
  const countrySelected = useSelector((state) => state.search.countrySelected);
  const categorySelected = useSelector((state) => state.search.categorySelected);
  const titleSelected = useSelector((state) => state.search.titleSelected);

    //fetching the initial feed of 15 random posts
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`posts_first`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(res =>{
          if(res.ok){
            return res.json()
          }
        })
        .then(data => {
          dispatch(setFeed(data))
        }
        )
    }, [countrySelected]);

    //fetching the feed when a country is selected
    useEffect(() => {
      if(countrySelected !== false && categorySelected === false){
        fetch(`/posts/country/${countrySelected}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(res =>{
          if(res.ok){
            return res.json()
          }
        })
        .then(data => {
          dispatch(setFeed(data))
        }
        )
      }
    }, [countrySelected, categorySelected]);

    //fetching the feed when a category is selected
    useEffect(() => {
      if(categorySelected !== false && titleSelected === false){
        fetch(`/posts/category/${categorySelected}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(res =>{
          if(res.ok){
            return res.json()
          }
        })
        .then(data => {
          dispatch(setFeed(data))
        }
        )
      }
    }, [categorySelected, titleSelected]);

      // fetching the feed when a category is selected
      useEffect(() => {
        if(countrySelected !== false){
          fetch(`/posts/title/${titleSelected}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(res =>{
            if(res.ok){
              return res.json()
            }
          })
          .then(data => {
            dispatch(setFeed(data))
          }
          )
        }
      }, [titleSelected]);

    //fetching the feed when a title is selected
    const feed = useSelector((state) => state.feed.feed)
    return(
        <Box>
        <FixedContainer>
          <SearchAndSort />
        </FixedContainer>
        <ScrollableContainer>
          <Grid container spacing={2} sx={{display: 'flex', justifyContent:'center'}}>
            {
              Array.isArray(feed) ? 
              feed.map((post, index) => (
                <Grid item xs={12} md={6} lg={4} sx={{display: 'flex', justifyContent:'center'}} key={index}>
                  <div>
                    <Post post={post}/>
                  </div>
                </Grid>
              )) 
              : null
            }
          </Grid>
        </ScrollableContainer>
      </Box>
    )
}
export default Feed;