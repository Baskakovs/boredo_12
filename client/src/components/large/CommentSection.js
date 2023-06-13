import styled from "@emotion/styled";

//redux imports
import { useSelector } from "react-redux"

import { useState } from "react";

import { useParams } from "react-router-dom";

// components
import HeaderSmall from "../small/HeaderSmall"
import Comment from "../small/Comment"
import Subcomment from "../small/SubComment"
import NoBorderBlueButton from "../small/NoBorderBlueButton"
import SmallBlueButton from "../small/SmallBlueButton"
import ReplyContainer from "../small/ReplyContainer";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 0px 8px;
  gap: 24px;
  width: 360px;
  height: 387px;
  margin-top: 32px;

`;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 352px;
  height: 22px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${props => props.justifyContent || "space-between"};
`

const CancelButton = styled(NoBorderBlueButton)`
color: #000000;
`

function CommentSection() {

  const params = useParams()
  const comments = useSelector((state) => state.further.post.comments)
  const [isComment, setIsComment] = useState(false)

  function handleComment() {
    setIsComment(!isComment)
  }

  return (
    <Box>
      <HeaderBox>
        <Row>
          <HeaderSmall>Comments</HeaderSmall>
        </Row>
        <Row 
        justifyContent={"flex-end"}
        >
          {
            isComment ? 
            <CancelButton
            onClick={handleComment}
            >Cancel</CancelButton> 
            :
            <SmallBlueButton 
            text={"Write a reply"}
            onClick={handleComment}
            />
          }
        </Row>
      </HeaderBox>
      {
        !isComment ? null :
        <ReplyContainer
        action={"comment"}
        post_id={params.id}
        />
      }
      <CommentContainer>
        {comments.length <! 0 ? null : (
          comments.map((comment) => (
            <>
              <Comment
                id={comment.id}
                text={comment.text}
                date={comment.created_at}
                user={comment.user.name}
              />
              {comment.subcomments.length > 0 &&
                comment.subcomments.map((subcomment) => (
                  <Subcomment
                    key={subcomment.id}
                    id={subcomment.id}
                    text={subcomment.text}
                    date={subcomment.created_at}
                    user={subcomment.user}
                  />
                ))}
            </>
          ))
        )}
      </CommentContainer>
    </Box>
  );
}

export default CommentSection;
