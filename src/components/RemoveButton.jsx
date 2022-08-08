import React from "react";
import removeIcon from '../assets/images/icon-remove.svg'

export default function(props) {
    const {
        removeFilterHandler
    } = props

    return (
        <button className="filter-remove-btn">
            <img src={removeIcon} alt="X icon" onClick={removeFilterHandler} />
        </button>
    )
}