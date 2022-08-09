import axios from "axios";

// const BASE_URL = 'https://api.opencagedata.com/geocode/v1/google-v3-json?'

// const API_KEY = 'd910c349a23e4539979f6116f5eb207a'

export async function Location (city) {
    try {

        const response = await axios.get(`https://api.opencagedata.com/geocode/v1/google-v3-json?address=atlanta&pretty=1&key=d910c349a23e4539979f6116f5eb207a`)
        console.log(response)

    }catch(error) {
        console.log(error)
    }
}