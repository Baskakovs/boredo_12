import styled from "styled-components";

//components

import DownArrowImage from '../../images/DownIcon.png';

const SortFilterContainer = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 11px 17px 11px 10px;
gap: 39px;

width: 100vw;
height: 37px;
left: 0px;
top: 128px;

border-bottom: 0.3px solid #8A8A8A;
`

const SortFilterText = styled.button`
/* Auto layout */

font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
/* identical to box height */

display: flex;
align-items: center;
text-align: right;
border: none;
background-color: transparent;


color: #6B7280;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    cursor: pointer;
    width: auto;
    background-color: transparent;
    flex: none;
    flex-grow: 0;
`

const Icon = styled.img`
  flex: none;
  order: 0;
  flex-grow: 0;
  border: none;
  background-color: transparent;
`;


function SortFilter() {
    return (
        <div>
            <SortFilterContainer>
                <TextContainer>
                    <Icon src={DownArrowImage} alt="Down Arrow"/>
                    <SortFilterText>Likes</SortFilterText>
                </TextContainer>
                <TextContainer>
                    <SortFilterText>Comments</SortFilterText>
                </TextContainer>
                <TextContainer>
                    <SortFilterText>Engagement</SortFilterText>
                </TextContainer>
                <TextContainer>
                    <SortFilterText>Date</SortFilterText>
                </TextContainer>
            </SortFilterContainer>
        </div>
    );
}
export default SortFilter;