const Input = ({label , value, onChange, placeholder, type="text"}) => {
    return (
        <div>
            <label>{label}</label>
            <input 
                type={type}
                value = {value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}
export default Input;