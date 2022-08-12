import { Info } from "../constants/otherapi";
import Search from "../components/Search";
import Buttons from "../components/Buttons";
import formatMoonphase from "../helpers/moonPhase";
import { useState } from "react";

function Home () {

const [city, setCity] = useState('');
// const [latitude, setLatitude] = useState('');
// const [longitude, setLongitude] = useState('');
const [sunriseTime, setSunriseTime]= useState('');
const [sunsetTime, setSunsetTime]= useState('');
const [moonphase, setMoonphase] = useState('')


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
    // let sunResults = await SunInfo(latitude, longitude)
    // console.log(sunResults.data.results.sunrise)
}

async function getSunsetInfo () {
    let results = await Info(city)
    let sunset = results.data.currentConditions.sunset
    console.log(results.data.currentConditions.sunset)
    setSunsetTime(sunset)
    // let sunResults = await SunInfo(latitude, longitude)
    // console.log(sunResults.data.results.sunset)
}

async function getMoonphaseInfo () {
    let results = await Info(city)
    let moonphases = results.data.currentConditions.moonphase
    setMoonphase(moonphases)
    console.log(moonphase)
}

    return (
        <div>
            <h1> Home </h1>
            < Search city={city} setCity ={setCity} />
           
            {/* City: {city}
            Latitude: {latitude}
            Longitude: {longitude} */}
            <Buttons sunriseButton = {getSunriseInfo} sunsetButton = {getSunsetInfo} moonphaseButton = {getMoonphaseInfo}/> 
           
            Sunrise: {sunriseTime}
            Sunset: {sunsetTime}
            Moonphase: {moonphase && formatMoonphase(moonphase)}
        </div>
    )
}

export default Home 