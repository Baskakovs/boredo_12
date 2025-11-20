import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 30%;
  margin: auto;
`;

const SelectInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3px 8px;
  gap: 12px;
  border: 1px solid #609cfa;
  border-radius: 129px;
  width: 100%;
  height: 24px;
  padding: 0px 4px 0px 4px;
  color: #609cfa;
`;

const OptionList = styled.datalist`
position: absolute;
max-height: 20em;
border: 0 none;
overflow-x: hidden;
overflow-y: auto;
`

function SelectWithSearch({ options, name, value, placeholder, handleSelectChange }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    const newValue = e.target.value;
    setInputValue(newValue);
    handleSelectChange(e);
  }
  
  // Clear input when user focuses so all options are visible in dropdown
  function handleFocus(e) {
    // Clear the input value so datalist shows all options
    setInputValue("");
  }
  
  // Handle when user selects from datalist dropdown
  function handleInput(e) {
    const selectedValue = e.target.value;
    if (selectedValue) {
      setInputValue(selectedValue);
      handleSelectChange(e);
    }
  }
  
  // Clear input when user clicks away (so placeholder shows selected value)
  function handleBlur(e) {
    // Clear input so placeholder shows the selected value
    setInputValue("");
  }

  return (
    <Box>
      <SelectInput
        type="text"
        name={name}
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={handleInput}
        list={name}
        placeholder={placeholder}
        key={name}
      />

      <OptionList id={name}>
        {Array.isArray(options) &&
          options.map((option) => (
            <option key={option.id} id={option.id} value={option.name} />
          ))}
      </OptionList>
    </Box>
  );
}

export default SelectWithSearch;
