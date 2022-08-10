import axios from "axios"

export async function Info (city) {
    const infoResponse = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=K6LBSZ5BC8ADKCYHSHA3AU729&contentType=json`)
    console.log(infoResponse, 'api call')
    return infoResponse
}