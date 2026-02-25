import Input from "./Input";
import { useState } from "react";
import Button from "./Button";

const StudentForm = ({ onAddStudent }) => {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("BSc CSIT");
    const [grade, setGrade] = useState("A+");

    const handleSubmit = (e) => { //here event objects are auto passed by the react or browser to these functions when the event is triggered, like a eventlistener
        e.preventDefault(); //to prevent the default behaviour of form submission which is to reload the page, it prevents us from losing the states

        if (!name.trim()) {//if name is empty then trim will return empty string which is falsy value, so !name.trim() will be true
            alert("Please enter student name");
            console.log("Error: Empty name field");
            return;
        }

        onAddStudent({ name: name, course: course, grade: grade }) //passing these key value pair object to newStudent props in appjsx

        //resetting the values afer form submission
        setName("");
        setCourse("BSc CSIT");
        setGrade("A+");
    }

    return (

        // onSubmit event triggered by the form when the button of type Submit is clicked
        <form onSubmit={handleSubmit}>
            <h2>Add a Student</h2>

            <Input
                label="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)} //onchaange event fires everytime a letter is typed in the input box
                placeholder="Enter student name"
            />

            <div>
                <label>Course</label>
                <select value={course} onChange={(e) => setCourse(e.target.value)}>
                    <option value="BSc CSIT">BSc CSIT</option>
                    <option value="BCA">BCA</option>
                </select>
            </div>

            <div>
                <label>Grade</label>
                <select value={grade} onChange={(e) => setGrade(e.target.value)}>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="NG">NG</option>
                </select>
            </div>

            {/* type = "submit" or type = "Submit" are same cuz attributes in js are case insensitive*/}
            <Button type="Submit">Add Student</Button>
            {/* type and children props are passed to Button component, other props have default values in Buttonjsx */}
            {/* buttons inside form tag are by default submit type */}
        </form>
    )
}
export default StudentForm;