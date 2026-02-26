import "./Input.css"

const Input = ({ label, name, value, onChange, placeholder, type = "text" }) => {
    return (
        <div className="input-group">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}
export default Input;