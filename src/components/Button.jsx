import "./Button.css"

const Button = ({children, onClick = ()=>{}, type = "button", variant = "primary", disabled = false}) => {
    // here putting onClick = ()=>{} as default value to avoid undefined error when onClick is not passed as props for eg in the Button component in studentformjsx,
    //  it will be an empty function that does nothing when called, but if default empty fn is not defined , then also nothing much will happen, just handling the undefined behaviour gracefully
    return (
        //this is the real button HTML element
        //default value of props should be defined in necessary situations to avoid undefined errors
        <button type={type} onClick={onClick} disabled={disabled} className={`btn btn-${variant}`}> 
            {children} 
            {/* children is the text betwn the component's tag i,e, <Button> bla bla </Button>, bla bla is the {children} */}
        </button>
    )

}
export default Button;