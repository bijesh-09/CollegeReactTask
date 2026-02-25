import StudentCard from "./StudentCard";


const StudentList = ({students, searchText, filterCourse, sortBy, onToggle, onDelete}) => {
    // Filter students based on search and course
    const filteredStudents = students.filter( s => {
        const matchesSearch = s.name.toLowerCase().includes(searchText.toLowerCase());
        const matchCourse = filterCourse === "all" || s.course === filterCourse;
        return matchesSearch && matchCourse;
    })

    // Sort students based on sortBy
    //filteredStudents.sort() will mutate the original array, so we create a copy using [...filteredStudents]

    const gradeValue = {
        "A+": 4.0,
        "A": 3.6,
        "B+": 3.2,
        "B": 2.8,
        "C+": 2.4,
        "C": 2.0,
        "D": 1.6,
        "NG": 0.0,
    }
    const sortedStudents = [...filteredStudents].sort(
        (a,b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name);//if returned -ve, 1st element a.name comes before 2nd element b.name, no swapping
            if (sortBy === "grade") return gradeValue[b.grade] - gradeValue[a.grade]; // Sort by grade value in descending order
            return 0;//no sorting since returning 0 to sort() means keep the order
        }
    )

    return (
        <div>
            <h2>Student Lists</h2>
            <div>
                {
                //defining js logic inside jsx, we need curly braces here, cuz wihtout {} ract will think its string
                    sortedStudents.map( s =>(
                                <StudentCard 
                                    key = {s.id} //here also we are using curly braces to use valid js exprns in SudentCard jsx component
                                    student = {s}
                                    onToggle = {() => onToggle(s.id)}
                                    onDelete = {() => onDelete(s.id)}
                                />    
                            ) 
                            // s=>(<StudetnCard />) is implicit return, while s=>{ return (<StudentCard />) } is explicit return
                    )
                }
            </div>
        </div>
    )

}
export default StudentList;