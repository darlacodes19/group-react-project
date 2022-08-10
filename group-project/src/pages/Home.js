import { Location } from "../constants/location-api";
// import { SunInfo } from "../constants/sunrise-api";
import { Info } from "../constants/otherapi";
import Search from "../components/Search";
import { useState } from "react";

function Home () {

const [city, setCity] = useState('');
const [latitude, setLatitude] = useState('');
const [longitude, setLongitude] = useState('');


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
    console.log(results)
    // let sunResults = await SunInfo(latitude, longitude)
    // console.log(sunResults.data.results.sunrise)
}

async function getSunsetInfo () {
    let results = await Info(city)
    console.log(results)
    // let sunResults = await SunInfo(latitude, longitude)
    // console.log(sunResults.data.results.sunset)
}

    return (
        <div>
            < Search city={city} setCity ={setCity} />
            <button> Search </button>  
            City: {city}
            Latitude: {latitude}
            Longitude: {longitude}
            <button onClick={getSunriseInfo}> SUNRISE </button>
            <button onClick={getSunsetInfo}> SUNSET </button>
            <button> MOONPHASE </button> 
        </div>
    )
}

export default Home 