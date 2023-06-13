import styled from "styled-components";
import Grid from '@mui/material/Unstable_Grid2';

//components
import Search from "./Search";
import SortFilter from "./SortFilter";

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: #FFFFFF;
    border-bottom: 1px solid #E0E0E0;
`


function SearchAndSort(){

    return(
    <SearchContainer sx={{
      width: '100%',
      overflowX: 'hidden', // Hide horizontal scrollbar
      display: 'flex',
      flexDirection: 'column', // Set container as column layout
      position: 'sticky', top: 0, zIndex: 1,
      backgroundColor: '#FFFFFF',
      marginBottom: '16px',

    }}>
        <Grid item xs={12} sx={{ marginBottom: '32px' }}>
          <div>
            <Search />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div>
            {/* <SortFilter /> */}
          </div>
        </Grid>
    </SearchContainer> 
    )
}
export default SearchAndSort;