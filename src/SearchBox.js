import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input onChange={searchChange} className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="searchRobots" />
        </div>
    )
}

export default SearchBox