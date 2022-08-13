export default function FormatTime (time) {

    let timeSplit = time.split(':')
    
    console.log(timeSplit)
    if (timeSplit[0] < 12) {
        return `${timeSplit[0][1]}:${timeSplit[1]} AM`

    } else {

        return `${timeSplit[0]-12}:${timeSplit[1]} PM`
    }

    
    
}