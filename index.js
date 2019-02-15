// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(42 - location)
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(end-start) * 264
}

function calculatesFarePrice(start, destination) {
    let feetTravelled = distanceTravelledInFeet(start, destination);
    if (feetTravelled <= 400) {
        return 0
    } else if (feetTravelled > 2500) {
        return 'cannot travel that far'
    } else if (feetTravelled > 400 && feetTravelled < 2000) {
        return (feetTravelled - 400) * 0.02
    } else {
        return 25
    }
}
