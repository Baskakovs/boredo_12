import styled from "styled-components";

//components

import SearchRow from "./SearchRow";

//redux imports
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountries, setCategories, setTitles, setCategorySelected } from '../../slices/searchSlice';
import { setTitleSelected } from "../../slices/writeSlice";

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 4px;
    gap: 24px;

`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    padding: 8px 4px;
    gap: 8px;
    width: 100%;
    overflow-x: auto;
`
function Search(){
//fetching initial countries

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`/geographies`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res=> {
      if(res.ok){
        return res.json()
      }
    })
    .then(data => {
      data.forEach(countries => {
        dispatch(setCountries(countries))
      })
    })
  },[dispatch])

//fetching categories associated with specific country
const countrySelected = useSelector((state) => state.search.countrySelected);

    useEffect(() => {
        if(countrySelected !== false){
            fetch(`/geographies/${countrySelected}/categories`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res=> {
                if(res.ok){
                    return res.json().then(
                        data => {
                            dispatch(setCategories(data))
                            // dispatch(setCategorySelected(true))
                        }
                    )
                }
            })
        }
    },[countrySelected])

//fetching titles associated with specific category
const categorySelected = useSelector((state) => state.search.categorySelected);

    useEffect(() => {
        if(categorySelected != false){
            fetch(`/categories/${categorySelected}/titles`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res=> {
                if(res.ok){
                    return res.json().then(
                        data => {
                            dispatch(setTitles(data))
                            dispatch(setTitleSelected(true))
                        }
                    )
                }
            })
        }
    },[categorySelected])

// disabled for v1

  
//accessing store
  const countries = useSelector((state) => state.search.countries)
  const categories = useSelector((state) => state.search.categories)
  const titles = useSelector((state) => state.search.titles) 
  
    return(
        <SearchContainer>
            <Row>
                <SearchRow items={countries} type="country"/>
            </Row>
            {
                countrySelected !== false ?
                <Row>
                    <SearchRow items={categories} type="category"/>
                </Row>
                : null
            }
            {
                categorySelected !== false ?
                <Row>
                    <SearchRow items={titles} type="title"/>
                </Row>
                : null
            }
        </SearchContainer>
    );
}
export default Search;