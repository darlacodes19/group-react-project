

function Buttons (props) {

    return (
        <div> 
            <button onClick={props.sunriseButton}> SUNRISE </button>
            <button onClick={props.sunsetButton}> SUNSET </button>
            <button onClick={props.moonphaseButton}> MOONPHASE </button> 
        </div> 
    )
}


export default Buttons 