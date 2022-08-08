import React, { useEffect, useState } from "react";
import '../style/style.scss'

import { useSelector, useDispatch } from "react-redux";
import { loadCompanies } from "../features/companies/companiesSlice";
import { addFilter, clearFilter, removeFilter } from "../features/filter/filterSlice";
import data from '../../data'
import RemoveButton from "../components/RemoveButton";
import JobListItem from "../components/JobListItem";

export default function App() {
    const companies = useSelector(state => state.companies)
    const filters = useSelector(state => state.filters)
    const dispatch = useDispatch()
    const [visibleCompanies, setVisibleCompanies] = useState([])

    const renderedData = data.map(el => ({
        id: el.id,
        company: el.company,
        logo: el.logo,
        featured: el.featured,
        position: el.position,
        filterList: [el.role, el.level]
            .concat(el.languages)
            .concat(el.tools),
        location: el.location,
        isNew: el.new,
        postedAt: el.postedAt,
        contract: el.contract,
    }))

    // print message of state
    // useEffect(() => {
    //     console.log(companies)
    //     console.log(filters)
    // }, [companies, filters])

    // print message of visibleCompany state
    // useEffect(() => {
    //     console.log(visibleCompanies)
    // }, [visibleCompanies])

    // load companies
    useEffect(() => {
        dispatch(loadCompanies(renderedData))
    }, [])

    // sets and filters company that will be visible based on the array of filters
    useEffect(() => {
        setVisibleCompanies(() => companies.filter(company => filters.every(el => company.filterList.includes(el))))
    }, [filters, companies])

    // adds filter
    const addFilterHandler = (filter) => {
        if (filters.includes(filter)) return
        dispatch(addFilter(filter))
    }

    // removes filter
    const removeFilterHandler = (filter) => {
        dispatch(removeFilter(filter))
    }

    // clears filter
    const clearFilterHandler = () => {
        dispatch(clearFilter())
    }

    // if the filter is empty, its element and container will not be display
    useEffect(() => {
        const filterContainer = document.querySelector('.filter-container')
        if (!filters?.length) filterContainer.setAttribute('empty', '')
        else filterContainer.removeAttribute('empty')
    }, [filters])

    return (
        <>
            <header className="header-background">

            </header>
            <main>
                <div className="filter-container" >
                    <ul className="filter-list">
                        {
                            filters?.length && filters.map((filter, index) => (
                                // filter tablet
                                <li className="filter-item" key={`filter-${index}`}>
                                    {filter}
                                    <RemoveButton removeFilterHandler={() => removeFilterHandler(filter)} />
                                </li>
                            ))
                        }
                    </ul>
                    <button id="filterClearBtn" type="button" onClick={clearFilterHandler}>Clear</button>
                </div>
                <ul className="job-list">
                    {
                        visibleCompanies?.length && visibleCompanies.map(data => (
                            <li key={data.id} className="job-list-item" featured={data.featured ? "true" : "false"}>
                                <JobListItem
                                    id={data.id}
                                    company={data.company}
                                    logo={data.logo}
                                    featured={data.featured}
                                    position={data.position}
                                    filterList={data.filterList}
                                    location={data.location}
                                    isNew={data.isNew}
                                    postedAt={data.postedAt}
                                    contract={data.contract}
                                    addFilterHandler={addFilterHandler}
                                />
                            </li>
                        ))
                    }
                </ul>
            </main>
        </>
    )
}