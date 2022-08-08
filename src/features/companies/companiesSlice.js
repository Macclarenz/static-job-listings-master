import { createSlice } from "@reduxjs/toolkit";

const companies = createSlice({
    name: 'allCompanies',
    initialState: [],
    reducers: {
        loadCompanies: (state, action) => { 
            return action.payload
        }
    }
})

export const { loadCompanies, addFilteredCompanies } = companies.actions
export default companies.reducer