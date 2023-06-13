import styled from "styled-components";
import {useEffect, useState} from "react";
const Box = styled.div`
  width: auto
  display: flex;
  gap: 8px
`;

const Author = styled.span`
  width: auto;
  height: 15px;
  left: 0px;
  top: 202px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: ${(props) => (props.grey ? "#BFBFBF" : "black")};
`;

const Date = styled.span`
  width: auto;
  height: 15px;
  left: 68px;
  top: 202px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: ${(props) => (props.grey ? "#BFBFBF" : "black")};
`;

function PublisherBox({ grey, user, date }) {
const [date2, setDate2] = useState("");
useEffect(() => {
    if(date !== undefined){
    const dateString = date
    const [year, month, day] = dateString.split("T")[0].split("-");
    const formattedDate = `${day}-${month}-${year}`;
    setDate2(formattedDate);
    }
}, [date]);

    
  return (
    <Box>
      <Author grey={grey}>{user}</Author>
      <Date grey={grey}>{date2}</Date>
    </Box>
  );
}

export default PublisherBox;
