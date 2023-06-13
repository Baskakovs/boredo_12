import { createSlice } from '@reduxjs/toolkit'

const furtherSlice = createSlice({
    name: 'further',
    initialState: {
        post: {
            title: {
                name: "",
                id: ""
            },
            text:"",
            category: {
                name: "",
                id: ""
            },
            geography: {
                name: "",
                id: ""
            },
            comments: [],
            user: {
                name: "",
                id: ""
            },
            created_at: ""
        },
        commentForm: {
            text: "",
            post_id: "",
            user_id: ""
        },
        subCommentForm: {
            text: "",
            comment_id: "",
            post_id: "",
            user_id: ""
        }
    },
    reducers: {
        setPost(state, action) {
            state.post = action.payload
        },
        setCommentForm(state, action) {
            state.commentForm = action.payload
        },
        setSubcommentForm(state, action) {
            state.subCommentForm = action.payload
        },
        setComments(state, action) {
            state.post.comments = action.payload
        }
    }
})
export default furtherSlice.reducer
export const { setPost, setCommentForm, setSubcommentForm, setComments} = furtherSlice.actions