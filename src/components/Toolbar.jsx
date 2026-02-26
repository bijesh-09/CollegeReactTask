import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import "./Toolbar.css"
const Toolbar = ({ searchText, setSearchText, filterCourse, setFilterCourse, sortBy, setSortBy, viewMode, setViewMode }) => {
    return (
        <div className="toolbar">
            <div className="toolbar-group">

                <Input
                    label="Search Student By Name"
                    name="searchStudent"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Enter student name"
                // type="text"
                />

                <Select
                    label="Filter by course"
                    name="filterCourse"
                    value={filterCourse}
                    onChange={(e) => setFilterCourse(e.target.value)}
                    options={[
                        { value: "all", label: "All Course" },
                        { value: "BSc CSIT", label: "BSc CSIT" },
                        { value: "BCA", label: "BCA" }
                    ]}
                />

                <Select
                    label="Sort By"
                    name="sortBy"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    options={[
                        { value: "name", label: "Name" },
                        { value: "grade", label: "Grade" }
                    ]}
                />

                <div className="view-toggle">
                    <label>View Mode</label>
                    <Button onClick={() => setViewMode("grid")}>
                        Grid
                    </Button>
                    <Button onClick={() => setViewMode("list")}>
                        List
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Toolbar;