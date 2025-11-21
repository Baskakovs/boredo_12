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
  const isBlurringRef = useRef(false);

  function handleChange(e) {
    const newValue = e.target.value;
    setInputValue(newValue);
    // Only call handleSelectChange if we're not in the middle of a blur operation
    // This prevents clearing the selection when input is cleared on blur
    if (!isBlurringRef.current || newValue !== "") {
      handleSelectChange(e);
    }
  }
  
  // Clear input when user focuses so all options are visible in dropdown
  function handleFocus(e) {
    // Clear the input value so datalist shows all options
    isBlurringRef.current = false;
    setInputValue("");
  }
  
  // Handle when user selects from datalist dropdown
  function handleInput(e) {
    const selectedValue = e.target.value;
    if (selectedValue) {
      isBlurringRef.current = false;
      setInputValue(selectedValue);
      handleSelectChange(e);
    }
  }
  
  // Clear input when user clicks away (so placeholder shows selected value)
  function handleBlur(e) {
    // Mark that we're blurring to prevent handleChange from clearing selection
    isBlurringRef.current = true;
    
    // Use a small delay to prevent clearing if user is clicking a button
    // The relatedTarget check helps prevent clearing when clicking buttons
    const relatedTarget = e.relatedTarget;
    const isClickingButton = relatedTarget && (
      relatedTarget.tagName === 'BUTTON' || 
      relatedTarget.closest('button') !== null
    );
    
    if (!isClickingButton) {
      // Only clear if not clicking a button, use timeout to allow button click to process first
      setTimeout(() => {
        // Double-check that we're still blurred and didn't refocus
        if (document.activeElement !== e.target) {
          setInputValue("");
        }
        // Reset the blurring flag after a short delay
        setTimeout(() => {
          isBlurringRef.current = false;
        }, 50);
      }, 150);
    } else {
      // If clicking a button, don't clear and reset flag immediately
      isBlurringRef.current = false;
    }
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
