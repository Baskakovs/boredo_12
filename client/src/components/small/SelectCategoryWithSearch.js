import React, { useState } from "react"
import styled from "styled-components"

//importing redux
import { useSelector } from "react-redux";

const SelectInput = styled.input`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 3px 8px;
gap: 12px;
border: 1px solid #609CFA;
border-radius: 129px;
width: auto;
height: 24px;
padding: 0px 4px 0px 4px;
color: #609CFA;
`;

const OptionList = styled.datalist`
  /* Add styling for the datalist element */
`;

function SelectCategoryWithSearch(handleSelectChange) {

  const categoriesList = useSelector((state) => state.write.categoriesList)

  console.log(categoriesList, "categoriesList")

  return (
    <div>
      <SelectInput
        type="text"
        name={"geography"}
        onChange={(e)=>handleSelectChange(e)}
        list="options2"
        placeholder={"Category"}
      />

      <OptionList id="options2">
        {
          categoriesList.map((option) => (
            <option 
            key={option.id}
            id={option.id}
            value={option.name} />
          ))
        }
      </OptionList>
    </div>
  );
}

export default SelectCategoryWithSearch;