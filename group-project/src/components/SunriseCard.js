function SunriseCard (props) {
    return (
        <div className="sun-info-card"> 
            <img src={require("../images/sunrise.png" )} alt="sunrise" className="sun-image"/> 
            <span className="sun-time">  {props.sunriseTime} </span>
            
        </div> 
    )
}

export default SunriseCard 