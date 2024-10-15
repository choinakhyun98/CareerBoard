

function ValidationAlert(props){

    return(
        props.input === ''? (
            <p></p> 
        ) : (
            props.check === false ? 
            <p className="alert-false">{props.validation}</p> 
            : <p className="alert-true">{props.validation}</p>
        )
    )
}

export default ValidationAlert;