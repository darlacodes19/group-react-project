import { Location } from "../constants/location-api";
import Search from "../components/Search";
import { useState } from "react";

function Home () {

const [city, setCity] = useState('')

async function getLocation () {
    const apiResponse = await Location(city)
    console.log(apiResponse)
}
    return (
        <div>
            < Search city={city} setCity ={setCity} />
            <button onClick={getLocation}> Search </button>  
        </div>
    )
}

export default Home 