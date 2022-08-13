import formatTime from "../helpers/formatTime"
function SunsetCard (props) {
    return (
        <div className="sun-info-card"> 
            <img src= {require("../images/sunset.png")} alt="sunrise" className="sun-image"/> 
            <span className="sun-time">  {formatTime(props.sunsetTime)} </span>

        </div> 
    )
}

export default SunsetCard 