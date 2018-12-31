import axios from 'axios'
import { MY_GEOCODE_API_KEY } from '../MyConstant/Constant'
const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + MY_GEOCODE_API_KEY


export const geocode = place =>
  axios.get(GEOCODE_ENDPOINT, { params: {address: place}} )
       .then((results) => {
         console.log(results)
         const data = results.data
         const status = data.status
         const result = data.results[0]
         if (typeof result === 'undefined'){
           return { status }
         }

         const address = result.formatted_address
         const location = result.geometry.location
         return {status, address, location}
       })



export const reverseGeocode = () => null
