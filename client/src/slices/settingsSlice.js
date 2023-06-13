import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        userPosts: {},
    },
    reducers: {
        setUserPosts(state, action) {
            state.userPosts = action.payload
        }
    }
})

export const { setUserPosts } = settingsSlice.actions
export default settingsSlice.reducer