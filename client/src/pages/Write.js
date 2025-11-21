import styled from "styled-components";

import Grid from '@mui/material/Grid';

import SmallBlueButton from "../components/small/SmallBlueButton"
import SelectWithSearch from "../components/small/SelectWithSearch"
import ToggleSwitch from "../components/small/toggleSwitch"
import Errors from "../components/small/Errors"

//import redux
import { useSelector, useDispatch } from "react-redux"
import { setVisibility, setText, setGeographiesList, setGeographySelected, setCategoriesList, setCategorySelected, setTitlesList, setTitleSelected, resetWriteForm} from "../slices/writeSlice"
import { setErrors } from "../slices/errorsSlice"

import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { setCountrySelected } from "../slices/searchSlice";

const Box = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  width: 100%;
    height: 100vh;
`;

const Row = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: ${props => props.justifyContent};
padding-bottom: 16px;
`


const InputBox = styled.textarea`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 0px 6px;
gap: 32px;

width: 100%;

border: none;

font-family: Helvetica Neue;
font-weight: 400;
font-size: 16px;
line-height: 22px;
/* or 183% */

letter-spacing: 0.04em;

&:focus {
    outline: none;
}
`

const ViewArray = ['Publish', 'Archive']

function Write(){
    const writeForm = useSelector((state) => state.write.writeForm)
    const dispatch = useDispatch()
    const history = useHistory()

    //handling visibility input
    function handleVisibilityChange(){
        dispatch(setVisibility("true_false"))
    }

    //handling text input
    function handleTextChange(e){
        dispatch(setText(e.target.value))
    }

    //Geography, category and title selection 

    const geographiesList = useSelector((state) => state.write.geographiesList)
    const categoriesList = useSelector((state) => state.write.categoriesList)
    const titlesList = useSelector((state) => state.write.titlesList)
    const geographySelected = useSelector((state) => state.write.geography_selected)
    const categorySelected = useSelector((state) => state.write.category_selected)
    const titleSelected = useSelector((state) => state.write.title_selected)
    const user_id = useSelector((state) => state.login.user.id)

    useEffect(()=>{
        dispatch(resetWriteForm())
        fetch(`/geographies`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) =>{ if(res.ok){
            res.json().then((geographies) => {
                dispatch(setGeographiesList(geographies))
            })
        }
        })
    },[])

    useEffect(() => {
        if (geographySelected && geographySelected !== false) {
          fetch(`/geographies/${geographySelected.id}/categories`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              if (res.ok) {
                res.json().then((categories) => {
                dispatch(setCategoriesList(categories))
                })
              }
            })
        } else {
          // Clear categories when geography is deselected
          dispatch(setCategoriesList([]))
        }
      }, [geographySelected])

      useEffect(() => {
        if(geographySelected && geographySelected !== false && categorySelected && categorySelected !== false) {
fetch(`/geographies/${geographySelected.id}/categories/${categorySelected.id}/titles`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              if (res.ok) {
                res.json().then((titles) => {
                  dispatch(setTitlesList(titles))
                })
              }
            })
        } else {
          // Clear titles when category is deselected
          dispatch(setTitlesList([]))
        }
      }, [categorySelected, geographySelected])

    function handleSelectChange(e){
        const { name, value } = e.target
        
        if(name === "geography"){
            if(!value || value.trim() === ""){
                // Clear geography and dependent selections
                dispatch(setGeographySelected(false))
                dispatch(setCategorySelected(false))
                dispatch(setTitleSelected(false))
            } else {
                let selectedGeography = geographiesList.find((geography) => geography.name === value && geography.id !== undefined)
                if(selectedGeography){
                    dispatch(setGeographySelected(selectedGeography))
                    // Always reset dependent selections when geography changes
                    dispatch(setCategorySelected(false))
                    dispatch(setTitleSelected(false))
                } else {
                    // No match found - clear selection
                    dispatch(setGeographySelected(false))
                    dispatch(setCategorySelected(false))
                    dispatch(setTitleSelected(false))
                }
            }
        }
        if(name === "category"){
            if(!value || value.trim() === ""){
                // Clear category and dependent selections
                dispatch(setCategorySelected(false))
                dispatch(setTitleSelected(false))
            } else {
                let selectedCategory = categoriesList.find((category) => category.name === value && category.id !== undefined)
                if(selectedCategory){
                    dispatch(setCategorySelected(selectedCategory))
                    // Always reset title when category changes
                    dispatch(setTitleSelected(false))
                } else {
                    // No match found - clear selection
                    dispatch(setCategorySelected(false))
                    dispatch(setTitleSelected(false))
                }
            }
        }
        if(name === "title"){
            if(!value || value.trim() === ""){
                // Clear title
                dispatch(setTitleSelected(false))
            } else {
                let selectedTitle = titlesList.find((title) => title.name === value && title.id !== undefined)
                if(selectedTitle){
                    dispatch(setTitleSelected(selectedTitle))
                } else {
                    // No match found - clear selection
                    dispatch(setTitleSelected(false))
                }
            }
        }
    }

    const [validity, setValidity] = useState(false)

    useEffect(() => {
      if (
        writeForm.text.length !== 0 &&
        writeForm.geography_id !== "" &&
        writeForm.category_id !== "" &&
        writeForm.title_id !== ""
      ) {
        console.log(writeForm.text.length, "text length");
        setValidity(true);
      }
    }, [writeForm]);
    


    function handlePublish(){
      if(validity){
        fetch(`posts`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({
                post: {
                    text: writeForm.text,
                    published: writeForm.published,
                    geography_id: geographySelected.id,
                    category_id: categorySelected.id,
                    title_id: titleSelected.id,
                    user_id: user_id
                }
            })
        })
        .then((res) =>{ 
            if(res.ok){
                res.json().then((post) => {
                    history.push(`/`)
                    dispatch(resetWriteForm({}))
                })
            } else {
                res.json().then((errors) => {
                    dispatch(setErrors(errors.errors))
                    // Don't clear selections on error - let user fix the issue
                    // dispatch(setCountrySelected(false))
                    // dispatch(setCategorySelected(false))
                    // dispatch(setTitleSelected(false))
                })
            }
        })
        .catch((error) => {
            console.error("Error publishing post:", error)
            dispatch(setErrors(["Network error. Please try again."]))
        })
      }
    }

    return(
        <Box container>
        <Grid container xs={12} md={4} sx={{alignItems: "center"}} >
            <Row justifyContent="space-between">
                <ToggleSwitch
                optionsArray={ViewArray}
                handleVisibilityChange={handleVisibilityChange}
                label="Visibility"
                />
                <SmallBlueButton text={
                    writeForm.published === true ?
                    "Publish"
                    :
                    "Archive"}
                onClick={handlePublish}
                active={validity}
                />
            </Row>
        <InputBox
        placeholder="Write your post here..."
        name="text"
        value={writeForm.text}
        onChange={handleTextChange}
        rows={8}
        autoFocus
        />
        <Row 
        justifyContent="start"
        >
        <SelectWithSearch
        key={`geography-${geographySelected ? geographySelected.id : 'none'}`}
        name="geography"
        options={geographiesList}
        placeholder={geographySelected ? geographySelected.name : "Geography"}
        handleSelectChange={handleSelectChange}
        />
        {
            geographySelected !== false ?
            <SelectWithSearch
            key={`category-${categorySelected ? categorySelected.id : 'none'}`}
            name="category"
            options={categoriesList}
            placeholder={categorySelected ? categorySelected.name : "Category"}
            handleSelectChange={handleSelectChange}
            />
            :
            null
        }
        {
            categorySelected !== false ?
            <SelectWithSearch
            key={`title-${titleSelected ? titleSelected.id : 'none'}`}
            name="title"
            options={titlesList}
            placeholder={titleSelected ? titleSelected.name : "Title"}
            handleSelectChange={handleSelectChange}
            />
            :
            null
        }
        </Row>
        </Grid>
        </Box>
    )
}
export default Write