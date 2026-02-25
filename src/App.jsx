import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Toolbar from './components/Toolbar'
import StudentList from './components/StudentList'
import StudentForm from './components/StudentForm'

function App() {
  //we should always use component with lowest common state, appjsx has the lowest common state which is used and passed down to other child components, and the changes made by child is reflected upon parent
  const [students, setStudents] = useState([
    {id: 1, name: "Ram Shrestha", course: "BSc CSIT", grade: "A+", isPresent: true,},
    {id: 2, name: "Sita Thapa", course: "BSc CSIT", grade: "A", isPresent: false,},

  ])
  const [searchText, setSearchText] = useState("");
  const [filterCourse, setFilterCourse] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");

  const handleAddStudent = (newStudent) => {
    const student = {id: students.length, ...newStudent, isPresent: true}
    setStudents([...students, student])
  }

  const handleToggle = (id) => { //for toggling the presence or absence of the student
    setStudents(students.map( s => s.id === id ? {...s, isPresent: !s.isPresent} : s )); //overrides the isPresent of the current s if the id matches
  }

  const handleDelete = (id) => { //to delete the student from the list
    setStudents(students.filter( s=> s.id !== id ) ) //mutating the orignal students array , this filter will append all the student objects except that matched with the given id
  }

  return (
    <div>
      <Header />
      <Toolbar />
      <StudentList
        students={students}
        searchText={searchText}
        filterCourse={filterCourse}
        sortBy={sortBy}
        onToggle = {handleToggle}
        onDelete = {handleDelete}
      />
      <StudentForm onAddStudent={handleAddStudent}/>
    </div>
  )
}


export default App
