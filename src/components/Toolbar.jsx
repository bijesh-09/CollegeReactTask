import Input from "./Input";

const Toolbar = ( {searchText, setSearchText, filterCourse, setFilterCourse, sortBy, setSortBy, viewMode, setViewMode}) => {
    return (
        <div>
            <Input 
                label="Search Student By Name"
                value={searchText}
                onChange={(e)=> setSearchText(e.target.value)}
                placeholder="Enter student name"
                // type="text"
            />

            <div>
                <label>Filter by course</label>
                <select value={filterCourse} onChange={(e)=> setFilterCourse(e.target.value)}>
                    <option value="all">All Course</option>
                    <option value="BSc CSIT">BSc CSIT</option>
                    <option value="BCA">BCA</option>
                </select>
            </div>

            <div>
                <label>Sort By</label>
                <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="grade">Grade</option>
                </select>
            </div>

            <div>
                <label>View Mode</label>
                <button onClick={()=>setViewMode("grid")}
                    style={{fontWeight: viewMode === "grid" ? "bold" : "normal"}}>
                    Grid
                </button>
                <button onClick={()=>setViewMode("list")}
                    style={{fontWeight: viewMode === "list" ? "bold" : "normal"}}>
                    List
                </button>
            </div>
        </div>
    )
}
export default Toolbar;