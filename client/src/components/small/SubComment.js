import styled from "styled-components";
import PublisherBox from "../small/PublisherBox";

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  flex: none;
  order: 1;
  flex-grow: 0;
  padding: 0px 32px 0px;
  border-left: 8px  solid #e0e0e0;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${(props) => (props.grey ? "#BFBFBF" : "#000000")};
  display: inline-block;
  word-break: break-word;
  width: 100%;
`;

function SubComment({text, date, user}){
    return(
        <CommentBox>
        <CommentContainer>
          <Text>
            {text}
          </Text>
          <PublisherBox date={date} user={user} grey/>
        </CommentContainer>
      </CommentBox>
    )
}
export default SubComment;