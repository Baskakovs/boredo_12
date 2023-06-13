import styled from "styled-components"
import { useState } from "react";
//redux import
import { useDispatch } from "react-redux";
import { setCountrySelected, setCategorySelected, setTitleSelected } from "../../slices/searchSlice";

//components
import SearchButton from "../buttons/SearchButton";

const SearchRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
    width: 100vw;

    ::-webkit-scrollbar {
        display: none;
      }

    position: absolute;

    overflow-x: auto;

`
function SearchRow({ items, type }) {
    const dispatch = useDispatch();
  
    // Create a separate state to track the currently clicked button
    const [selectedItemId, setSelectedItemId] = useState(null);
  
    function handleItemClick(itemId) {
      if (type == 'country') {
        dispatch(setCountrySelected(itemId))
      } else if (type === 'category') {
        dispatch(setCategorySelected(itemId));
      } else if (type === 'title') {
        dispatch(setTitleSelected(itemId));
      }
  
      // Update the selected item ID based on the clicked button
      setSelectedItemId(itemId === selectedItemId ? null : itemId);
    }
  
    return (
      <SearchRowContainer>
        {Array.isArray(items)
          ? items.map((item, index) => (
              <SearchButton
                key={index}
                id={item.id}
                name={item.name}
                onClick={() => handleItemClick(item.id)} // Pass item.id as an argument
                onClicked={item.id === selectedItemId} // Check if the button is currently selected
              >
                {item.name}
              </SearchButton>
            ))
          : null}
      </SearchRowContainer>
    );
  }
  
  export default SearchRow;
  