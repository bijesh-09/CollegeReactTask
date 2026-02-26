import Badge from "./Badge";
import Button from "./Button";
import "./StudentCard.css"
const StudentCard = ({student, onToggle, onDelete}) => {
    return (
        <div className="student-card">
            <h3>{student.name}</h3>
            <p>Course: {student.course} </p>
            <p>Grade: {student.grade} </p>

            {/* &&, if found first falsy value, returns that value which is false, so nothing returns */}
            {student.grade === "A+" && <Badge label="Top performer" type="success" />}

            <Badge 
                label={student.isPresent ? "Present" : "Absent"}
                type = {student.isPresent ? "success" : "warning"}
            />
            <div className="card-actions">

            {/* only js exprns require {} the strings like variant = "primary" dont need {} */}
            {/* Here Button is the component not actual button tag */}
            <Button onClick={onToggle} variant="primary" > 
                {student.isPresent ? "Mark Absent" : "Mark Present"}
                {/* this text "Mark absednt or present" betwn Button component is passed as {children} props, it default react behaviour  */}
            </Button>

            <Button onClick={onDelete} variant = "danger">
                Delete Student
            </Button>
            </div>



        </div>
    )
}
export default StudentCard;