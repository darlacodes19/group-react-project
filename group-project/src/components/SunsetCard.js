import formatTime from "../helpers/formatTime"
function SunsetCard (props) {
    return (
        <div className="sun-info-card"> 
            <img src= {require("../images/sunset.png")} alt="sunrise" className="sun-image"/> 
            <h4 className="sun-time">  {formatTime(props.sunsetTime)} </h4>

        </div> 
    )
}

export default SunsetCard 