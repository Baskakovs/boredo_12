import { createSlice } from '@reduxjs/toolkit'

const writeSlice = createSlice({
    name: 'write',
    initialState: {
        writeForm: {
            user_id: "",
            geography_id: "",
            category_id: "",
            title_id: "",
            text: "",
            published: true
        },
        geographiesList: [],
        categoriesList: [],
        titlesList: [],
        geography_selected: false,
        category_selected: false,
        title_selected: false,
    },
    reducers: {
        setVisibility(state, action) {
            if (action.payload === "true_false") {
              state.writeForm.published = !state.writeForm.published
            } else if (action.payload !== undefined) {
              state.writeForm.published = action.payload
            }
          },
        setText(state, action) {
            state.writeForm.text = action.payload
        },
        setGeographiesList(state, action){
            state.geographiesList = action.payload
        },
        setCategoriesList(state, action){
            state.categoriesList = action.payload
        },
        setTitlesList(state, action){
            state.titlesList = action.payload
        },
        setGeographySelected(state, action){
            state.geography_selected = action.payload
            if(action.payload !== false && action.payload !== undefined && action.payload !== null){
                state.writeForm.geography_id = action.payload.id
            }else{
                state.writeForm.geography_id = ""
                // Clear dependent selections
                state.category_selected = false
                state.title_selected = false
                state.writeForm.category_id = ""
                state.writeForm.title_id = ""
            }
        },
        setCategorySelected(state, action){
            state.category_selected = action.payload
            if(action.payload !== false && action.payload !== undefined && action.payload !== null){
                state.writeForm.category_id = action.payload.id
            }else{
                state.writeForm.category_id = ""
                // Clear dependent selection
                state.title_selected = false
                state.writeForm.title_id = ""
            }
        },
        setTitleSelected(state, action){
            state.title_selected = action.payload
            if(action.payload !== false && action.payload !== undefined && action.payload !== null){
                state.writeForm.title_id = action.payload.id
            }else{
                state.writeForm.title_id = ""
            }
        },
        resetWriteForm(state){
            state.writeForm = {
                user_id: "",
                geography_id: "",
                category_id: "",
                title_id: "",
                text: "",
                published: true
            }
            state.geography_selected = false
            state.category_selected = false
            state.title_selected = false
        }
    }
})

export const { setVisibility, setText, setGeographiesList, setCategoriesList, setTitlesList, setGeographySelected, setCategorySelected, setTitleSelected, resetWriteForm } = writeSlice.actions
export default writeSlice.reducer