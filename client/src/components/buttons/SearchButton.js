import styled, { css } from 'styled-components';

const SearchButton = styled.button`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 10px;
    gap: 10px;

    background: #FFFFFF;
    border: 1.2px solid #609CFA;
    border-radius: 129px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;

    font-family: 'Futura';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    cursor: pointer;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #609CFA;
    /* Define styles for the specific state */
    ${props =>
      props.onClicked &&
      css`
        background-color: #609CFA;
        color: #FFFFFF;
      `}
  `;

export default SearchButton;