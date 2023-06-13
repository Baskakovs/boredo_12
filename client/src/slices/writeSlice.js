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
            console.log("hi")
            state.geography_selected = action.payload
            if(action.payload !== undefined){
                state.writeForm.geography_id = action.payload.id
            }else{
                state.writeForm.geography_id = ""
            }
        },
        setCategorySelected(state, action){
            state.category_selected = action.payload
            if(action.payload !== undefined){
                state.writeForm.category_id = action.payload.id
            }else{
                state.writeForm.category_id = ""
            }
        },
        setTitleSelected(state, action){
            state.title_selected = action.payload
            if(action.payload !== undefined){
                state.writeForm.title_id = action.payload.id
            }else{
                state.writeForm.title_id = ""
            }
        }
    }
})

export const { setVisibility, setText, setGeographiesList, setCategoriesList, setTitlesList, setGeographySelected, setCategorySelected, setTitleSelected } = writeSlice.actions
export default writeSlice.reducer