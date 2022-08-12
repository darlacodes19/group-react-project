import FullMoon from '../components/FullMoon'
import NewMoon from '../components/NewMoon'
import WaxingCrescent from '../components/WaxingCrescent'
import FirstQuarter from '../components/FirstQuarter'
import WaxingGibbous from '../components/WaxingGibbous'
import WanningGibbous from '../components/WanningGibbous'
import LastQuarter from '../components/LastQuarter'
import WanningCrescent from '../components/WanningCrescent'

export default function formatMoonphase (value) {

    if (value === 0){
        return <NewMoon />
    }  else if (value >= 0 && value < 0.25) {
        return <WaxingCrescent />
    }else if( value === 0.25 ) {
        return <FirstQuarter />
    }else if( value > 0.25 && value < 0.5) {
        return <WaxingGibbous />
    } else if (value === 0.5){
        return  <FullMoon />
    }else if(value > 0.5 && value <0.75) {
        return < WanningGibbous />
    }else if(value === 0.75) {
        return <LastQuarter />
    }else if(value >0.75 && value <=1){
        return <WanningCrescent />
    }   
}