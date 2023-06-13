import { createSlice } from '@reduxjs/toolkit'

const errorsSlice = createSlice({
    name: 'errors',
    initialState: {
        errors: [],
    },
    reducers: {
        setErrors: (state, action) => {
            state.errors = action.payload
        }
    }
})
export default errorsSlice.reducer
export const { setErrors } = errorsSlice.actions