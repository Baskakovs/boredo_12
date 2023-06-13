import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    countries: [],
    categories: "",
    titles: [],
    countrySelected: false,
    categorySelected: false,
    titleSelected: false,
  },
  reducers: {
    setCountries: (state, action) => {
      state.countries.push(action.payload);
    },
    setCountrySelected: (state, action) => {
        if(action.payload == state.countrySelected){
            state.countrySelected = false
            state.categorySelected = false
            state.titleSelected = false
            state.categories = []
            state.titles = []
        } else if (action.payload != state.countrySelected){
            state.countrySelected = action.payload
            state.categorySelected = false
            state.titleSelected = false
            state.categories = []
            state.titles = []
        }
    },
    setCategories: (state, action) => {
        state.categories = action.payload
    },
    setCategorySelected: (state, action) => {
        if(action.payload == state.categorySelected){
            state.categorySelected = false
            state.titleSelected = false
            state.titles = []
        }else if(action.payload != state.categorySelected){
            state.categorySelected = action.payload
            state.titleSelected = false
            state.titles = []
        }
    },
    setTitles: (state, action) => {
        state.titles = action.payload;
    },
    setTitleSelected: (state, action) => {
        if(action.payload == state.titleSelected){
            state.titleSelected = false
        }else if(action.payload != state.categorySelected){
            state.titleSelected = action.payload
        }
    }
  },
});

export const { setCountries, setCountrySelected, setCategories, setCategorySelected, setTitleSelected, setTitles } = searchSlice.actions;
export default searchSlice.reducer;