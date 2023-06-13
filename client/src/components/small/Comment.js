import styled from "styled-components"
import PublisherBox from "../small/PublisherBox"
import NoBorderBlueButton from "../small/NoBorderBlueButton"
import ReplyContainer from "./ReplyContainer"

import { useState } from "react"

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 352px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Text = styled.span`
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
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ReplyButton = styled(NoBorderBlueButton)`
  font-size: 12px;
  color: #BFBFBF;
  `

function Comment({ user, date, text, id }) {
  const [writeComment, setWriteComment] = useState(false)

  function handleWriteComment() {
    setWriteComment(!writeComment)
  }
  return (
    <CommentBox>
      <CommentContainer>
        <Text>{text}</Text>
        <Row>
          <PublisherBox user={user} date={date} grey />
          <ReplyButton onClick={handleWriteComment}>{
            writeComment ? 'Cancel' : 'Reply'
          }</ReplyButton>
        </Row>
      </CommentContainer>
      {
        !writeComment ? null : <ReplyContainer
        action={"subcomment"}
        comment_id={id}/>
      }
    </CommentBox>
  )
}
export default Comment;