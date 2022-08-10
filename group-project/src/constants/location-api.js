import axios from "axios";

// const BASE_URL = 'https://api.opencagedata.com/geocode/v1/google-v3-json?'

// const API_KEY = 'd910c349a23e4539979f6116f5eb207a'

export async function Location (city) {
    try {

        const locationResponse = await axios.get(`http://api.opencagedata.com/geocode/v1/google-v3-json?address=${city}&pretty=1&key=d910c349a23e4539979f6116f5eb207a`)
        console.log(locationResponse ,'this is the try statement')
        return locationResponse

    }catch(error) {
        console.log(error)
    }
}