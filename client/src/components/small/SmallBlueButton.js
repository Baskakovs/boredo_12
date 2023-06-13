import styled from "styled-components";

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 6px 3px 6px;
  gap: 10px;

  width: auto;
  min-width: 57px;
  height: 25px;
  min-height: 25px;
  text-align: center;

  background: ${prop => (prop.active ? (prop.background || "#609CFA") : "#E5E7EB")};
  border-radius: 129px;
  border: ${prop => prop.border || "none"};
  color: ${prop => prop.color || "#FFFFFF"};
  cursor: ${prop => (prop.active ? "pointer" : "not-allowed")};
`;

function SmallBlueButton({ onClick, text, active=true, background, borderColor, color, border }) {
  return (
    <Button
      onClick={onClick}
      active={active}
      background={background}
      color={color}
      border={border}
    >
      {text}
    </Button>
  );
}

export default SmallBlueButton;