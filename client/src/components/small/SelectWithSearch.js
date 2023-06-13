import React, { useState } from "react";
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
  return (
    <Box>
      <SelectInput
        type="text"
        name={name}
        value={value}
        onChange={(e) => handleSelectChange(e)}
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
