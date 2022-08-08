import { configureStore } from "@reduxjs/toolkit";
import allCompaniesReducer from '../features/companies/companiesSlice'
import filterReducer from '../features/filter/filterSlice'

export default configureStore({
    reducer: {
        companies: allCompaniesReducer,
        filters: filterReducer
    }
})