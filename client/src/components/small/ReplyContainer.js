import styled from "styled-components";

import SmallBlueButton from "./SmallBlueButton"

//import redux
import { useSelector, useDispatch } from "react-redux"
import { setCommentForm, setSubcommentForm, setComments } from "../../slices/furtherSlice"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8px;
`

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  font-family: Helvetica Neue;
  font-size: 14px;
  line-height: 22px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`

function ReplyContainer({post_id, comment_id, action}) {

    const dispatch = useDispatch()
    const commentForm = useSelector((state) => state.further.commentForm)
    const subCommentForm = useSelector((state) => state.further.subCommentForm)

    function handleChange(e){
        if(action === "comment") handleCommentChange(e)
        if(action === "subcomment") handleSubcommentChange(e)
    }

    function handleCommentChange(e){
        dispatch(setCommentForm({text: e.target.value}))
    }

    function handleSubcommentChange(e){
        dispatch(setSubcommentForm({text: e.target.value}))
    }

    const user_id = useSelector((state) => state.login.user.id)
    const comments = useSelector((state) => state.further.post.comments)

    function handleSubmit() {
        if(action === "comment") handleSubmitComment()
        if(action === "subcomment") handleSubmitSubComment()
    }

    function handleSubmitComment() {
      fetch(`/comments`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: commentForm.text,
          post_id: post_id,
          user_id: user_id,
        }),
      })
      .then((res) => { if(res.ok){
        res.json().then((comment) => {
          const updatedComments = [comment, ...comments]
          dispatch(setComments(updatedComments))
          dispatch(setCommentForm({text: ""}))
        })
      }})
    }

    function handleSubmitSubComment() {
        fetch(`/subcomments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: subCommentForm.text,
            comment_id: comment_id,
            user_id: user_id,
          }),
        })
          .then((res) => {
            if (res.ok) {
              res.json().then((subcomment) => {
                const updatedComments = comments.map((comment) => {
                  if (comment.id === comment_id) {
                    return {
                      ...comment,
                      subcomments: [...comment.subcomments, subcomment],
                    };
                  } else {
                    return comment;
                  }
                });
                dispatch(setComments(updatedComments))
                dispatch(setSubcommentForm({text: ""}))
              })
            }
          })
      }


  return (
    <Box>
      <TextArea 
      placeholder="Write a reply..." 
      name="reply"
      value={
        action === "comment" ? commentForm.text : subCommentForm.text}
      onChange={handleChange}/>
      <ButtonContainer>
        <SmallBlueButton text={"Reply"} onClick={handleSubmit}/>
      </ButtonContainer>
    </Box>
  );
}

export default ReplyContainer;
