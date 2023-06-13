import styled from "styled-components";
const InputContainer = styled.div`
  position: relative;
`;

const Select = styled.select`
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
`

const Option = styled.option`
color: #609CFA
font-style: normal;
font-weight: 500;
font-size: 12px;
`


function DropdownInput({optionsArray}) {
  return (
    <InputContainer>
      <Select >
        {
            Array.isArray(optionsArray) && optionsArray.map((option) => (
                <Option value={option}>{option}</Option>
            ))
        }
        </Select>
    </InputContainer>
  );
}

export default DropdownInput;
