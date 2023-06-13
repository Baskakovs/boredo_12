import { createSlice } from '@reduxjs/toolkit'

const accountSettingsSlice = createSlice({
    name: 'accountSettings',
    initialState: {
        mainInfoForm: {
            name: "",
            email: "",
            date_of_birth: "",
        }
    },
    reducers: {
        setMainInfoForm: (state, action) => {
            state.mainInfoForm = action.payload
        }
    }
})

export default accountSettingsSlice.reducer
export const { setMainInfoForm } = accountSettingsSlice.actions
