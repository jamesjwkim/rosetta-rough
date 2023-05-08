

export function Filter() {


    return (
        <div className="filter">
            <h3>Filter</h3>
            <div className="searchFilter">
                <input className="searchBar" type="text" placeholder="Search..." />
                <p>Department</p>
                <select className="department">
                    <option value="any">Any</option>
                </select>
                <p>Field of Interest</p>
                <select className="department">
                    <option value="any">Any</option>
                </select>
                <p>Location</p>
                <select className="department">
                    <option value="any">Any</option>
                </select>
                <p>Institution</p>
                <select className="department">
                    <option value="any">Any</option>
                </select>

            </div>
            <div className="filterButtonContainer">
                <button className="buttonDesign">Filter!</button>
            </div>
        </div>
    )
}