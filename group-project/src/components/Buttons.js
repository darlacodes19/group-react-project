

function Buttons (props) {
   

    return (
        <div className="buttons-container"> 
            <button onClick={props.sunriseButton} className="button"> SUNRISE </button>
            <button onClick={props.sunsetButton}className="button"> SUNSET </button>
            <button onClick={props.moonphaseButton} className="button"> MOONPHASE </button> 
        </div> 
    )
}


export default Buttons 