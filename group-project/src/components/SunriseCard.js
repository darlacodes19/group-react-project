import formatTime from "../helpers/formatTime"
function SunriseCard (props) {
    return (
        <div className="sun-info-card"> 
            <img src={require("../images/sunrise.png" )} alt="sunrise" className="sun-image"/> 
            <h4 className="sun-time">  {formatTime(props.sunriseTime)} </h4>
            
        </div> 
    )
}

export default SunriseCard 