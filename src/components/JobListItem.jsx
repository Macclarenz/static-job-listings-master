import React from "react";

export default function (props) {
    const {
        id,
        company,
        logo,
        featured,
        position,
        filterList,
        location, 
        isNew,
        postedAt,
        contract,
        addFilterHandler
    } = props

    return (
        <>
            <img src={logo} alt="" className="job-image" />
            <div className="job-detail">
                <p className="job-company">
                    {company}
                    {isNew && <span className="job-new">NEW!</span>}
                    {featured && <span className="job-featured">FEATURED!</span>}
                </p>
                <h2 className="job-position">{position}</h2>
                <p className="job-other-detail">
                    <span className="job-posted-at">{postedAt}</span>
                    &bull; 
                    <span className="job-contract">{contract}</span>
                    &bull; 
                    <span className="job-location">{location}</span>
                </p>
            </div>
            <ul className="job-filter-list">
                {
                    filterList?.length && filterList.map(filter => (
                        <li key={`job-filter-${filter}-${id}`} className="job-filter-item">
                            <button type="button" className="job-filter-btn" onClick={() => addFilterHandler(filter)}>
                                {filter}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>

    )
}