import { createSlice } from "@reduxjs/toolkit";

const filter = createSlice({
    name: 'filters',
    initialState: [],
    reducers: {
        addFilter: (state, action) => { state.push(action.payload) },
        removeFilter: (state, action) => state.filter(el => el != action.payload),
        clearFilter: () => []
    },
})

export default filter.reducer
export const { addFilter, removeFilter, clearFilter } = filter.actions