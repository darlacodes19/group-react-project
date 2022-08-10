import { Location } from "../constants/location-api";
import Search from "../components/Search";
import { useState } from "react";

function Home () {

const [city, setCity] = useState('');
const [latitude, setLatitude] = useState('');
const [longitude, setLongitude] = useState('');


async function getLocation () {
    
    console.log(city)
   try {   

    let response = await Location(city)
    let results = response.data.results[0].geometry.location
    console.log(results)
    setLatitude(results.lat)
    setLongitude(results.lng)

   }catch(error) {
    console.log(error)
   }          
           
}
    return (
        <div>
            < Search city={city} setCity ={setCity} />
            <button onClick= {getLocation}> Search </button>  
            City: {city}
            Latitude: {latitude}
            Longitude: {longitude}
        </div>
    )
}

export default Home 