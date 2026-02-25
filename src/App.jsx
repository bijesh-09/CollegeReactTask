import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Toolbar from './components/Toolbar'
import StudentList from './components/StudentList'
import StudentForm from './components/StudentForm'

function App() {
  //we should always use component with lowest common state, appjsx has the lowest common state which is used and passed down to other child components, and the changes made by child is reflected upon parent
  const [students, setStudents] = useState([])
  const [searchText, setSearchText] = useState("");
  const [filterCourse, setFilterCourse] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");
  const [showForm, setShowForm] = useState(false);

  const [hasLoadedStudents, setHasLoadedStudents] = useState(false); 
  //load from local storage when app mounts
  useEffect(
    () => {
      try {
        console.log("Loading students from localStorage")
        const savedStudents = localStorage.getItem("students")
        console.log("Raw data from storage:", savedStudents)
        if (savedStudents) {
          console.log("Found data, parsing...")
          const parsedStudents = JSON.parse(savedStudents);
          console.log("Parsed students:", parsedStudents);
          setStudents(parsedStudents);
        }
        setHasLoadedStudents(true); //mark that we have loaded students
      } catch (error) {
        console.error("Error loading students from localStorage", error);
        setHasLoadedStudents(true); //mark that we have loaded students
      }
    }, [] //empty dependency array means this useEffect will run only once when the component mounts
  )

  useEffect(
    () => {
      if( !hasLoadedStudents) return console.log("Skipping saving to localStorage since students have not been loaded yet");
      try {
        console.log("Saving students to localStorage")
        localStorage.setItem("students", JSON.stringify(students));
      } catch (error) {
        if (error.name === "QuotaExceededError") {
          console.error("Local storage quota exceeded. Unable to save students. Run: localStorage.clear() in console to free space", error);
          console.log("To clear: localStorage.clear()")
          
        }
      }
    }, [students, hasLoadedStudents] //this useEffect will run every time the students state changes, cuz we have students in dependency array
  )

  const handleAddStudent = (newStudent) => {
    const student = {id: Date.now(), ...newStudent, isPresent: true}
    setStudents([...students, student])
    setShowForm(false); //to close the form after adding the student
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
      <Toolbar
        searchText={searchText}
        setSearchText={setSearchText}
        filterCourse={filterCourse}
        setFilterCourse={setFilterCourse}
        sortBy={sortBy}
        setSortBy={setSortBy}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <button onClick={()=>setShowForm(true)}>Add student</button>

      {
        showForm && (
          <div>
            <button onClick={()=>setShowForm(false)} className="form-close-btn" >
              ✕
            </button>
            <StudentForm onAddStudent={handleAddStudent}/>
          </div>
        )
      }
      
      <StudentList
        students={students}
        searchText={searchText}
        filterCourse={filterCourse}
        sortBy={sortBy}
        onToggle = {handleToggle}
        onDelete = {handleDelete}
        viewMode={viewMode}
      />
    </div>
  )
}


export default App
