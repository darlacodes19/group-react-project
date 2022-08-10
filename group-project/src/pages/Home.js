import { Location } from "../constants/location-api";
import { Info } from "../constants/otherapi";
import Search from "../components/Search";
import Buttons from "../components/Buttons";
import { useState } from "react";

function Home () {

const [city, setCity] = useState('');
// const [latitude, setLatitude] = useState('');
// const [longitude, setLongitude] = useState('');
const [sunriseTime, setSunriseTime]= useState('');
const [sunsetTime, setSunsetTime]= useState('');


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

    return (
        <div>
            < Search city={city} setCity ={setCity} />
           
            {/* City: {city}
            Latitude: {latitude}
            Longitude: {longitude} */}
            <Buttons sunriseButton = {getSunriseInfo} sunsetButton = {getSunsetInfo} /> 
           
            Sunrise: {sunriseTime}
            Sunset: {sunsetTime}
        </div>
    )
}

export default Home 