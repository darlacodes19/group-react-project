import FullMoon from '../components/FullMoon'

export default function formatMoonphase (value) {

    if (value === 0){
        return "New Moon"
    }  else if (value >= 0 && value < 0.25) {
        return "Waxing Crescent"
    }else if( value === 0.25 ) {
        return "first quarter"
    }else if( value > 0.25 && value < 0.5) {
        return "waxing gibbous"
    } else if (value === 0.5){
        return  <FullMoon />
    }else if(value > 0.5 && value <0.75) {
        return "Wanning Gibbous"
    }else if(value === 0.75) {
        return "last wuarter"
    }else if(value >0.75 && value <=1){
        return "wanning crescent"
    }   
}