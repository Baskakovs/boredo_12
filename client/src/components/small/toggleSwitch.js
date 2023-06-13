import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 26px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ isChecked }) => (isChecked ? '#2196F3' : '#ccc')};
  transition: 0.4s;
  border-radius: 26px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${({ isChecked }) =>
      isChecked ? 'translateX(20px)' : 'translateX(0)'};
  }
`;

const Label = styled.span`
  font-size: 12px;
  color: #609cfa;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0.04em;
  display: inline-block;
  vertical-align: middle;
`;

const ToggleSwitch = ({ handleVisibilityChange, active = true}) => {
  const [isChecked, setIsChecked] = useState(active);

  const handleToggle = () => {
    setIsChecked(!isChecked)
    return handleVisibilityChange()
  };

  return (
    <Box>
      <ToggleContainer>
        <ToggleInput
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
        <ToggleSlider isChecked={isChecked} />
      </ToggleContainer>
      <Label>{isChecked ? 'Publish' : 'Archive'}</Label>
    </Box>
  );
};

export default ToggleSwitch;
