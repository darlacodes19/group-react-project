import { Info } from "../constants/otherapi";
import Search from "../components/Search";
import Buttons from "../components/Buttons";
import formatMoonphase from "../helpers/moonPhase";
import SunriseCard from "../components/SunriseCard";
import SunsetCard from "../components/SunsetCard";
import { useState } from "react";

function Home () {

const [city, setCity] = useState('');
// const [latitude, setLatitude] = useState('');
// const [longitude, setLongitude] = useState('');
const [sunriseTime, setSunriseTime]= useState('');
const [sunsetTime, setSunsetTime]= useState('');
const [moonphase, setMoonphase] = useState('')
const [fisrtIsActive, setFirstIsActive] = useState(false)
const [secondIsActive, setSecondIsActive] = useState(false)
const [thirdIsActive, setThirdIsActive] = useState(false)


// async function getLocation () { 
    
//     console.log(city)
//    try {   

//     let response = await Location(city)
//     let results = response.data.results[0].geometry.location
//     console.log(results)
//     setLatitude(results.lat)
//     setLongitude(results.lng)

//    }catch(error) {
//     console.log(error)
//    }          
           
// }

async function getSunriseInfo () {

    let results = await Info(city)
    let sunrise = results.data.currentConditions.sunrise
    console.log(results.data.currentConditions.sunrise)
    setSunriseTime(sunrise)
    setFirstIsActive(true)
    setSecondIsActive(false)
    setThirdIsActive(false)
    // let sunResults = await SunInfo(latitude, longitude)
    // console.log(sunResults.data.results.sunrise)
}

async function getSunsetInfo () {
    let results = await Info(city)
    let sunset = results.data.currentConditions.sunset
    console.log(results.data.currentConditions.sunset)
    setSunsetTime(sunset)
    // update state to conditionally render each card on buitton click, if false, card will not render, if true card will render and show on the browser
    setFirstIsActive(false)
    setSecondIsActive(true)
    setThirdIsActive(false)
    // let sunResults = await SunInfo(latitude, longitude)
    // console.log(sunResults.data.results.sunset)
}

async function getMoonphaseInfo () {
    let results = await Info(city)
    let moonphases = results.data.currentConditions.moonphase
    setMoonphase(moonphases)
    setThirdIsActive(true)
    setFirstIsActive(false)
    setSecondIsActive(false)
    console.log(moonphase)
}

    return (
        <div>
            
            < Search city={city} setCity ={setCity} />
           
            {/* City: {city}
            Latitude: {latitude}
            Longitude: {longitude} */}
            <Buttons sunriseButton = {getSunriseInfo} sunsetButton = {getSunsetInfo} moonphaseButton = {getMoonphaseInfo}/> 

           { getSunriseInfo && fisrtIsActive && <SunriseCard  sunriseTime = {sunriseTime}/> }
            
            { sunsetTime && secondIsActive && <SunsetCard  sunsetTime= {sunsetTime}/> }
           
           
           {moonphase && thirdIsActive &&formatMoonphase(moonphase)}
        </div>
    )
}


export default Home 