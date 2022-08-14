

function Buttons (props) {
   

    return (
        <div className={props.style}> 
            <button onClick={props.sunriseButton}> SUNRISE </button>
            <button onClick={props.sunsetButton}> SUNSET </button>
            <button onClick={props.moonphaseButton}> MOONPHASE </button> 
        </div> 
    )
}


export default Buttons 