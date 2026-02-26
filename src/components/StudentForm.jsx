import Input from "./Input";
import Select from "./Select";
import { useState } from "react";
import Button from "./Button";
import "./StudentForm.css"

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
        <form onSubmit={handleSubmit} className="student-form">
            <h2>Add a Student</h2>

            <div className="form-actions">
                <Input
                    label="Student Name"
                    name="studentName"
                    value={name}
                    onChange={(e) => setName(e.target.value)} //onchaange event fires everytime a letter is typed in the input box
                    placeholder="Enter student name"
                />

                <Select
                    label="Course"
                    name="course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    options={[
                        { value: "BSc CSIT", label: "BSc CSIT" },
                        { value: "BCA", label: "BCA" }
                    ]}
                />

                <Select
                    label="Grade"
                    name="grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    options={[
                        { value: "A+", label: "A+" },
                        { value: "A", label: "A" },
                        { value: "B+", label: "B+" },
                        { value: "B", label: "B" },
                        { value: "C+", label: "C+" },
                        { value: "C", label: "C" },
                        { value: "D", label: "D" },
                        { value: "NG", label: "NG" }
                    ]}
                />

                {/* type = "submit" or type = "Submit" are same cuz attributes in js are case insensitive*/}
                <Button type="Submit">Add Student</Button>
                {/* type and children props are passed to Button component, other props have default values in Buttonjsx */}
                {/* buttons inside form tag are by default submit type */}

            </div>
        </form>
    )
}
export default StudentForm;